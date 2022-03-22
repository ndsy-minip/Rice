// Waking-the-Tiger-minip/pages/module/module_MBTI/MBTI_result/MBTI_result.js
import * as echarts from '../../../../components/ec-canvas/echarts';
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };

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
    },
    personalityScore: { "E": 0, "I": 10, "S": 0, "N": 20, "T": 0, "F": 20, "J": 0, "P": 20 }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   personalityScore : options.personalityScore
    // })
    this.caltype()

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
  },
  getOption(xData, data_cur, data_his) {
    var option = {
      backgroundColor: "#f5f4f3",
      color: ["#37A2DA", "#f2960d", "#67E0E3", "#9FE6B8"],
      title: {
        text: '实时运行速度',
        textStyle: {
          fontWeight: '500',
          fontSize: 15,
          color: '#000'
        },
        x: 'center',
        y: '0'
      },
      legend: {
        data: ['今日', '昨日'],
        right: 10
      },
      grid: {
        top: '15%',
        left: '1%',
        right: '3%',
        bottom: '60rpx',
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xData || [],
        axisLabel: {
          interval: 11,
          formatter: function (value, index) {
            return value.substring(0, 2) * 1;
          },
          textStyle: {
            fontsize: '10px'
          }
        }
      },
      yAxis: {
        x: 'center',
        name: 'km/h',
        type: 'value',
        min: 0,
        max: 120
      },
      series: [{
        name: '今日',
        zIndex: 2,
        type: 'line',
        smooth: true,
        symbolSize: 0,
        data: data_cur || []
      }, {
        name: '昨日',
        zIndex: 1,
        type: 'line',
        smooth: true,
        symbolSize: 0,
        data: data_his || []
      }]
    };
    return option;
  }
})