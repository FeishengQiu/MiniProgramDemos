// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [],
    goodsList: []
  },

  /**
   * 请求导航菜单的menu数据
   */
  getMenuList() {
    var that = this
    wx.request({
      url: 'http://www.hengyishun.cn/login/navlist',
      success(res) {
        console.log(res.data)
        that.setData({
          menuList: res.data
        })
      }
    })
  },

  /**
   * 请求商品数据
   */
  getGoodsList(){
    var that = this
    wx.request({
      url: 'http://www.hengyishun.cn/login/getProductList',
      success(res) {
        console.log(res.data)
        that.setData({
          goodsList: res.data
        })
      }
    })
  }
  ,


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //请求菜单数据
    this.getMenuList()
    //请求商品数据
    this.getGoodsList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(options) {
    if (app.globalData.login) {
      wx.showToast({
        title: '登录成功',
      })
    }
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