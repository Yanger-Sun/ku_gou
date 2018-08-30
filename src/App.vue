<template>
  <div id="app">
    <app-header></app-header>
    <!-- 路由视图 把路径对应的组件，替换在这个位置   -->
    <!-- <router-view></router-view> -->

    <!-- 名字叫做nav的显示 -->
    <!-- <router-view name="nav"></router-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import commonBar from './view/commonBar/commonBar'
export default {
  name: 'App',
  components:{
    'app-header':commonBar
  },
  created(){
    console.log('app');
    axios('/apis?json=true').then(({data})=>{console.log(data)})
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
  /* margin-top: 20px; */
  /* padding-top: 18vh; */
}

</style>
