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

    // 如果已经授权信息则直接进入
    if(wx.getStorageSync('userInfo')){
      wx.switchTab({
        url: 'pages/homepage/homepage',
        complete(res){
          console.log(res)
        }
      })
    }

  },
  globalData: {
    userInfo: null
  }
})
