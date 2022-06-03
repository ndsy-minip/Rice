// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
      url: 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustration_1.png',
      title: "农药查询",
      firstLine: "关于农药科普",
      sencondLine: "我们始终在路上"
    },
    {
      url: 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustration_2.png',
      title: "害虫识别",
      firstLine: "使用前沿计算机视觉技术",
      sencondLine: "帮助你对症下药"
    },
    {
      url: 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustration_3.png',
      title: "市场行情",
      firstLine: "展示所在省市农产品价格",
      sencondLine: "帮助你了解市场"
    }
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
    return {
      title: '栗米——乡村振兴解决方案',
      imageUrl: 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/推广图片.png',
      path: '/pages/index/index'
    }

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
      },
      fail(err) {
        wx.switchTab({
          url: '../homepage/homepage',
        })
      }
    })
  },
})