// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: '',
    productDataBase: [{
        id: 0,
        name: 'Mate00',
        src: '/images/temp/cate10.jpg',
        price: 1000
      },
      {
        id: 1,
        name: 'Mate10',
        src: '/images/temp/cate11.jpg',
        price: 1000
      },
      {
        id: 2,
        name: 'Mate20',
        src: '/images/temp/cate12.jpg',
        price: 1000
      },
      {
        id: 3,
        name: 'Mate30',
        src: '/images/temp/cate13.jpg',
        price: 1000
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    const pId = wx.getStorageSync('cartId')
    let i = 0;
    const productDataBase = this.data.productDataBase
    for (i; i < productDataBase.length; i++) {
      if (pId == productDataBase[i].id) {
        this.setData({
          product: productDataBase[i]
        })
      }
    }
    console.log(this.data.product)
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