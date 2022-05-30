// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainMenu: {}, //主菜单动画
    menu1: {}, //菜单1动画
    menu2: {}, //菜单2动画
    menu3: {}, //菜单3动画

    isPopping: false, //是否弹出
    currentSwiperIndex: 0,
    bannerImgList: [{
      imgUrl: "https://img.zcool.cn/community/013d445e1944daa8012165184c6141.jpg@1280w_1l_2o_100sh.jpg",
      imgTitle: "abcd",
      imgDescription: "1234"
    }, {
      imgUrl: "https://img.zcool.cn/community/019bc559b8f8a2a801207534bd0dc4.jpg@1280w_1l_2o_100sh.jpg",
      imgTitle: "sdf",
      imgDescription: "5678"
    }
    ],
    iconList: [
      {
        "iconPath": "../../static/img/病虫害.png",
        "navPath": "",
        "text": "常见病虫害"
      },
      {
        "iconPath": "../../static/img/常见农药.png",
        "navPath": "",
        "text": "常见农药"
      },
      {
        "iconPath": "../../static/img/互助社区.png",
        "navPath": "../test/test",
        "text": "短视频"
      },
      {
        "iconPath": "../../static/img/模块测验.png",
        "navPath": "../module/module_MBTI/MBTI_quiz/MBTI_quiz",
        "text": "模块测验"
      },
      {
        "text": "相关资料",
        "iconPath": "../../static/img/书籍资料.png",
        "navPath": "../info/info"
      },
      {
        "iconPath": "../../static/img/更多.png",
        "navPath": "../more_function/more_function",
        "text": "更多"
      }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getDiseaseInfo()
    // this.getInfo()
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

  },

  /**
   * 绑定banner轮播图cur
   */
  swiperBindchange(e) {
    this.setData({
      currentSwiperIndex: e.detail.current
    })
  },

  navToModule(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.nav,
      fail(err) {
        wx.switchTab({
          url: e.currentTarget.dataset.nav,
        })
      }
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
          if (data[i].type != "病害") {
            insectInfo.push(data[i])
          }
        }
        wx.setStorageSync('insectInfo', insectInfo)
      }
    })
  },

  getInfo: function (e) {
    wx.cloud.callFunction({
      name: "getInfo",
      success(res) {
        var movies = res.result[0].data
        var books = res.result[1].data
        var papers = res.result[2].data
        for (var i = 1; i < movies.length + 1; i++) {
          movies[i - 1].bgUrl = "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/movies/bg/" + i + ".webp"
          movies[i - 1].mainUrl = "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/movies/main/" + i + ".webp"
        }
        for (var i = 1; i < books.length + 1; i++) {
          books[i - 1].bgUrl = "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/books/bg/" + i + ".webp"
          books[i - 1].mainUrl = "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/books/main/" + i + ".jpg"
        }
        for (var i = 1; i < papers.length + 1; i++) {
          papers[i - 1].bgUrl = "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/papers/bg/" + i + ".jpg"
          papers[i - 1].mainUrl = "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/papers/main/" + i + ".jpg"
        }
        wx.setStorageSync('books', books)
        wx.setStorageSync('movies', movies)
        wx.setStorageSync('papers', papers)
      }
    })
  }



})