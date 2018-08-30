import Vue from 'vue'
import Router from 'vue-router'
import NewSong from '@/view/new-song/new-song'
// import appHeader from '@/view/commonBar/commonBar'
import Search from '@/view/search/search'
import Test from '@/view/test/test'

import NavBar from '@/components/navBar'
import rankBar from '@/components/rankBar'
import searchBar from '@/components/searchBar'

//排行
import Rank from '@/view/rank/rank'
import RankInfo from '@/view/rank/info'


//歌单首页
import plistIndex from '@/view/plist/index'
import PlistInfo from '@/view/plist/info'

//歌手
import singerclass from '@/view/singer/class'
import singerList from '@/view/singer/list'
import singerPerson from '@/view/singer/person'

Vue.use(Router)

export default new Router({
  mode:'history',
  components:{
    // "app-header":appHeader
  },
  routes: [
    {
      path: '/',
      name: 'NewSong',
      components: {
        nav:NavBar,
        default:NewSong
      }
    },
    {
      path: '/rank',
      name: 'Rank',
      components: {
        nav:NavBar,
        default:Rank
      },
    },
    {
      path: '/rank/info',
      name: 'RankInfo',
      component:RankInfo
    },
    {
      path: '/search',
      name: 'Search',
      components: {
        nav:searchBar,
        default:Search
      }
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/plist',
      name: 'plistIndex',
      components:{
        default:plistIndex,
        nav:NavBar,
      }
    },
    {
      path: '/plist/info',
      name: 'PlistInfo',
      component:PlistInfo
    },
    {
      path: '/singer/class',
      name: 'singerclass',
      components:{
        default:singerclass,
        nav:NavBar,
      }
    },
    {
      path: '/singer/list',
      name: 'singerList',
      components:{
        default:singerList,
      },
    },
    {
      path: '/singer/person',
      name: 'singerPerson',
      components:{
        default:singerPerson,
      }
    },
  ]
})
