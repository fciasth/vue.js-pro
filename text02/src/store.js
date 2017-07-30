const STORAGE_KEY = 'todos-vue.js'
export default{
  //es6函数定义方法
  fetch:function (){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save(items){
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  }
}
