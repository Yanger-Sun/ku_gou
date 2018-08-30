<template>
    <div class="nav_bar_box">
      <mt-navbar v-model="selected">
        <mt-tab-item v-bind:id="option.value"  v-for="(option,index) in options" v-bind:key="index">
          <router-link :to="{path:option.path}" >{{option.value}}</router-link>
        </mt-tab-item>
      </mt-navbar>       
    </div>    
</template>

<style >
.nav_bar_box{
  margin-bottom: 3px;
  height: 8vh;
  position: fixed;
  top: 10vh;
  left: 0;
  z-index: 200;
  width: 100vw;
}
.navBar{
  border-bottom: .2143rem solid #fff;
  color: #333;
  font-size: 1.1429rem;
  box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
}
.mint-navbar{
  box-shadow: 5px 5px 20px #eeeeee;
}
</style>

<script>
export default {
//   name: 'HelloWorld',
  data () {
    return {
      selected:'新歌',
      options:[
        { text: 'One', value: '新歌' , path: '/'},
        { text: 'Two', value: '排行' , path: '/rank'},
        { text: 'Three', value: '歌单' , path: '/plist'},
        { text: 'Three', value: '歌手' , path: '/singer/class' }
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>