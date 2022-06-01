// pages/selectdate/selectdate.js

var Calendar = require('../calendar/calendar');
var ccFile = require('../../utils/calendar-converter.js')
var calendarConverter = new ccFile.CalendarConverter();
var MIN_LUNAR_YEAY = 2022;
var month_lunar = "一二三四五六七八九十冬腊"
var lastDay = 0;
var lastMonth = 0;
var lastYear = 0;
var launchYear = 0;
var launchMonth = 0;
var launchDay = 0;
var isLeap = false;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    selected_value: [],
    days: [],
    month: [],
    years: [],
    lunar_years: [],
    lunar_month: [],
    lunar_days: [],
    selectDateType: 1,
    lunar_selected_value: [],
    types: 0,
    describe: '',
    title: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // console.log("adafga", options.type)
    that.setData({
      types: options.type,
    })
    new Calendar('key', this, function (date) {
      that.setData({
        date: date,
      })
    });
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    this.setData({
      date: year + "年" + month + "月" + day + "日"
    })
  },


  test(e) {
    var _this = this
    if (this.data.title != '' && this.data.describe != '') {
      var date = ''
      if (this.data.selectDateType == 1) {
        var year = this.data.years[this.data.selected_value[0]].id
        var month = this.data.month[this.data.selected_value[1]].id + 1
        var day = this.data.days[this.data.selected_value[2]].id + 1
        date = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
        this.setData({
          dateText: date
        })
      } else {
        this.trueDate()
      }
      wx.showModal({
        title: "确认信息",
        content: (this.data.selectDateType == 1 ? '公历：' : '农历：') + ' ' + this.data.date + '\n' + (this.data.selectDateType == 2 ? '公历：' + this.data.dateText + '\n' : '') + "事件：" + this.data.title + '\n' + "描述：" + this.data.describe,
        success(res) {
          if (res.confirm) {
            wx.showLoading({
              title: '正在添加',
            })
            wx.requestSubscribeMessage({
              tmplIds: ["M6pds0pSRZ0_QpDlzJrZJKcY8BYhhW141zoAeOay-Pc"],
              success(res) {
                console.log(res)
                if (res['M6pds0pSRZ0_QpDlzJrZJKcY8BYhhW141zoAeOay-Pc'] === 'accept') {
                  var notificationData = {
                    date2: { value: _this.data.dateText },
                    thing1: { value: _this.data.title },
                    thing3: { value: _this.data.describe },
                  }
                  wx.cloud
                    .callFunction({
                      name: 'addNotificationMsg',
                      data: {
                        data: notificationData,
                        dateText: _this.data.date,
                        dateType: _this.data.selectDateType,
                        templateId: "M6pds0pSRZ0_QpDlzJrZJKcY8BYhhW141zoAeOay-Pc"
                      },
                    })
                    .then(() => {
                      wx.hideLoading({
                        success: (res) => {
                          wx.showToast({
                            title: '添加成功',
                            icon: 'success',
                            success(res) {
                              wx.navigateBack({
                                delta: 0,
                              })
                            }
                          });
                        },
                      })

                    })
                    .catch(() => {
                    });

                }
              }
            })
          }
        }
      })



    } else {
      wx.showModal({
        title: "提示",
        content: "请输入 事件 / 描述",
        showCancel: false
      })
    }
  },

  trueDate: function () {
    var launch_Mouth = this.data.lunar_month[this.data.lunar_selected_value[1]].name;
    launchYear = this.data.lunar_selected_value[0] + MIN_LUNAR_YEAY;
    if (launch_Mouth.indexOf("闰") === -1) {//不是闰月
      isLeap = false;
      launchMonth = month_lunar.indexOf(launch_Mouth.substring(0, 1));
    } else {
      isLeap = true;
      launchMonth = month_lunar.indexOf(launch_Mouth.substring(1, 2));
    }
    launchDay = this.data.lunar_selected_value[2] + 1;
    console.log("农  历:", launchYear + "年" + launch_Mouth + launchDay);
    var data = {
      launchYear: launchYear,
      launchMonth: launchMonth,
      launchDay: launchDay
    }
    var dEx = calendarConverter.lunar2solar(data, isLeap);//农历转阳历代码
    lastYear = dEx.sYear;//农转阳（年）
    lastMonth = dEx.sMonth;//农转阳（月）
    lastDay = dEx.sDay + 1;//农转阳（日）
    var date = ''
    date = lastYear + '-' + (lastMonth < 10 ? '0' + lastMonth : lastMonth) + '-' + (lastDay < 10 ? '0' + lastDay : lastDay)
    this.setData({
      dateText: date
    })
  },



  bindTitleChange: function (e) {
    this.setData({
      title: e.detail.value
    })
  },

  bindDescribeChange: function (e) {
    this.setData({
      describe: e.detail.value
    })
  }

})