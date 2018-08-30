<template>
    <div class="song_box">
        <div class="songList">
            <mt-cell class="song_item" v-for="(song,index) in song_list" v-bind:key="index"  v-bind:title="song.filename"  to="/"  is-link value=""></mt-cell>
        </div>  
    </div>    
</template>

<style >
.song_box{
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

.song_item .mint-cell-wrapper{
  padding: 0 10px;
}
.mint-cell-text{
    font-size: 110%;
    line-height: 150%;
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
  },
  props:{song_list:Array},
}
</script>