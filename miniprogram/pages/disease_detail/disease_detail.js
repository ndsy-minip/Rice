// pages/disease/disease.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: ["https://bkimg.cdn.bcebos.com/pic/728da9773912b31bb0513666a452217adab44aed4b63?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_jpg"],
    selected: [false, false, false, false, false], // 这里表示列表项是否展开，默认初始时此数组的元素全为fasle，表示都没展开
    infoList: [
      {
        "title": "清除菌源",
        "content": "花生青枯病是一种典型的土传病害，一旦土壤中带有病菌，要想彻底根除是很困难的。但是，花生收获后，及时清除田间病残体，带出田外集中烧毁，对田间病株应及早拔除深埋或烧毁。不用病花生藤堆肥，尽量减少和控制病菌的扩散，降低次年发病的初侵染源，仍然具有减轻病害发生的作用。"
      },
      {
        "title": "种植抗病品种",
        "content": "种植抗病品种是经济有效的防病措施。中国利用协抗青、台山三粒肉为抗源进行抗病育种培育出一批抗病优良花生品种，如鄂花5号、中花2号、粤油92、桂油28、鲁花3号等品种。"
      },
      {
        "title": "合理轮作",
        "content": "对重病区，水源条件较好，实行水旱轮作是控制花生青枯病发生危害的最有效措施。对旱坡地花生种植区，不能进行水旱轮作，可与花生青枯病菌的非寄主植物轮作，如小麦、玉米、甘薯、大豆等，一般轮作2-3年，具有明显减轻病害的作用。"
      },
      {
        "title": "加强栽培管理",
        "content": "田间栽培管理措施，对控制花生青枯病的发生和危害具有明显的作用。在花生青枯病发生区，应注意田间水肥管理。对旱坡地在播种花生前，进行短期灌水泡浸，可促使土壤中病菌大量死亡，从而减少病菌侵染机会，降低发病率。田间增施有机肥，使花生植株健壮生长，提高抗病性。同时，做好田间的清沟排渍，防止雨后积水，早期零星病株及时拔除，集中处理，不施用带菌肥料等农业栽培管理措施，既具有防病作用，也具有增产效果。"
      },
      {
        "title": "收成",
        "content": "当稻穗垂下，金黄饱满时，就可以开始收成，过去是农民一束一束，用镰刀割下，再扎起，利用打谷机使稻穗分离，现代则有收割机，将稻穗卷入后，直接将稻穗与稻茎分离出来，一粒一粒的稻穗就成为稻谷。"
      },
      {
        "title": "干燥、删选",
        "content": "收成的稻谷需要干燥，晒谷需时时翻动，让稻谷干燥。删选则是将瘪谷等杂质删掉，用电动分谷机、风车或手工抖动分谷，利用风力将饱满有重量的稻谷自动筛选出来。"
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var info = JSON.parse(options.info)
    this.setData({
      info
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

  show(e) {
    let index = e.currentTarget.dataset.index;
    let active = this.data.active;

    this.setData({
      [`selected[${index}]`]: !this.data.selected[`${index}`],
    });

  },
})