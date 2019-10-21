<template>
  <div class="tab-bar-item" :style="activeStyle" @click="itemClick">
      <slot name="item-icon"></slot>
      <slot class="acitve" name="item-text"></slot>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // isActive: true
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive? { color: this.acitveColor } : {}
        }
    },
    methods: {
        itemClick() {
            if(this.$route.path != this.path) this.$router.replace(this.path)
        }
    },
    props: {
        path: {
            type: String,
            default: 'home'
        },
        acitveColor: {
            type: String,
            default: 'red'
        }
    }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tab-bar-item.active {
    color: red
}
.tab-bar-item i {
    display: block;
    height: 24px;
    line-height: 24px;
    margin-top: 5px;
    margin-bottom: -2px;
    font-size: 16px;;
}
</style>