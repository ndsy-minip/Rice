Page({
  data: {
    isAuth: false,
    src: ''
  },
  onLoad() {
    const _this = this
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.camera']) {
          // 用户已经授权
          _this.setData({
            isAuth: true
          })
        } else {
          // 用户还没有授权，向用户发起授权请求
          wx.authorize({
            scope: 'scope.camera',
            success() { // 用户同意授权
              _this.setData({
                isAuth: true
              })
            },
            fail() { // 用户不同意授权
              _this.openSetting().then(res => {
                _this.setData({
                  isAuth: true
                })
              })
            }
          })
        }
      },
      fail: res => {
        console.log('获取用户授权信息失败')
      }
    })
  },

  // 打开授权设置界面
  openSetting() {
    const _this = this
    let promise = new Promise((resolve, reject) => {
      wx.showModal({
        title: '授权',
        content: '请先授权获取摄像头权限',
        success(res) {
          if (res.confirm) {
            wx.openSetting({
              success(res) {
                if (res.authSetting['scope.camera']) { // 用户打开了授权开关
                  resolve(true)
                } else { // 用户没有打开授权开关， 继续打开设置页面
                  _this.openSetting().then(res => {
                    resolve(true)
                  })
                }
              },
              fail(res) {
                console.log(res)
              }
            })
          } else if (res.cancel) {
            _this.openSetting().then(res => {
              resolve(true)
            })
          }
        }
      })
    })
    return promise;
  },

  takePhoto() {
    wx.showLoading({
      title: '正在识别中',
    })
    const ctx = wx.createCameraContext()
    var _this = this
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        _this.setData({
          img_url : res.tempImagePath
        })
        _this.readFile(res.tempImagePath)
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
  }


})
