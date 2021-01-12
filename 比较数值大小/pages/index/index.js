// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  // 事件处理函数

change2:function  (e){
  var data = {}
  data[e.target.dataset.id] = 
  Number(e.detail.value)
  this.setData(data)
},
compare:function(){
  var str = "两数相等"
  if(this.num1 > this.num2){
    str = '第1个数大'
  }else if(this.num1 < this.num2){
    str = '第2个数大'
  }
  this.setData({result:str})
},
  

})
