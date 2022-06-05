// pages/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province: "北京市"
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
      url: 'http://ndjcsf.cn:2222/market',
      data: {
        "province": _this.data.province
      },
      success(res) {
        console.log(res)
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })
  }


})