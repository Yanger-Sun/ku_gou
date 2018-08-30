<template>
    <div class="rank_list">
      <router-link v-bind:to="{name:'RankInfo',params:{id:rank_item.rankid,title:rank_item.rankname,type:'singer'}}"   v-for="(rank_item,index) in rank_list" v-bind:key="index" >
      <mt-cell v-bind:title="rank_item.rankname" is-link   @click="jump(rank_item.rankid)" v-bind:id="rank_item.rankid"   > 
        <!-- <span>icon 是图片</span> -->
        <img slot="icon" :src="rank_item.new_imgurl" width="25%" height="25%" style="margin-right:10px;">
      </mt-cell>
      </router-link>
          <!-- <mt-cell v-for="(rank_item,index) in rank_list" v-bind:key="index" v-bind:title="rank.rankname" icon="more" value="带 icon"></mt-cell> -->
        <!-- <mt-cell title="芝麻信用" to="/rank/info" is-link  :key="item.id" class="list-cell" @click="goWay(item)"></mt-cell> -->
    
    </div>    
</template>

<style >
.rank_list{
  padding-top: 18vh;
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
</style>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      rank_list:[]
    }
  },
  created(){
    const _this = this;
      axios('/apis/rank/list?json=true')
      .then(({data})=>{
        console.log(data);
        var rank_list = data.rank.list;
        console.log(rank_list)
        for(var i = 0 ; i < rank_list.length ; i++){
          var now_imgurl = rank_list[i].imgurl;
          var new_imgurl = now_imgurl.replace(/\{size\}/,"400");
          rank_list[i].new_imgurl = new_imgurl;
        }
        console.log(rank_list)
       _this.rank_list = rank_list;
        // _this.songs = data.data;
      })
  },
  methods:{
    jump(id){
      console.log(id)
      // this.$router.push({ name: 'RankInfo', params: { id: 6666 }})
    },
    oMsgDetail(item) {
        this.$router.push({ path: '/xx', query: { item:item} });
    }
  }
}
</script>
