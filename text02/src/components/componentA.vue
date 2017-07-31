<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="onClickMe" >Open Mouse!</button>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'componentA'
      }
    },
    methods:{
      onClickMe:function () {
        this.$emit('child-tell-me-something',this.msg);
      }
    },
    props:['msgfromfather'],//注册这个
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
