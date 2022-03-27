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

  /**
   * 组件的初始数据
   */
  data: {
    userInfo : wx.getStorageSync('userInfo')
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
