// pages/list/list.js
const fetch = require('../../utils/fetch.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: null,
    shops: [],
    title:'',
    pageIndex: 0,
    pageSize: 20,
    totalCount: 0,
    hasMore: true
  },
  loadMore() {
    let { pageIndex, pageSize, searchText } = this.data
    const params = { _page: ++pageIndex, _limit: pageSize }
    if (searchText) params.q = searchText

    return fetch(`/categories/${this.data.category.id}/shops`, params)
      .then(res => {
        const totalCount = parseInt(res.header['X-Total-Count'])
        const hasMore = this.data.pageIndex * this.data.pageSize < totalCount
        const shops = this.data.shops.concat(res.data)
        this.setData({ shops, totalCount, pageIndex, hasMore })
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var that = this;
    //请求数据
    if (options.cat) {
      fetch(`categories/${options.cat}`).then(res => {
        console.log(res)
        console.log('我是list')
        this.setData({
          title:res.data.name,
          category:res.data
        })
        wx.setNavigationBarTitle({
          title: res.data.name
        })

        this.loadMore()
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
if(this.data.title){
  wx.setNavigationBarTitle({
    title: this.data.title,
  })
}
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
  onPullDownRefresh() {
    this.setData({ shops: [], pageIndex: 0, hasMore: true })
    this.loadMore().then(() => wx.stopPullDownRefresh())
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.loadMore()

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})