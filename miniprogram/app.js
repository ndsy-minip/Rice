// app.js
App({
  onLaunch() {

    wx.cloud.init()

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.cloud.callFunction({
      name: 'login',
      complete: res => {
        wx.setStorageSync('openid', res.result.openid)
      },
    })

    // 获取系统信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })

    if(!wx.getStorageSync('userInfo')){
      wx.switchTab({
        url: 'pages/homepage/homepage',
        complete(res){
          console.log(res)
        }
      })
    }

    wx.cloud.init({
      traceUser: true,
    })
    this.db = wx.cloud.database()

  },
  globalData: {
    userInfo: null
  },


  calls: function (obj) {
    wx.cloud.callFunction({
      name:obj.name,
      data:obj.data?obj.data:{},
      success(res){
        obj.success(res.result);
      },
      fail(e){
        console.log(e);
        wx.hideLoading()
        wx.showModal({
          title:"网络错误",
          content:"你的操作请求由于网络或系统问题中断，请稍后再试"
        })
      }
    })
  }
})
