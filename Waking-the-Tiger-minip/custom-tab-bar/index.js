Component({
  data: {
    selected: -1,
    index: 0,
    list: [{
      "pagePath": "../homepage/homepage",
      "iconPath": "../static/tabbar/档案未选中.png",
      "selectedIconPath": "../static/tabbar/档案.png"
    },
    {
      "pagePath": "../test/test",
      "iconPath": "../static/tabbar/活动未选中.png",
      "selectedIconPath": "../static/tabbar/活动.png",
    },

    {
      "pagePath": "../tool/tool",
      "iconPath": "../static/tabbar/直播未选中.png",
      "selectedIconPath": "../static/tabbar/直播.png"
    },
    {
      "pagePath": "../profile/profile",
      "iconPath": "../static/tabbar/我的未选中.png",
      "selectedIconPath": "../static/tabbar/我的.png"
    }
    ]
  },
  attached() {
    console.log(this.data.selected)
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
    }
  }
})