//index.js
//获取应用实例
const app = getApp()

const fetch=require('../../utils/fetch')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides: [],
    categories:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var that=this
    fetch('slides').then(res=>{
        that.setData({slides:res.data})
        console.log(res)
    })

    fetch('categories').then(res => {
      that.setData({ categories: res.data })
    })

    // wx.request({
    //   url: 'https://locally.uieee.com/categories',
    //   header: {
    //     'Content-Type': 'json'
    //   },
    //   success: function (res) {
    //     console.log('请求成功')
    //     console.log(res)
    //     that.setData({ categories: res.data })
    //   }
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})