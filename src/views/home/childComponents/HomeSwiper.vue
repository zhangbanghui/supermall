<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: {
    Swiper,
    SwiperItem
  },
  data() {
      return {}
  },
  props: {
      banners: {
          type: Array,
          default() {
              return []
          }
      }
  }
};
</script>

<style>
</style>