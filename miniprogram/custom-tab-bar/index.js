Component({
  data: {
    selected: -1,
    index: 0,
    list: [{
      "pagePath": "../homepage/homepage",
      "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/tabbar/档案未选中.png",
      "selectedIconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/tabbar/档案.png"
    },
    {
      "pagePath": "../test/test",
      "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/tabbar/活动未选中.png",
      "selectedIconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/tabbar/活动.png",
    },

    {
      "pagePath": "../tool/tool",
      "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/tabbar/直播未选中.png",
      "selectedIconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/tabbar/直播.png"
    },
    {
      "pagePath": "../profile/profile",
      "iconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/tabbar/我的未选中.png",
      "selectedIconPath": "cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/tabbar/我的.png"
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