<template>
    <div class="rank_bar_box">
        <mt-header :title="title.title">
            <router-link :to="title.path" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>  
    </div>    
</template>

<style scoped>
.rank_bar_box{
  margin-bottom: 3px;
  height: 8vh;
  position: fixed;
  top: 10vh;
  left: 0;
  z-index: 200;
  width: 100vw;
  background: #ffffff;
}
.rank_bar_box header{
    background: #ffffff !important;
    /* background: -webkit-linear-gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0)) !important; */
}
.navBar{
  border-bottom: .2143rem solid #fff;
  color: #333;
  font-size: 1.1429rem;
  box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
}

.singer_info .rank_bar_box header{
  background: #ffffff ;
  box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
}
</style>

<script>
export default {
//   name: 'HelloWorld',
  data () {
    return {
        // title:"33",
      selected:'新歌',
      options:[
        { text: 'One', value: '新歌' , path: '/'},
        { text: 'Two', value: '排行' , path: '/rank'},
        { text: 'Three', value: '歌单' , path: '/plist/index'},
        { text: 'Three', value: '歌手' , path: '/singer/class' }
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:{title:Object},
  created(){
      console.log(this.title)
  },
  routerback: function () {
    this.$router.back(-1)
  },
}
</script>