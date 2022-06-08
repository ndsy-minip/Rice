// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    currentSwiperIndex: 0,
    bannerImgList: [
      "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/芒种.png",
      "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/西瓜.png",
      "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/鲜花.png",

    ],
    iconList: [
      {
        "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/病虫害.png",
        "navPath": "../disease_catalogue/disease_catalogue",
        "text": "常见病虫害"
      },
      {
        "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/常见农药.png",
        "navPath": "../pesticide_catalogue/pesticide_catalogue",
        "text": "常见农药"
      },
      {
        "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/互助社区.png",
        "navPath": "../test/test",
        "text": "短视频"
      },
      {
        "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/模块测验.png",
        "navPath": "../questionCatalogue/questionCatalogue",
        "text": "模块测验"
      },
      {
        "text": "相关资料",
        "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/书籍资料.png",
        "navPath": "../info/info"
      },
      {
        "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/更多.png",
        "navPath": "../more_function/more_function",
        "text": "更多"
      }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDiseaseInfo()
    this.getInfo()
    this.getQuiz()
    this.getBanner()
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
    this.getTimeState()
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
    return {
      title: '栗米——乡村振兴解决方案',
      imageUrl: 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/推广图片.png',
      path: '/pages/index/index'
    }
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
  },

  navToMarket() {
    wx.navigateTo({
      url: '../market/market',
    })
  },


  navToTimer() {
    wx.navigateTo({
      url: '../timer/timer',
    })
  },

  navToMoreFunction() {
    wx.navigateTo({
      url: '../more_function/more_function',
    })
  },


  showActionSheet: function (e) {
    var _this = this
    wx.showActionSheet({
      itemList: ["拍照", "从相册中选择"],
      success(res) {
        if (res.tapIndex == 0) {
          _this.navToCamera()
        } else {
          _this.chooseImage()
        }
      }
    })
  },

  navToCamera: function () {
    wx.navigateTo({
      url: '../camera/camera',
    })
  },


  chooseImage: function () {
    var _this = this
    wx.chooseImage({
      count: 1,
      sourceType: ["album"],
      success(res) {
        wx.showLoading({
          title: '正在识别中',
        })
        _this.setData({
          img_url: res.tempFilePaths[0]
        })
        _this.readFile(res.tempFilePaths[0])

      }
    })
  },

  readFile: function (img) {
    var _this = this
    wx.getFileSystemManager().readFile({
      filePath: img,
      encoding: "base64",
      success: res => {
        _this.found(res.data)
      }
    })
  },



  found: function (img) {
    var _this = this
    let API_KEY = "W6Fmxb6VuWByufyuP4sD9ip3"
    let SECRET_KEY = "8rnoHvwAWPcTgTXylCxGDnOCOzLngyH5"
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + API_KEY + '&client_secret=' + SECRET_KEY, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'Content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.request({
          url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/classification/ndsy_pests?access_token=' + res.data.access_token,
          method: 'post',
          data: {
            image: img
          },
          header: {
            "content-type": "application/json",
          },
          success(res) {
            console.log(res)
            wx.hideLoading({
              success: (res) => {
                wx.showToast({
                  title: '识别成功',
                })
              },
            })
            _this.navToResult(res.data.results)
          }
        })
      }


    })
  },

  navToResult(results) {
    var _this = this
    wx.navigateTo({
      url: '../detect_result/detect_result?img_url=' + _this.data.img_url + '&results=' + JSON.stringify(results),
    })
  },

  getQuiz() {
    wx.cloud.callFunction({
      name: "getQuiz",
      success(res) {
        wx.setStorageSync('quiz', res.result.data)
      }
    })
  },

  getBanner() {
    var that = this
    wx.cloud.callFunction({
      name: "getBanner",
      success(res) {
        that.setData({
          bannerList: res.result.data
        })
        wx.setStorageSync('banner', res.result.data)
      }
    })
  },

  navToArticle(e) {
    wx.navigateTo({
      url: '../bannerArticle/bannerArticle?article=' + JSON.stringify(e.currentTarget.dataset.article),
    })
  },

  navToMore(e) {
    wx.navigateTo({
      url: '../bannerDetail/bannerDetail',
    })
  },


  getTimeState() {
    // 获取当前时间
    let timeNow = new Date();
    // 获取当前小时
    let hours = timeNow.getHours();
    let text = ``;
    if (hours >= 8 && hours < 12) {
      text = `早上好`;
    } else if (hours => 12 && hours <= 14) {
      text = `中午好`;
    } else if (hours > 14 && hours <= 18) {
      text = `下午好`;
    } else {
      text = `晚上好`;
    }
    this.setData({
      text: text
    })
  },

  navToNotification() {
    wx.navigateTo({
      url: '../notification/notification',
    })
  }



})