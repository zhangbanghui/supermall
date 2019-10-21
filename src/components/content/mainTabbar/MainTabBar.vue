<template>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <i class="fa fa-desktop"></i>
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <i slot="item-icon" class="fa fa-navicon"></i>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <i slot="item-icon" class="fa fa-shopping-cart"></i>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <i slot="item-icon" class="fa fa-user"></i>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>
