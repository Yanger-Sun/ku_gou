<template>
    <div class="rank_info">
        <rank  :title="{title:title,path:'/plist'}"></rank>
       <!-- 顶部轮播图 -->
       <div class="banner">
           <img :src="banner_info.new_banner" alt="">
       </div>
       
       <div class="rank_items">
           <mt-cell class="song_item" v-for="(rank_item,index) in rank_info" v-bind:key="index"  v-bind:title="rank_item.filename"  to="/"  is-link value=""></mt-cell>
       </div>
    </div>    
</template>

<style scoped>
.rank_info{
    padding-top: 10vh;
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
.mint-header-title{
    color: #ffffff;
}
</style>

<script>
import axios from 'axios'
import rank from '../../components/rankBar'
export default {
  name: 'HelloWorld',
  data () {
    return {
      banner_info:[],
      rank_info:[],
      title:this.$route.params.title,
      id:this.$route.params.id,
    }
  },
  components:{
      rank:rank
  },
  created(){
    const _this = this;
    console.log(_this.$route.params)
    const params = _this.$route.params;
    var id = params.id;
    if(params.type == 'plist'){
        var url = `/apis/plist/list/${id}?json=true`
    }else if(params.type == 'singer'){
        var url = `/apis/rank/info/${id}?json=true`
    }else if(params.type == 'rank'){
        var url = `/apis/rank/info/${id}?json=true`
    }else if(params.type == 'rank'){
        var url = `/apis/rank/info/${id}?json=true`
    }
      axios(url)
      .then(({data})=>{
        // console.log(data);
        var banner_info = data.info.list;
        banner_info.new_banner = banner_info.imgurl.replace(/\{size\}/,"400");
        _this.banner_info = banner_info;
        _this.rank_info =  data.list.list.info;
        // console.log(_this.banner_info,_this.rank_info)
      })
  }
}
</script>
