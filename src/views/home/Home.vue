<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home.js'
import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from './childComponents/RecommendView'

export default {
  name: 'home',
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  methods: {},
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
   
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then(res=>{
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(this.recommends)
    })
  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>