// pages/notification_test/notification_test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    weekday: ["日", "一", "二", "三", "四", "五", "六"],
    selectOpen: ["公历", "农历"],
    _num: 0,
    value: {
      year: '',
      month: '',
      day: '',
      isLunarCalendar: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var weekdayIndex = date.getDay()
    var value = {
      year: year,
      month: month,
      day: day,
      isLunarCalendar: false,
      isLeapMonth: true
    }
    date = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
    this.setData({
      date,
      today: date,
      weekdayIndex,
      value
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  bindDateChange: function (e) {
    var weekdayIndex = new Date(e.detail.value).getDay()
    this.setData({
      date: e.detail.value,
      weekdayIndex
    })
  },


  bindDateChange: function (e) {
    var today = this.data.today
    var year = e.detail.value.year
    var month = e.detail.value.month
    var day = e.detail.value.day
    var date = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
    console.log(date)
    if(this.data._num==1){
      console.log(calendar.getLunarDateString(date))
    }
    if (new Date(date) <= new Date(today)) {
      wx.showModal({
        title: "往者不可谏~请选择未来的某一天",
        showCancel: false
      })
    } else {
      this.setData({
        date: date
      })
    }

  },




  addNotification: function (e) {
    var _this = this
    wx.requestSubscribeMessage({
      tmplIds: ["M6pds0pSRZ0_QpDlzJrZJKcY8BYhhW141zoAeOay-Pc"],
      success(res) {
        console.log(res)
        if (res['M6pds0pSRZ0_QpDlzJrZJKcY8BYhhW141zoAeOay-Pc'] === 'accept') {
          var notificationData = {
            date2: { value: _this.data.date },
            thing1: { value: "test" },
            thing3: { value: "test" }
          }
          wx.cloud
            .callFunction({
              name: 'addNotificationMsg',
              data: {
                data: notificationData,
                templateId: "M6pds0pSRZ0_QpDlzJrZJKcY8BYhhW141zoAeOay-Pc"
              },
            })
            .then(() => {
              wx.showToast({
                title: '订阅成功',
                icon: 'success'
              });
            })
            .catch(() => {
            });

        }
      }
    })

  },
  switchChange: function (e) {
    var value = this.data.value
    if (e.currentTarget.dataset.index == 0) {
      value.isLunarCalendar = false
    } else {
      value.isLunarCalendar = true
    }
    this.setData({
      value,
      _num: e.currentTarget.dataset.index
    })
  }

})