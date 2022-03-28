Component({
  data: {
    selected: 0,
    index: 0,
    list: [{
      "pagePath": "../news/news",
      "iconPath": "../static/tabbar/档案未选中.png",
      "selectedIconPath": "../static/tabbar/档案.png"
    },
    {
      "pagePath": "../tool/tool",
      "iconPath": "../static/tabbar/活动未选中.png",
      "selectedIconPath": "../static/tabbar/活动.png"
    },
    {
      "pagePath": "../profile/profile",
      "iconPath": "../static/tabbar/我的未选中.png",
      "selectedIconPath": "../static/tabbar/我的.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(url)
      wx.switchTab({ url })
      console.log(this.data.selected)
    }
  }
})