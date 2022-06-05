// pages/tool/tool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList: ["热播中", "种植教学", "乡村风景",],
    tabCur: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
    wx.cloud.callFunction({
      name: "getRoomId",
      success(res) {
        var techRoom = []
        var viewRoom = []
        console.log(res.result)
        techRoom.push(res.result.room_info[1])
        techRoom.push(res.result.room_info[2])
        techRoom.push(res.result.room_info[3])
        viewRoom.push(res.result.room_info[0])
        viewRoom.push(res.result.room_info[4])
        that.setData({
          techRoom,
          viewRoom
        })
      }
    })
    let customParams = encodeURIComponent(JSON.stringify({ path: 'pages/tool/tool', pid: 1 })) // 开发者在直播间页面路径上携带自定义参数（如示例中的 path 和pid参数），后续可以在分享卡片链接和跳转至商详页时获取，详见【获取自定义参数】、【直播间到商详页面携带参数】章节（上限600个字符，超过部分会被截断）
    this.setData({
      customParams
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
        selected: 2
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



  /**
   * 跳转到功能页
   */
  navToFunc: function (e) {
    console.log(e.currentTarget.dataset.path)
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
      success() { },
      error() { },
      complete(res) { console.log(res) },
    })
  },

  switchTab: function (e) {
    this.setData({
      tabCur: e.currentTarget.dataset.index
    })
  },

  navToStreamRoom: function (e) {
    var roomid = e.currentTarget.dataset.index
    var customParams = this.data.customParams
    wx.navigateTo({
      url: 'plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=' + roomid + '&custom_params=' + customParams,
    })
  }


})