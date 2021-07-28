<template>
  <div>
    <Banner :background-image="bannerUrl" />
    <div class="lg:w-article m-auto py-12">
      <Article
        v-for="(item, index) in restaurants.slice(0,3)"
        :key="index"
        :article-tags="item.restaurant.cuisines"
        :article-title="item.restaurant.name"
        :article-writter="item.restaurant.location.city"
        :article-comments="item.restaurant.photo_count"
        :article-img="item.restaurant.featured_image"
      />
    </div>
  </div>
</template>

<script>
import Article from '@/components/Article'
import Banner from '@/components/Banner'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Blog',
  components: {
    Article,
    Banner
  },
  data() {
    return {
      bannerUrl: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/about_bg-min-1.jpg'
    }
  },
  async fetch() {
    await this.GetRestaurants()
  },
  computed: {
    ...mapState('foodie', [
      'restaurants'
    ])
  },
  methods: {
    ...mapActions('foodie', [
      'GetRestaurants'
    ])
  }
}
</script>

<style>

</style>
