<template>
  <div id="app">
    <h1 v-html="title"></h1>
    <input v-model="newItem" @keyup.enter="addNew"/>
    <ul>
      <li v-for="item in items" :class="{finished:item.isFinished}" @click="toggleFinish(item)">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
  import Store from './store' //调用通缉目录下的
  //console.log(Store)
export default{

  data:function () {
    return{
      title:"<span>?</span>this is a todo list2",
      items:Store.fetch(),

      newItem : '',

    }
  },
  watch:{
    items:{
      handler:function (items) {
          //console.log(val,oldVal)
        Store.save(items)
      },
      deep:true
    }
  }
  ,
  methods:{
    toggleFinish:function (item) {
      item.isFinished=!item.isFinished;
    },
    addNew:function () {
      this.items.push({
        label:this.newItem,
        isFinished:true
      });
      this.newItem = ' ';
    }
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .finished{
    text-decoration: underline ;
  }
</style>
