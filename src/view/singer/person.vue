<template>
    <div class="singer_info">
        <rank  :title="{title:title,path:'/singer/list'}"></rank>
       <!-- 顶部轮播图 -->
       <div class="banner">
           <img :src="new_banner" alt="">
       </div>
       <div class="rank_items">
           <router-link v-bind:to="{name:'RankInfo',params:{id:singer_item.singerid,title:singer_item.singername,type:'singer'}}"   v-for="(singer_item,index) in singer" v-bind:key="index" >
                <mt-cell v-bind:title="singer_item.singername" is-link   @click="jump(singer_item.rankid)" v-bind:id="singer_item.rankid"   > 
                    <!-- <span>icon 是图片</span> -->
                    <img slot="icon" :src="singer_item.new_imgurl" width="25%" height="25%" style="margin-right:10px;">
                </mt-cell>
           </router-link>
       </div>
       <div class="song_name">
           <song-list :song_list='song_list'></song-list>
       </div>
    </div>    
</template>

<style scoped>
.singer_info{
    padding-top: 20vh;
}
.banner{
    width: 100%;
    height: 66vw;
    position: relative;
    overflow: hidden;
    position: relative;
}
.banner img{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: -17vw;
}

.mint-cell-title{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 25%;
  text-align: initial;
}
.mint-cell-wrapper{
  background: none;
  border-top: 1px solid #cccccc;
}
.mint-cell .mint-cell-wrapper{
  padding: 10px;
}
.rank_bar_box{
    background:rgba()
}
</style>

<script>
import axios from 'axios'
import rank from '../../components/rankBar'
import song_list from '../../components/singer/song_list'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      singer:[],
      title:this.$route.params.title,
      id:this.$route.params.id,
      song_list:[],
      new_banner:this.$route.params.new_banner,
      before_title:this.$route.before_title
    }
  },
  components:{
      rank:rank,
      'song-list':song_list
  },
  created(){
      const _this = this;
      console.log(this.$route.params)
      axios(`/apis/singer/info/${this.$route.params.id}?json=true`)
      .then(({data})=>{
        console.log(data)
        var song_list = data.songs.list;
        _this.song_list = song_list;
      })
  }
}
</script>

