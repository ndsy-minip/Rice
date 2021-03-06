// pages/more_function/more_function.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList: {
      "种植指南": [
        {
          "text": "常见农药",
          "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/常见农药.png",
          "navPath": "../pesticide_catalogue/pesticide_catalogue"
        },
        {
          "text": "常见病虫害",
          "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/病虫害.png",
          "navPath": "../disease_catalogue/disease_catalogue"
        }
      ],
      "社区与直播": [
        {
          "text": "短视频社区",
          "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/互助社区.png",
          "navPath": "../test/test"
        },
        {
          "text": "知识直播",
          "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/知识直播.png",
          "navPath": "../tool/tool"
        }
      ],
      "工具模块": [
        {
          "text": "模块测验",
          "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/模块测验.png",
          "navPath": "../questionCatalogue/questionCatalogue",
        },
        {
          "text": "提醒管家",
          "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/备忘提醒.png",
          "navPath": "../notification/notification"
        },
        {
          "text": "市场行情",
          "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/全国行情.png",
          "navPath": "../market/market"
        },
        {
          "text": "害虫识别",
          "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/图像识别.png",
          "navPath": ""
        },
        {
          "text": "桃园日记",
          "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/桃园日记.png",
          "navPath": "../timer/timer"
        }
      ],
      "了解更多": [
        {
          "text": "科学种植技术",
          "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/科学种植技术.png",
          "navPath": "../plantTech/plantTech"
        },
        {
          "text": "农业现代化",
          "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/农业现代化.png",
          "navPath": "../modern_agriculture/modern_agriculture"
        },
        {
          "text": "相关资料",
          "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/img/书籍资料.png",
          "navPath": "../info/info"
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

  navToModule(e) {
    var _this = this
    wx.navigateTo({
      url: e.currentTarget.dataset.nav,
      fail(err) {
        _this.switchTab(e.currentTarget.dataset.nav)
      }
    })
  },

  switchTab: function (nav) {
    var _this = this
    wx.switchTab({
      url: nav,
      fail(err) {
        _this.showActionSheet()
      }
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
})