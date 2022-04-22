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

  }
})
