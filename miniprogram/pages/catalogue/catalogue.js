// pages/catalogue/catalogue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: 20,
    CustomBar: 60,
    hidden: true,
    listCurID: '',
    list: [],
    listCur: '',
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this;
    wx.createSelectorQuery().select('.indexBar-box').boundingClientRect(function (res) {
      that.setData({
        boxTop: res.top
      })
    }).exec();
    wx.createSelectorQuery().select('.indexes').boundingClientRect(function (res) {
      that.setData({
        barTop: res.top
      })
    }).exec()
  },

  onLoad: function () {
    let list = [{}];
    for (let i = 0; i < 26; i++) {
      list[i] = {};
      list[i].name = String.fromCharCode(65 + i);
    }
    this.setData({
      list,
      listCur: list[0]
    })
  },
  getCur(e) {
    var listCur = this.data.list[e.target.id].name
    this.setData({
      hidden: false,
      listCur
    })
  },
  setCur(e) {
    var listCur = this.data.listCur
    this.setData({
      hidden: true,
      listCur
    })
  },
  //滑动选择Item
  tMove(e) {
    let y = e.touches[0].clientY,
      offsettop = this.data.boxTop,
      list = this.data.list,
      that = this;
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      let num = parseInt((y - offsettop) / 20);
      that.setData({
        listCur: list[num].name
      })
    };
  },

  //触发全部开始选择
  tStart() {
    this.setData({
      hidden: false
    })
  },

  //触发结束选择
  tEnd() {
    var listCur = this.data.listCur
    this.setData({
      hidden: true,
      listCurID: listCur
    })
  },

  indexSelect(e) {
    let that = this;
    let barHeight = this.data.barHeight;
    let list = this.data.list;
    let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
    for (let i = 0; i < list.length; i++) {
      if (scrollY < i + 1) {
        that.setData({
          listCur: list[i].name,
          movableY: i * 20
        })
        return false
      }
    }
  }

})