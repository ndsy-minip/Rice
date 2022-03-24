// Waking-the-Tiger-minip/pages/module/module_MBTI/MBTI_result/MBTI_result.js
import * as echarts from '../../../../components/ec-canvas/echarts';
var chart = null
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {};

  chart.setOption(option);
  return chart;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      personalityScore : JSON.parse(options.personalityScore)
    })
    this.caltype()
    var personalityScore = this.data.personalityScore
    var data = [
      {
        name: '精力支配',
        children: [
          {
            name: '外向 E',
            value: personalityScore['E']
          },
          {
            name: '内向 I',
            value: personalityScore['I']
          }
        ]
      },
      {
        name: '认识世界',
        children: [
          {
            name: '感知 S',
            value: personalityScore['S']
          },
          {
            name: '直觉 N',
            value: personalityScore['N']
          }
        ]
      },
      {
        name: '判断事物',
        children: [
          {
            name: '思维 T',
            value: personalityScore['T']
          },
          {
            name: '情感 F',
            value: personalityScore['F']
          }
        ]
      },
      {
        name: '生活态度',
        children: [
          {
            name: '决断 J',
            value: personalityScore['J']
          },
          {
            name: '熟思 P',
            value: personalityScore['P']
          }
        ]
      }
    ];
    var option = {
      visualMap: {
        type: 'continuous',
        min: 0,
        max: 20,
        inRange: {
          color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
        }
      },
      series: {
        type: 'sunburst',
        data: data,
        radius: [0, '90%'],
        label: {
          rotate: 'radial'
        }
      }
    };

    setTimeout(() => {
      console.log(chart)
      chart.clear()
      chart.setOption(option);
    }, 2000)
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
   * 性格type
   */
  caltype: function () {
    var personalityScore = this.data.personalityScore
    console.log(personalityScore)
    var personalityType = ""
    if (personalityScore['E'] >= personalityScore['I']) { personalityType = personalityType + "E" } else { personalityType = personalityType + "I" }
    if (personalityScore['S'] >= personalityScore['N']) { personalityType = personalityType + "S" } else { personalityType = personalityType + "N" }
    if (personalityScore['T'] >= personalityScore['F']) { personalityType = personalityType + "T" } else { personalityType = personalityType + "F" }
    if (personalityScore['J'] >= personalityScore['P']) { personalityType = personalityType + "J" } else { personalityType = personalityType + "P" }
    console.log(personalityType)
  }
})