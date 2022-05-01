// pages/more_function/more_function.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList: {
      "种植指南": [
        {
          "text": "作物百科",
          "iconPath": "../../static/img/作物百科.png",
          "navPath": "../catalogue/catalogue"
        },
        {
          "text": "常见农药",
          "iconPath": "../../static/img/常见农药.png",
          "navPath": ""
        },
        {
          "text": "常见病虫害",
          "iconPath": "../../static/img/病虫害.png",
          "navPath": "../disease_catalogue/disease_catalogue"
        }
      ],
      "社区与直播": [
        {
          "text": "互助社区",
          "iconPath": "../../static/img/互助社区.png",
          "navPath": "../forum_/forum _"
        },
        {
          "text": "知识直播",
          "iconPath": "../../static/img/知识直播.png",
          "navPath": ""
        }
      ],
      "工具模块": [
        {
          "text": "模块测验",
          "iconPath": "../../static/img/模块测验.png",
          "navPath": "../module/module_MBTI/MBTI_quiz/MBTI_quiz"
        },
        {
          "text": "备忘提醒",
          "iconPath": "../../static/img/备忘提醒.png",
          "navPath": "../notification/notification"
        },
        {
          "text": "全国行情",
          "iconPath": "../../static/img/全国行情.png",
          "navPath": ""
        },
        {
          "text": "图像识别",
          "iconPath": "../../static/img/图像识别.png",
          "navPath": ""
        },
        {
          "text": "桃园日记",
          "iconPath": "../../static/img/桃园日记.png",
          "navPath": "../timer/timer"
        }
      ],
      "了解更多": [
        {
          "text": "科学种植技术",
          "iconPath": "../../static/img/科学种植技术.png",
          "navPath": ""
        },
        {
          "text": "农业现代化",
          "iconPath": "../../static/img/农业现代化.png",
          "navPath": ""
        },
        {
          "text": "书籍资料",
          "iconPath": "../../static/img/书籍资料.png",
          "navPath": ""
        },
      ]
    }
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


  navToModule(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.nav,
      fail(err){
        wx.switchTab({
          url: e.currentTarget.dataset.nav,
        })
      }
    })
  },
})