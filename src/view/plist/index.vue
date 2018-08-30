<template>
    <div class="plist">
        
    <router-link tag="div"  v-bind:to="{name:'PlistInfo',params:{id:plist_item.specialid,title:plist_item.specialname,type:'plist'}}"  v-for="(plist_item,index) in plist" v-bind:key="index" >
      <div class="plist_item">
            <img :src="plist_item.new_imgurl" width="25%" height="25%" style="margin-right:10px;">
            <div class="plist_descr">
                <!-- <p>{{plist_item.specialname}}</p>
                <p>{{plist_item.playcount}}</p> -->
                <mt-cell v-bind:title="plist_item.specialname" v-bind:label="plist_item.already_read" is-link></mt-cell>
            </div>
        <!-- <span style="width:9px;"><i class="mint-cell-allow-right"></i></span> -->
      </div>

    </router-link>

    </div> 
</template>

<style >
.plist{
    padding-top: 18vh;
}
.plist_item{
    padding:10px;
    border-top:1px solid #cccccc;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between;  */
    align-items: center;
}
.plist_item .plist_descr{
    /* width: 55%; */
    font-size: 110%;
    line-height: 1.1em;
    flex-grow: 1;
}
.plist_item .plist_descr .mint-cell{
    width: 100%;
}
.plist_item .plist_descr .mint-cell:last-child,
.plist_item .plist_descr .mint-cell-wrapper{
    background: none;
    border: 0;
}
.plist_item .plist_descr .mint-cell-title{
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: baseline;
}
.mint-cell-text{
    font-size: 110%;
    line-height: 150%;
}
</style>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      plist:[]
    }
  },
  created(){
      const _this = this;
      axios('/apis/plist/index?json=true')
      .then(({data})=>{
        console.log(data)
        var plist = data.plist.list.info;
        for(var i = 0 ; i < plist.length ; i++){
          var now_imgurl = plist[i].imgurl;
          var new_imgurl = now_imgurl.replace(/\{size\}/,"400");
          plist[i].new_imgurl = new_imgurl;
          plist[i].already_read = "已听人数:  " + plist[i].playcount;
        }
        _this.plist = plist;
        console.log(plist)
        // _this.songs = data.data;
      })
  }
}
</script>

