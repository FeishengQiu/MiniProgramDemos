// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    id: '',

  },
  addCart: function() {
    wx.setStorageSync('cartId', this.data.id)
    wx.showModal({
      title: '添加到购物车成功',
      content: '您的商品已经成功添加到购物车',
      success() {
        wx.switchTab({
          url: '/pages/cart/cart',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    console.log(options.id)
    this.setData({id:options.id})
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