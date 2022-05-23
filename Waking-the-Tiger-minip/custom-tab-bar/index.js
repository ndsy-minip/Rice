Component({
  data: {
    mainMenu: {}, //主菜单动画
    menu1: {}, //菜单1动画
    menu2: {}, //菜单2动画
    menu3: {}, //菜单3动画

    isPopping: false, //是否弹出
    selected: -1,
    index: 0,
    list: [{
      "class": "cuIcon-home",
      "classFill": "cuIcon-homefill",
      "pagePath": "../homepage/homepage"
    },
    {
      "class": "cuIcon-discover",
      "classFill": "cuIcon-discoverfill",
      "pagePath": "../test/test"
    },

    {
      "class": "cuIcon-record",
      "classFill": "cuIcon-recordfill",
      "pagePath": "../tool/tool"
    },
    {
      "class": "cuIcon-people",
      "classFill": "cuIcon-peoplefill",
      "pagePath": "../profile/profile"
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
    },
    //点击主菜单
    mainMenuClick: function () {
      //判断主菜单状态，从而调用弹出还是缩回     
      if (this.data.isPopping) {
        console.log("收缩菜单")
        //缩回动画
        this.shrink()
        this.setData({
          isPopping: false
        })
      } else {
        console.log("弹出菜单")
        //弹出动画
        this.eJect()
        this.setData({
          isPopping: true
        })
      }
    },

    /**
     * 菜单1点击
     */
    menu1Click: function () {
      this.setData({
        isPopping: false
      })
      this.shrink()
      wx.navigateTo({
        url: '../timer/timer',
      })
    },

    /**
     * 菜单2点击
     */
    menu2Click: function () {
      this.setData({
        isPopping: false
      })
      this.shrink()
      wx.navigateTo({
        url: '../addNotification/addNotification',
      })
    },

    /**
     * 菜单3点击
     */
    menu3Click: function () {
      this.setData({
        isPopping: false
      })
      this.shrink()
      wx.navigateTo({
        url: '../timer/timer?newNotebook=' + '1',
      })
    },

    //弹出动画
    eJect: function () {
      //顺时针旋转
      var menu1 = wx.createAnimation({
        duration: 500, // 弹出的速度
        timingFunction: 'ease-out'
      })
      var menu2 = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })
      var menu3 = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })

      /**
       * 下面写法参数说明：
       * 第一个括号值(弹出的菜单与主菜单左右之间的距离，弹出的菜单与主菜单上下之间的距离)
       * 第二个括号值(菜单弹出旋转的度数)
       * 第三个括号值(菜单的透明度0.0~1.0之间)
       */
      menu1.translate(60, -60).rotateZ(360).opacity(1).step();
      menu2.translate(-60, -60).rotateZ(360).opacity(1).step();
      menu3.translate(0, -80).rotateZ(360).opacity(1).step();

      this.setData({
        menu1: menu1.export(),
        menu2: menu2.export(),
        menu3: menu3.export(),
      })
    },

    //收回动画
    shrink: function () {
      var menu1 = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })
      var menu2 = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })
      var menu3 = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })

      //处理动画效果
      menu1.translate(0, 0).rotateZ(0).opacity(0).step();
      menu2.translate(0, 0).rotateZ(0).opacity(0).step();
      menu3.translate(0, 0).rotateZ(0).opacity(0).step();

      this.setData({
        menu1: menu1.export(),
        menu2: menu2.export(),
        menu3: menu3.export(),
      })
    }
  }
})