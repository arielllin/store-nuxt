<template>
  <div>
    <Banner :background-image="bannerUrl" />
    <div class="xl:w-desktop m-auto">
      <div class="py-16">
        <div class="px-4">
          <div class="mt-8 mb-10">
            <div>
              <a
                v-for="(item, index) in rowDisplay"
                :key="index"
                class="text-gray inline-block w-8 h-8 leading-8 text-center"
                :class="{'bg-light': item === currentRowDisplay}"
                @click="changeRowDisplay(item)"
              >
                {{ item }}
              </a>
            </div>
          </div>
          <ul class="xl:grid" :class="`grid-cols-${currentRowDisplay}`">
            <li
              v-for="(item, index) in restaurants"
              :key="index"
              class=""
            >
              <MenuCard
                class="w-full xl:p-4"
                :background-image="item.restaurant.featured_image"
                :name="item.restaurant.name"
                :tags="item.restaurant.cuisines"
                :price="item.restaurant.currency"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import MenuCard from '@/components/MenuCard'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Shop',
  components: {
    Banner,
    MenuCard
  },
  data() {
    return {
      currentRowDisplay: 3,
      rowDisplay: [2, 3, 4, 5],
      bannerUrl: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/about_bg-min-1.jpg',
      menuList: [
        { banner: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/05/8-compressed-1-300x300.jpg' },
        { banner: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/05/8-compressed-1-300x300.jpg' },
        { banner: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/05/8-compressed-1-300x300.jpg' },
        { banner: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/05/8-compressed-1-300x300.jpg' },
        { banner: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/05/8-compressed-1-300x300.jpg' },
        { banner: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/05/8-compressed-1-300x300.jpg' },
        { banner: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/05/8-compressed-1-300x300.jpg' },
        { banner: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/05/8-compressed-1-300x300.jpg' },
        { banner: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/05/8-compressed-1-300x300.jpg' },
        { banner: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/05/8-compressed-1-300x300.jpg' }
      ]
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
    ]),
    changeRowDisplay(index) {
      if (index === this.currentRowDisplay) return
      console.log('index', index)
      this.currentRowDisplay = index
    }
  }
}
</script>

<style>

</style>
