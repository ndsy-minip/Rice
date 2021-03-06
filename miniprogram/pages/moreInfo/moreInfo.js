// pages/moreInfo/moreInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainPlantList: [{
      id: 0,
      bgUrl: 'https://images.pexels.com/photos/3987396/pexels-photo-3987396.jpeg?cs=srgb&dl=pexels-ready-made-3987396.jpg&fm=jpg',
      title: "葡萄",
      description: "故事发生在21世纪初期的美国的洛杉矶，在这个未来中美国联邦政府将大部分权力给予了私人企业家和组织，国家安全交付给了雇佣军队，公路公司之间也相互竞争来吸引司机来上他们的路，政府剩余的权利只是做一些繁琐的工作而已，社会的繁荣安定与他们无关。政府的大部分的土地被各个大的私人瓜分，并建立了个人领地。这种安排类似与无政府资本主义，这是尼尔·斯蒂芬森下部小说《钻石时代》的主题。在严重的恶性通货膨胀下，美元急剧贬值，一兆美元也是一个会被忽略的数字，而人们交易中通常则使用的是其他的货币。 在小说中，斯蒂芬森创造了一个并非以往想象中的互联网——虚拟实境（Metaverse），而是和社会紧密联系的三维数字空间，与现实世界平行，在现实世界中地理位置彼此隔绝的人们可以通过各自的“化身”进行交流娱乐。",
      type: "图书"
    },
    {
      id: 1,
      bgUrl: 'https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: "大米",
      description: "他自1894年始，写下一系列社会心理学著作，以本书最为著名；在社会心理学领域已有的著作中，最有影响的，也是这本并不很厚的《乌合之众》。古斯塔夫・勒庞在他在书中极为精致地描述了集体心态，对人们理解集体行为的作用以及对社会心理学的思考发挥了巨大影响。《乌合之众--大众心理研究》在西方已印至第29版，其观点新颖，语言生动，是群体行为的研究者不可不读的佳作。",
      type: "图书"
    },
    {
      id: 2,
      bgUrl: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2872755.jpg&fm=jpg',
      title: "香蕉",
      description: "你的企业迟早会走到一个战略转折点，企业的根基会在瞬间发生剧变，技术、规则、竞争环境、行业形态……一切的一切都变了。如果放任自流，战略转折点的破坏力足以葬送一家“好好的”企业。然而，战略转折点并不总是通向灾难，一些企业可能会利用这个时机跃升至新的高度如果管理者能够敏锐地觉察风向的转变并及时采取正确行动的话。担任英特尔首席执行官的11年间，安迪 格鲁夫多次被推到战略转折点的悬崖边。最凶险的一次是20世纪80年代中期，日本的存储器厂商几乎把英特尔逼入死角，英特尔最终不得不退出内存芯片的生产，而转入另一块比较新的领地，即微处理器的开发。对战略转折点的思考，帮助英特尔在激烈的竞争中得以生存，并成为全球最大的芯片制造商。在《只有偏执狂才能生存》里，格鲁夫将他的珍贵经验和系统思考公之于众，指点在最可怕的环境下与最频繁的变化中的不败之路。",
      type: "图书"
    }, {
      id: 0,
      bgUrl: 'https://images.pexels.com/photos/3987396/pexels-photo-3987396.jpeg?cs=srgb&dl=pexels-ready-made-3987396.jpg&fm=jpg',
      title: "葡萄",
      description: "故事发生在21世纪初期的美国的洛杉矶，在这个未来中美国联邦政府将大部分权力给予了私人企业家和组织，国家安全交付给了雇佣军队，公路公司之间也相互竞争来吸引司机来上他们的路，政府剩余的权利只是做一些繁琐的工作而已，社会的繁荣安定与他们无关。政府的大部分的土地被各个大的私人瓜分，并建立了个人领地。这种安排类似与无政府资本主义，这是尼尔·斯蒂芬森下部小说《钻石时代》的主题。在严重的恶性通货膨胀下，美元急剧贬值，一兆美元也是一个会被忽略的数字，而人们交易中通常则使用的是其他的货币。 在小说中，斯蒂芬森创造了一个并非以往想象中的互联网——虚拟实境（Metaverse），而是和社会紧密联系的三维数字空间，与现实世界平行，在现实世界中地理位置彼此隔绝的人们可以通过各自的“化身”进行交流娱乐。",
      type: "图书"
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var title = ""
    var list = []
    if (options.id == 0) {
      title = "图书",
        list = wx.getStorageSync('books')
    } else if (options.id == 1) {
      title = "电影",
        list = wx.getStorageSync('movies')
    } else {
      title = "论文",
        list = wx.getStorageSync('papers')
    }
    this.setData({
      title,
      list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  navToDetail(e) {
    wx.navigateTo({
      url: '../detailContent/detailContent?info=' + encodeURIComponent(JSON.stringify(e.currentTarget.dataset.info)),
    })
  }
})