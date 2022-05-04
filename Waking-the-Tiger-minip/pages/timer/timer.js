// pages/timer/timer.js
const innerAudioContext = wx.createInnerAudioContext()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: '',
    multiIndex: [0, 0],
    isSuspend: 0,
    isStart: 0,
    motto: ["Only the paranoid survived", "莫见乎隐，莫显乎微，故君子慎其独也", "花点时间，停歇片刻", "整理思绪，重新出发"],
    mottoIndex: 0,
    countDownSec: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setMottoChange()

    var multiArray = [[], []]
    for (var i = 0; i < 60; i++) {
      multiArray[0].push(i.toString());
      multiArray[1].push(i.toString());
    }
    this.setData({
      multiArray
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 设置时间
   */
  setCountdown: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
    var multiArray = this.data.multiArray
    var multiIndex = this.data.multiIndex
    var countDownSec = parseInt(multiArray[0][multiIndex[0]]) * 60 + parseInt(multiArray[1][multiIndex[1]])
    this.setData({
      countDownSec
    })
  },

  /**
   * 开始倒计时
   */
  setStart(e) {
    if (this.data.multiIndex[0] == 0 && this.data.multiIndex[1] == 0) {
      wx.showModal({
        showCancel: false,
        content: "请设置时间",
      })
    } else {
      this.setData({
        isStart: 1
      })
      this.countDown()
    }
  },

  /**
   * 计算时间
   */
  countDown: function () {
    var that = this
    var min, sec
    let countDownSec = this.data.countDownSec
    var multiIndex = this.data.multiIndex
    this.setData({
      timer: setInterval(function () {
        let isSuspend = that.data.isSuspend;
        if (isSuspend == 0) {
          countDownSec--;
          min = Math.floor(countDownSec / 60);
          sec = Math.floor(countDownSec % 60);
          multiIndex[0] = min
          multiIndex[1] = sec
          that.setData({
            countDownSec,
            multiIndex
          })
          if (countDownSec == 0) {
            that.setData({
              isStart: 0,
              isSuspend: 0
            })
            clearInterval(that.data.timer)

            const innerAudioContext = wx.createInnerAudioContext()
            innerAudioContext.autoplay = true
            innerAudioContext.src = 'cloud://cloud1-3gp8ynahdb4ea1a5.636c-cloud1-3gp8ynahdb4ea1a5-1310409999/timerEnd.mp3'
            innerAudioContext.onPlay(() => {
              console.log('开始播放')
            })
            innerAudioContext.onError((res) => {
              console.log(res.errMsg)
              console.log(res.errCode)
            })

          }
        }
      }, 1000)
    })
  },

  /**
   * suspend / resume 暂停 / 继续
   */
  setSuspend(e) {
    let that = this;
    let isSuspend = that.data.isSuspend;
    if (isSuspend == 0) {
      isSuspend = 1;
    } else {
      isSuspend = 0;
    }
    this.setData({
      isSuspend: isSuspend,//是否暂停
    })
  },

  /**
   * 结束
   */
  setStop(e) {
    let that = this;
    clearInterval(that.data.timer);
    var multiIndex = [0, 0]
    this.setData({
      isStart: 0,
      timer: '',
      countDownSec: '1440',
      multiIndex
    })
  },
  /**
  * 开启计时状态下点击picker
  */
  showMotto() {
    wx.showModal({
      title: '静思',
      content: '纵一苇之所如，凌万顷之茫然',
      showCancel: false
    })
  },
  /**
  * 切换motto
  */
  setMottoChange() {
    var that = this
    setInterval(() => {
      setTimeout(() => {
        if (that.data.mottoIndex >= that.data.motto.length) {
          that.setData({
            mottoIndex: 0
          })
        } else {
          that.setData({
            mottoIndex: that.data.mottoIndex++
          });
          that.data.mottoIndex++;
        }
      }, 1000)
    }, 4000)
  },
  /**
  * Model 为什么要冥想
  */
  showWhyMeditation() {
    wx.showModal({
      showCancel: false,
      title: "为什么我们要冥想",
      content: "开始冥想，时常练习，你就能渐渐走出情绪困境，成为一个凡事心气平和、稳若泰山的人"
    })
  },

  /**
  * 打开笔记本
  */
  showNotebook() {
    var notebook = this.selectComponent("#notebook")
    notebook.showModal()
  },


  goBack() {
    wx.navigateBack({
      delta: 0,
    })
  },

  navToMyNotebook() {
    wx.navigateTo({
      url: '../myNotebook/myNotebook',
    })
  }

})