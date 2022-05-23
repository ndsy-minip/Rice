// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList : ["cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/演示视频.mp4","cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/video.MP4"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh(e) {
    console.log(e)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom(e) {
    console.log(e)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },


  touchStart(e) {
    this.setData({
      "touch.x": e.changedTouches[0].clientX,
      "touch.y": e.changedTouches[0].clientY
    });
  },


  touchEnd(e) {
    if (e.changedTouches[0].clientY - this.data.touch.y >= 200) {
      console.log("下拉")
    }
    if (e.changedTouches[0].clientY - this.data.touch.y <= -200) {
      console.log("上滑")
    }
  },
  
})