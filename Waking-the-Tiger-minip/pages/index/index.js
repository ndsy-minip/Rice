// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
      url: 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustrations_pi.png',
      title: "唤醒勇虎",
      firstLine: "少年漂流，心藏勇虎",
      sencondLine : "无惧骇浪，纵纬所如"
    },
    {
      url: 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustrations_books.png',
      title: "心绪宇宙",
      firstLine: "时空探索，知识无穷",
      sencondLine : "淡泊明志，宁静致远"
    },
    {
      url: 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustrations_aircraft.png',
      title: "理想火箭",
      firstLine: "自我觉醒，功成名就",
      sencondLine : "脚踏实地，心怀梦想"
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

  },


  /**
   * 获取用户信息
   */
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于在个人页展示头像、昵称', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        wx.setStorageSync('userInfo', res.userInfo)
        wx.switchTab({
          url: '../news/news',
        })
        // wx.navigateTo({
        //   url: '../news/news',
        // })
      }
    })
  },
})