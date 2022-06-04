// pages/module/module_myPage/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = wx.getStorageSync("userInfo")
    this.setData({
      userInfo
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
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
  onShareAppMessage: function () {
    return {
      title: '栗米——乡村振兴解决方案',
      imageUrl:'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/推广图片.png',
      path: '/pages/index/index'
    }
  },

  navToAbout: function () {
    wx.navigateTo({
      url: '../aboutAs/aboutAs',
    })
  },

  navToNotification: function () {
    wx.navigateTo({
      url: '../notification/notification',
    })
  },

  navToMyNotebook: function () {
    wx.navigateTo({
      url: '../myNotebook/myNotebook'
    })
  },
  navToPay: function () {
    wx.navigateTo({
      url: '../pay/pay',
    })
  },
  getUserProfile(e) {
    var that = this
    if (!wx.getStorageSync('userInfo')) {
      wx.getUserProfile({
        desc: '用于在个人页展示头像、昵称', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          wx.setStorageSync('userInfo', res.userInfo)
          console.log(res.userInfo)
          that.setData({
            userInfo: res.userInfo
          })
        },
      })
    }

  }

})