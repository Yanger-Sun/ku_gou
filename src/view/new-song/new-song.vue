<template>
    <div class="new_song">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in banner" v-bind:key="item.id">
              <img v-bind:src="item.imgurl" alt="">
          </mt-swipe-item>
        </mt-swipe>
        
        <div class="songList">
            <mt-cell class="song_item" v-for="(song,index) in songs" v-bind:key="index"  v-bind:title="song.filename"  to="/"  is-link value=""></mt-cell>
        </div>   

    </div> 
</template>

<style >
.new_song{
    padding-top: 18vh;
}
.new_song > .mint-swipe,
.mint-swipe-item,
.mint-swipe-item img{
    max-width: 100%;
    margin: 0 auto;
    height: 8.5714rem;
    display: block;
    width: 100vw;
}
.song_item .mint-cell-wrapper{
  padding: 0 10px;
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
      banner:[],
      songs:[]
    }
  },
  created(){
      const _this = this;
      axios('/apis?json=true')
      .then(({data})=>{
        console.log(data)
        _this.banner = data.banner;
        _this.songs = data.data;
      })
  }
}
</script>

