// pages/catalogue/catalogue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    letter_list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    catalogue_list: [
      {
        title: 'B',
        list: [
          {
            name: "白菜",
            img: "https://tse1-mm.cn.bing.net/th/id/R-C.db752b5a9355e4b5112d087ffa2ab873?rik=oI9yH7oW0YtlTA&riu=http%3a%2f%2fimg.365diandao.com%2fStorage%2fShop%2f528%2fProducts%2f8129%2f1.png&ehk=V0XZJC4phgEvQ1TwZE3DkhguWDWYxCMAc1tIua%2b9eX4%3d&risl=&pid=ImgRaw&r=0"
          }
        ]
      },
      {
        title: 'P',
        list: [
          {
            name: "苹果",
            img: "https://img95.699pic.com/element/40159/2228.png_860.png"
          }
        ]
      },
    ],
    scroll: '', //滚动到指定 id值的子元素
    touchmove: 0,//给字母导航添加背景色 1 添加 0不添加
    nav_height: '',//字母导航单个元素高度
    hiddenn: true,//hint_box 提示框 展示隐藏
    nav_text: '',//hint_box 提示框里面的文本
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.get_height();
  },
  //取高度
  get_height: function () {
    var that = this
    var query = wx.createSelectorQuery();
    query.select('#nav_item').boundingClientRect()
    query.exec(function (res) {
      console.log(res)
      that.setData({
        nav_height: res[0].height,
      })
    })
  },
  touchstart: function (e) {
    this.set_scroll(e)
  },
  touchmove: function (e) {
    this.set_scroll(e)
  },
  touchend: function (e) {
    this.setData({
      touchmove: 0,
      hiddenn: true
    })
  },
  set_scroll: function (e) {
    console.log(e)
    var page_y = e.changedTouches[0].pageY - 95
    var nav_height = +this.data.nav_height
    var idx = Math.floor(page_y / nav_height)
    var zimu = this.data.letter_list[idx];
    this.setData({
      touchmove: 1,
      scroll: zimu,
      nav_text: zimu,
      hiddenn: false
    })
  },


  navToDetail(e) {
    wx.navigateTo({
      url: '../test/test',
    })
  }
})