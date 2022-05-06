// pages/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: "北京市"
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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
            _this.setData({
              city: JSON.parse(res.result).result.address_component.city
            })
            wx.hideLoading({
              success: (res) => { },
            })
          }
        })
      }
    })
  },


  openMap() {
    var _this = this
    wx.chooseLocation({
      success(res) {
        _this.getCityName(res)
      }
    })
  },


  getCityName(res) {
    var that = this
    var regex = /^(北京市|天津市|重庆市|上海市|香港特别行政区|澳门特别行政区)/;
    var REGION_PROVINCE = [];
    var addressBean = {
      REGION_PROVINCE: null,
      REGION_COUNTRY: null,
      REGION_CITY: null,
      ADDRESS: null
    };
    function regexAddressBean(address, addressBean) {
      regex = /^(.*?[市州]|.*?地区|.*?特别行政区)(.*?[市区县])(.*?)$/g;
      var addxress = regex.exec(address);
      addressBean.REGION_CITY = addxress[1];
      addressBean.REGION_COUNTRY = addxress[2];
      addressBean.ADDRESS = addxress[3] + "(" + res.name + ")";
    }
    if (!(REGION_PROVINCE = regex.exec(res.address))) {
      regex = /^(.*?(省|自治区))(.*?)$/;
      REGION_PROVINCE = regex.exec(res.address);
      addressBean.REGION_PROVINCE = REGION_PROVINCE[1];
      regexAddressBean(REGION_PROVINCE[3], addressBean);
    } else {
      addressBean.REGION_PROVINCE = REGION_PROVINCE[1];
      regexAddressBean(res.address, addressBean);
    }
    that.setData({
      ADDRESS_1_STR:
        addressBean.REGION_PROVINCE + " "
        + addressBean.REGION_CITY + ""
        + addressBean.REGION_COUNTRY
    });
    that.setData(addressBean);
    var REGION_CITY = this.data.REGION_CITY
    this.setData({
      city: REGION_CITY
    })
  }


})