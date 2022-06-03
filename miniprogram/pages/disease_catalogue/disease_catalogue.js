// pages/disease_catalogue/disease_catalogue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList: ["病害", "虫害"],
    tabCur: 0,
    word: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载中',
    })
    this.getDiseaseInfo()
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




  switchTab: function (e) {
    this.setData({
      tabCur: e.currentTarget.dataset.index
    })
    this.search()
  },


  navToDetail: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../disease_detail/disease_detail?info=' + JSON.stringify(e.currentTarget.dataset.info),
    })
  },


  navBack: function (e) {
    wx.navigateBack({
      delta: 1,
    })
  },

  getDiseaseInfo: function (e) {
    var that = this
    wx.cloud.callFunction({
      name: "getDisease",
      success(res) {
        var data = res.result.data
        var diseaseInfo = []
        var insectInfo = []
        for (var i in data) {
          data[i].method = JSON.parse(data[i].method)
          // data[i].image_url = 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/disease/' + data[i].image_url + '.jpg'
          if (data[i].type == "病害") {
            diseaseInfo.push(data[i])
          } else {
            insectInfo.push(data[i])
          }
        }
        that.setData({
          diseaseInfo,
          insectInfo
        })
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })
  },

  inputChange(e){
    this.setData({
      word: e.detail.value
    })
    this.search()
  },

  search(e){
    var tabCur = this.data.tabCur
    var info = tabCur==0?this.data.diseaseInfo:this.data.insectInfo
    var word = this.data.word
    var result = []
    for (var i in info){
      if(info[i].general.indexOf(word)!=-1){
        result.push(info[i])
      }
    }
    this.setData({
      result
    })
  }
})