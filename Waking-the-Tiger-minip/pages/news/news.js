// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
      id: 0,
      bgUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',

    },
    {
      id: 1,
      bgUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
    },
    {
      id: 2,
      bgUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    },
    {
      id: 3,
      bgUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    },
    {
      id: 4,
      bgUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    },
    {
      id: 5,
      bgUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    },
    {
      id: 6,
      bgUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
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

  }
})