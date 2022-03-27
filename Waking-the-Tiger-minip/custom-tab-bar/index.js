Component({
  data: {
    selected: 0,
    index: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      "pagePath": "pages/news/news",
      "text": "资讯",
      "iconPath": "../static/tabbar/档案未选中.png",
      "selectedIconPath": "static/tabbar/档案.png"
    },
    {
      "pagePath": "pages/tool/tool",
      "text": "工具",
      "iconPath": "../static/tabbar/活动未选中.png",
      "selectedIconPath": "static/tabbar/活动.png"
    },
    {
      "pagePath": "pages/module/module_myPage/profile/profile",
      "text": "我的",
      "iconPath": "../static/tabbar/我的未选中.png",
      "selectedIconPath": "static/tabbar/我的.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    },
    goto(e) {
      if (e.currentTarget.dataset.index != this.data.index) {
        this.setData({
          index: e.currentTarget.dataset.index
        })
      }
    }
  }
})