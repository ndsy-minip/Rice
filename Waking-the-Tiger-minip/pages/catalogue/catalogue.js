// pages/catalogue/catalogue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    letter_list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    catalogue_list: [
      {
        title: 'A',
        list: [
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
        ]
      },
      {
        title: 'B',
        list: [
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          }
        ]
      },
      {
        title: 'G',
        list: [
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
          },
          {
            name: "阿嚏",
            img: "https://zuhaowan.zuhaowan.com/pic/201907/5101CD9ED73C9D14379E63D631ABD796.379e63d631abd796.jpg"
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
    var page_y = e.changedTouches[0].pageY-95
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
})