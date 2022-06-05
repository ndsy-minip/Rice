// pages/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province: "北京市",
    value: "",
    result: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNowCity()
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

  getNowCity: function () {
    var _this = this
    wx.showLoading({
      title: '正在获取位置',
    })
    wx.getLocation({
      type: "wgs84",
      success(res) {
        wx.cloud.callFunction({
          name: "getCity",
          data: {
            "location": res.latitude + "," + res.longitude,
          },
          success(res) {
            console.log(JSON.parse(res.result))
            _this.setData({
              province: JSON.parse(res.result).result.address_component.province
            })
            _this.getMarket()
          }
        })
      }
    })
  },

  getMarket: function () {
    var _this = this
    wx.request({
      url: 'https://ndjcsf.cn:2222/market',
      data: {
        "province": _this.data.province
      },
      success(res) {
        for (let i in res.data.list) {
          for (let j in res.data.list[i]) {
            res.data.list[i][j].promulgate_date = res.data.list[i][j].promulgate_date.split(" ",1)
          }
        }
        for (let i in res.data.province) {
          for (let j in res.data.province[i]) {
            res.data.province[i][j].promulgate_date = res.data.province[i][j].promulgate_date.split(" ",1)
          }
        }
        _this.setData({
          list: res.data.list,
          province_: res.data.province
        })
        wx.hideLoading({
          success: (res) => { },
        })
      }
    })
  },

  keyInput(e) {
    var value = e.detail.value

    var list = this.data.list
    var result = {}
    for (var i in list) {
      if (i.indexOf(value) != -1) {
        result[i] = list[i]
      }
    }
    this.setData({
      result,
      value
    })

  }


})