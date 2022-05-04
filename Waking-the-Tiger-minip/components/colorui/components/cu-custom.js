const app = getApp();
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的对外属性
   */
  properties: {
    title: {
      type: String,
      value: '',
    },
    isBack: {
      type: Boolean,
      value: true
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  },
  /**
   * 组件的方法列表
   */
  methods: {
    navBack() {
      wx.navigateBack({
        delta: 1
      });
    },
    navHome() {
      wx.switchTab({
        url: '../homepage/homepage',
      })
    }
  }
})