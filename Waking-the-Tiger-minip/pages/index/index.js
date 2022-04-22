// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
      url: 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustration_1.png',
      title: "作物百科",
      firstLine: "了解作物生长秘密",
      sencondLine: ""
    },
    {
      url: 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustration_2.png',
      title: "农药查询",
      firstLine: "教会你如何安全使用农药",
      sencondLine: " "
    },
    {
      url: 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustration_3.png',
      title: "常见病虫害",
      firstLine: "如何远离病虫危害",
      sencondLine: ""
    },
    {
      url: 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustration_4.png',
      title: "互助社区",
      firstLine: "交流研究农业常识",
      sencondLine: ""
    },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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


  /**
   * 获取用户信息
   */
  getUserProfile(e) {
    var that = this
    wx.getUserProfile({
      desc: '用于在个人页展示头像、昵称', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res.iv)
        wx.setStorageSync('userInfo', res.userInfo)

        wx.switchTab({
          url: '../homepage/homepage',
        })


      }
    })
  },
})