// components/notebook/notebook.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    hideModal: true, //模态框的状态  true-隐藏  false-显示
    note: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 显示遮罩层 
    showModal: function () {
      var userInfo = wx.getStorageSync('userInfo')
      var that = this
      that.setData({
        userInfo,
        hideModal: false
      })
      var animation = wx.createAnimation({
        duration: 600, //动画的持续时间 默认400ms 数值越大，动画越慢 数值越小，动画越快 
        timingFunction: 'ease', //动画的效果 默认值是linear 
      })
      this.animation = animation
      setTimeout(function () {
        that.fadeIn(); //调用显示动画 
      }, 200)
    },

    // 隐藏遮罩层 
    hideModal: function () {
      var that = this;
      var animation = wx.createAnimation({
        duration: 800, //动画的持续时间 默认400ms 数值越大，动画越慢 数值越小，动画越快 
        timingFunction: 'ease', //动画的效果 默认值是linear 
      })
      this.animation = animation
      that.fadeDown(); //调用隐藏动画 
      setTimeout(function () {
        that.setData({
          hideModal: true
        })
      }, 720) //先执行下滑动画，再隐藏模块 
    },

    //动画集 
    fadeIn: function () {
      this.animation.translateY(0).step()
      this.setData({
        animationData: this.animation.export() //动画实例的export方法导出动画数据传递给组件的animation属性 
      })
    },
    fadeDown: function () {
      this.animation.translateY(300).step()
      this.setData({
        animationData: this.animation.export(),
      })
    },

    bindNoteInput: function (e) {
      this.setData({
        note: e.detail.value
      })
    },

    submitNote: function () {
      var _this = this
      if (this.data.note != '') {
        wx.showLoading({
          title: '正在记录中',
        })
        wx.cloud.callFunction({
          name: "newNotebook",
          data: {
            text: _this.data.note
          },
          success(e) {
            console.log(e)
            _this.setData({
              note: ''
            })
            _this.hideModal()
            wx.showToast({
              title: '记录成功',
            })
          }
        })
      } else {
        wx.showModal({
          content: "请输入内容",
          showCancel: false
        })
      }

    }
  }
})
