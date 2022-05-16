// components/navBar/navBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "" //子组件初始值
    }
  },
  ready: function () {
    var that = this
    wx.getStorage({
      "key": "userInfo",
      success(res) {
        that.setData({
          userInfo: res.data
        })
      }
    })
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getUserProfile(e) {
      var that = this
      if (!wx.getStorageSync('userInfo')) {
        wx.getUserProfile({
          desc: '用于在个人页展示头像、昵称', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            wx.setStorageSync('userInfo', res.userInfo)
            console.log(res.userInfo)
            that.setData({
              userInfo: res.userInfo
            })
          },
        })
      }

    }
  }


})
