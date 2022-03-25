// Waking-the-Tiger-minip/pages/test/test.js
// pages/prize/prize.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    hidden: true,
    userInfo: {},
    hasUserInfo: false,
    windowWidth: '',
    posterHeight: '',
  },
  onLoad: function () {
    const poster = {
      "with": 375,
      "height": 587
    }
    const systemInfo = wx.getSystemInfoSync()
    let windowWidth = systemInfo.windowWidth
    let windowHeight = systemInfo.windowHeight
    let posterHeight = parseInt((windowWidth / poster.with) * poster.height)
    this.setData({
      windowWidth: windowWidth,
      posterHeight: posterHeight
    })
  },
  
})