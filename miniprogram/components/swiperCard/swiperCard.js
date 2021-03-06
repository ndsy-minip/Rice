// components/swiperCard/swiperCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperList: {
      type: JSON,
      value: {},
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 监控滑块
     */
    cardSwiper: function (e) {
      this.setData({
        cardCur: e.detail.current
      })
    },

    /**
     * 跳转到详情页
     */
    navToDetail: function (e) {
      wx.navigateTo({
        url: '../detailContent/detailContent?info=' + encodeURIComponent(JSON.stringify(e.currentTarget.dataset.info))
      })
    }
  }
})
