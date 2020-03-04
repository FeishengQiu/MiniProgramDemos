Page({

  /**
   * 页面的初始数据
   */
  data: {
    //输入框的值
    addData: '',
    todos: [{
        missionName: 'learning WX',
        completed: true
      },
      {
        missionName: 'learning HTML',
        completed: false
      },
      {
        missionName: 'learning CSS',
        completed: true
      }
    ],
    leftCount: 0,
    toggleState:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('我是page1.js的onLoad')
    var count = 0;
    for (let i = 0; i < this.data.todos.length; i++) {
      if (!this.data.todos[i].completed) {
        count++;
      }
    }
    this.setData({leftCount:count})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('我是page1.js的onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('我是page1.js的onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('我是page1.js的onHide')
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

  },
  addDataChange: function(e) {
    this.setData({
      addData: e.detail.value
    })
  },
  addItem: function() {
    if (this.data.addData) {
      const todosPre = this.data.todos;
      todosPre.push({
        missionName: this.data.addData,
        completed: false
      })
      this.data.leftCount += 1;
      this.setData({
        todos: todosPre,
        addData: '',
        leftCount: this.data.leftCount
      })
    }

  },
  changeItem: function(e) {
    var item = this.data.todos[e.currentTarget.dataset.index];
    item.completed = !item.completed;
    this.data.leftCount = this.data.leftCount + (item.completed ? -1 : 1)
    this.setData({
      todos: this.data.todos,
      leftCount: this.data.leftCount
    })
  },
  removeItem:function(e){
    var item = this.data.todos[e.currentTarget.dataset.index];
    this.data.leftCount = this.data.leftCount + (item.completed ?0: -1);
    var todos = this.data.todos;
    todos.splice(e.currentTarget.dataset.index,1)
    this.setData({ todos:todos,leftCount:this.data.leftCount})
  },
  toggleAll:function(){
    this.data.toggleState=!this.data.toggleState;
    var that=this;
    this.data.todos.forEach(function(item){
      item.completed=that.data.toggleState
    })

    this.setData({todos:this.data.todos,leftCount:(this.data.toggleState?0:this.data.todos.length)})
  },
  clearCompled:function(){
    var todos=this.data.todos.filter(function(item){
        return !item.completed
    })
    this.setData({todos:todos})
  }
})