
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: [false, false, false], // 这里表示列表项是否展开，默认初始时此数组的元素全为fasle，表示都没展开
    infoList: [
      {
        "title": "整地",
        "content": "种稻之前，必须先将稻田的土壤翻过，使其松软，这个过程分为粗耕、细耕和盖平三个期间。过去使用兽力和犁具，主要是水牛来整地犁田，但多用机器整地了。"
      },
      {
        "title": "选种",
        "content": "将秧苗仔细的插进稻田中，间格有序。传统的插秧法会使用秧绳、秧标或插秧轮，来在稻田中做记号。手工插秧时，会在左手的大拇指上戴分秧器，帮助农人将秧苗分出，并插进土里。插秧的气候相当重要，如大雨则会将秧苗打坏。现代多有插秧机插秧，但在土地起伏大，形状不是方型的稻田中，还是需要人工插秧。秧苗一般会呈南北走向。还有更为便利的抛秧。"
      },
      {
        "title": "施肥",
        "content": "秧苗在抽高，长出第一节稻茎的时候称为分蘗期，这段期间往往需要施肥，让稻苗成长的健壮，并促进日后结穗米质的饱满和数量。"
      },
      {
        "title": "灌排水",
        "content": "水稻比较倚赖这个程序，旱稻的话是旱田，灌排水的过程较不一样，但是一般都需在插秧后，幼穗形成时，还有抽穗开花期加强水份灌溉。"
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

  show(e) {
    let index = e.currentTarget.dataset.index;
    let active = this.data.active;

    this.setData({
      [`selected[${index}]`]: !this.data.selected[`${index}`],
    });

  },
  notification(e) {
    wx.requestSubscribeMessage({
      tmplIds: ['M6pds0pSRZ0_QpDlzJrZJKcY8BYhhW141zoAeOay-Pc'],
      success: res=> {
        wx.cloud.callFunction({
          name: 'notification',
          data: {
            "templateId": "M6pds0pSRZ0_QpDlzJrZJKcY8BYhhW141zoAeOay",
            "openId": "wx70fa40832126b33a"
          }
        }).then(res=>{
          console.log(res)
        })
      },
      fail: err=> {
        console.log(err)
      }
    })
  }

})

