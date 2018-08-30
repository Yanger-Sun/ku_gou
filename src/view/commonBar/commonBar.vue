<template>
  <div>
    <mt-header fixed>
      <router-link class="logo" to="/" slot="left">
        <img class="" src="http://m.kugou.com/v3/static/images/index/logo.png" alt="" />
      </router-link>
      <mt-button class="download" slot="left">下载酷狗</mt-button>
      <mt-button class="search" icon="search" slot="right"></mt-button>
    </mt-header>
    <!-- 路由视图 把路径对应的组件，替换在这个位置   -->
    <!-- 名字叫做nav的显示 -->
    <router-view name="nav"></router-view>
    
  </div>
</template>

<style >
header{
  width: 100%  !important;
  padding-top: .0357rem  !important;
  height:10vh !important;
  line-height: 3rem  !important;
  background: #2ca2f9  !important;
  /* position: relative  !important; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
 .logo{
    width: 7.286rem;
    height: 1.67857rem;
    display: inline-block;
    vertical-align: middle;
    margin-left: .7143rem;
}
 .logo img{
  width: 100%;
  height: 100%;
}
.search i{
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
}
.download label{ 
    width: 5.7143rem;
    height: 1.7143rem;
    line-height: 1.7143rem;
    margin-left: .7143rem;
    border: 1px solid #fff;
    border-radius: .3571rem;
    display: block;
    text-align: center;
    color: #fff;
    font-size: .8571rem;
}
</style>
