// pages/tool/tool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList: ["热播中", "种植教学", "乡村风景",],
    tabCur: 1,
    tools: [[
      {
        "img": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/william-shakespeare.png",
        "path": "../module/module_MBTI/MBTI_instructions/MBTI_instructions",
        "title": "测评",
        "bgColor": "#ab8fca"
      }, {
        "img": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustrations_books.png",
        "path": "",
        "title": "直播",
        "bgColor": "#866cb9"
      }, {
        "img": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustrations_aircraft.png",
        "path": "",
        "title": "职业宝典",
        "bgColor": "#8f6eae"
      }, {
        "img": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/illustrations/illustrations_pi.png",
        "path": "../timer/timer",
        "title": "冥想",
        "bgColor": "#8980bc"
      }
    ],
    [{
      "img": "",
      "path": "",
      "title": "冥想",
      "bgColor": "#c0a2c7"
    }, {
      "img": "",
      "path": "",
      "title": "冥想",
      "bgColor": "#896d8d"
    }]]
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
        that.setData({
          room_info: res.result.room_info
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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