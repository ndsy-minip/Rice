Page({
  /**
   * 页面的初始数据
   */
  data: {
    timer: '',//定时器名字
    countDownNum: '1440',//倒计时初始值
    timer_M: '24',//m
    timer_S: '00',//s
    suspendButton: '暂停',//暂停按钮标题
    isSuspend: '0' //是否暂停
  },

  onShow: function () {
    
  },

  //开始
  setStart(e) {
    this.countDown();
    wx.showToast({
      title: '开始',
      icon: 'success',
      duration: 1000
    })
  },

  //暂停-继续
  setSuspend(e) {
    let that = this;
    let isSuspend = that.data.isSuspend;
    let suspendButton = that.data.suspendButton;//暂停按钮标题
    if (isSuspend == 0){
      isSuspend = '1';
      suspendButton = "继续";
    }else{
      isSuspend = '0';
      suspendButton = "暂停";
    }
    this.setData({
      isSuspend: isSuspend,//是否暂停
      suspendButton: suspendButton
    })
  },

  //停止
  setStop(e) {
    let that = this;
    clearInterval(that.data.timer);
    this.setData({
      timer: '',//定时器名字
      countDownNum: '1440',//倒计时初始值
      timer_M: '24',//m
      timer_S: '00',//s
      suspendButton: '暂停',//s
    })
  },
  countDown: function () {
    let that = this;
    var m, s;
    let countDownNum = that.data.countDownNum;
    that.setData({
      timer: setInterval(function () {

        let isSuspend = that.data.isSuspend;
        if (isSuspend == 0){

          countDownNum--;

          m = Math.floor(countDownNum / 60);
          s = Math.floor(countDownNum % 60);
          if (m < 10) {
            m = "0" + m;
          }
          if (s < 10) {
            s = "0" + s;
          }

          that.setData({
            countDownNum: countDownNum,
            timer_M: m,
            timer_S: s
          })
          if (countDownNum == 0) {
            clearInterval(that.data.timer);
            that.setData({
              countDownNumString: '截止'
            })
          }
        }
      }, 1000)
    })
  }
})