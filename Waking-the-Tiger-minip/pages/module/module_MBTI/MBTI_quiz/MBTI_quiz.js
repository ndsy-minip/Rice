// pages/module/MBTI/MBTI_quiz/MBTI_quiz.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    now_index: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var quizJSON = JSON.parse(options.quiz)
    var quiz = quizJSON.exam[0].quiz
    var date = quizJSON.date
    var customResult = {}
    for (let i in quiz) {
      customResult[++i] = -1
    }

    this.setData({
      date,
      quiz,
      customResult,
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
   * 下一个问题
   */
  changeQuiz: function (e) {
    var now_index = this.data.now_index
    if (e.currentTarget.id == "next") {
      this.setData({
        now_index: now_index + 1
      })
    }
    if (e.currentTarget.id == "previous") {
      this.setData({
        now_index: now_index - 1
      })
    }
  },


  /**
   * 显示答题卡
   */
  showSelection: function (e) {
    var questionSelection = this.selectComponent("#questionSelection")
    questionSelection.showModal()
  },

  /**
   * 切换题目
   */
  changeQuestionIndex: function (e) {
    this.setData({
      now_index: e.detail.now_index
    })
  },

  /**
   * 记录回答
   */
  answer: function (e) {
    var that = this
    var customResult = this.data.customResult
    var now_index = this.data.now_index
    customResult[now_index] = parseInt(e.currentTarget.dataset.result)
    var arr = Object.keys(customResult);
    if (now_index != arr.length) {
      now_index = now_index + 1
    }
    var competition = this.calCompetition()

    this.setData({
      customResult,
      competition
    })
    setTimeout(function () {
      that.setData({
        now_index,
      })
    }, 500);
    if (competition == 100.0) {
      wx.showModal({
        title: "所有题目已作答完成",
        content: "是否提交",
        success(res) {
          if (res.confirm) {
            that.submit()
          }
        }
      })
    }
  },

  /**
   * 计算完成度
   */
  calCompetition: function () {
    var unfinished = 0
    for (let i in this.data.customResult) {
      if (this.data.customResult[i] == -1) {
        unfinished = unfinished + 1
      }
    }
    var competition = (100 - (unfinished / this.data.quiz.length * 100)).toFixed(1)
    return competition
  },

  /**
   * 用户点击提交
   */
  submit: function (e) {
    var that = this
    if (this.data.competition == 100.0) {
      wx.showModal({
        content: "是否确认提交",
        success(res) {
          if (res.confirm) {
            that.calPersonalityScore()
          }
        }

      })
    } else {
      wx.showModal({
        title: "请完成所有题目",
        content: "点击答题卡查看未作答题目",
        cancelColor: 'cancelColor',
        showCancel: "false"
      })
    }


  },


  /**
   * 计分
   */
  calPersonalityScore: function () {
    var customResult = this.data.customResult
    var personalityScore = this.data.personalityScore
    for (var i in customResult) {
      switch (i % 7) {
        case 1:
          if (customResult[i] == 0) {
            personalityScore['E'] = personalityScore['E'] + 1
          } if (customResult[i] == 1) {
            personalityScore['I'] = personalityScore['I'] + 1
          }
          break;
        case 2:
          if (customResult[i] == 0) {
            personalityScore['S'] = personalityScore['S'] + 1
          } if (customResult[i] == 1) {
            personalityScore['N'] = personalityScore['N'] + 1
          }
          break;
        case 3:
          if (customResult[i] == 0) {
            personalityScore['S'] = personalityScore['S'] + 1
          } if (customResult[i] == 1) {
            personalityScore['N'] = personalityScore['N'] + 1
          }
          break;
        case 4:
          if (customResult[i] == 0) {
            personalityScore['T'] = personalityScore['T'] + 1
          } if (customResult[i] == 1) {
            personalityScore['F'] = personalityScore['F'] + 1
          }
          break;
        case 5:
          if (customResult[i] == 0) {
            personalityScore['T'] = personalityScore['T'] + 1
          } if (customResult[i] == 1) {
            personalityScore['F'] = personalityScore['F'] + 1
          }
          break;
        case 6:
          if (customResult[i] == 0) {
            personalityScore['J'] = personalityScore['J'] + 1
          } if (customResult[i] == 1) {
            personalityScore['P'] = personalityScore['P'] + 1
          }
          break;
        case 0:
          if (customResult[i] == 0) {
            personalityScore['J'] = personalityScore['J'] + 1
          } if (customResult[i] == 1) {
            personalityScore['P'] = personalityScore['P'] + 1
          }
          break;
        default:
          console.log("error")
      }
    }
    personalityScore['E'] = personalityScore['E'] * 2
    personalityScore['I'] = personalityScore['I'] * 2
    this.setData({
      personalityScore
    })
    this.navToResultPage()
  },

  /**
   * 跳转结果页并传值
   */
  navToResultPage() {
    var that = this
    wx.navigateTo({
      url: '../MBTI_result/MBTI_result?personalityScore=' + JSON.stringify(that.data.personalityScore),
    })
  }

})