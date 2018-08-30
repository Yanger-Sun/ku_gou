<template>
    <div class="singer">
       
        <div class="singer_class">
            <router-link v-bind:to="{name:'singerList',params:{id:item.classid,title:item.classname,type:'singer'}}" v-for="(item,index) in singer" v-if="index==0" v-bind:key="index">
                 <mt-cell   :title="item.classname" is-link  ></mt-cell>
            </router-link>
        </div>

        <div class="singer_class" >
            <router-link  v-bind:to="{name:'singerList',params:{id:item.classid,title:item.classname,type:'singer'}}" v-for="(item,index) in singer" v-if="index>=1 && index<4" v-bind:key="index">
                <mt-cell  :title="item.classname" is-link ></mt-cell>
            </router-link>
        </div>

         <div class="singer_class" >
            <router-link v-for="(item,index) in singer" v-if="index>=4 && index<7" v-bind:key="index" v-bind:to="{name:'singerList',params:{id:item.classid,title:item.classname,type:'singer'}}"  >
                <mt-cell  :title="item.classname" is-link ></mt-cell>
            </router-link>
        </div>

        <div class="singer_class" >
            <router-link  v-for="(item,index) in singer" v-if="index>=7 && index<10" v-bind:key="index" v-bind:to="{name:'singerList',params:{id:item.classid,title:item.classname,type:'singer'}}"  >
                <mt-cell :title="item.classname" is-link></mt-cell>
            </router-link>
        </div>

    </div> 
</template>

<style >
.singer{
    padding-top: 18vh;
}
.singer_class{
    width: 90vw;
    border: 1px solid #e4e4e4;
    background: #fbfbfb;
    margin: 0 auto;
    margin-bottom: 10px;
    border-radius: 10px;
    overflow: hidden;
}
.mint-cell-wrapper{
    border-top: 0;
}
.mint-cell{
    background: none !important;
    color: #333;
    border-bottom: 1px solid #ccc;
}
</style>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      singer:[]
    }
  },
  created(){
      const _this = this;
      axios('/apis/singer/class?json=true')
      .then(({data})=>{
        console.log(data)
        var singerClass = data.list;
        _this.singer = singerClass;
      })
  }
}
</script>

