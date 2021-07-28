<template>
  <div>
    <!-- 輪播圖 -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in dataImage" :key="index" class="swiper-slide">
          <img class="w-screen h-screen object-cover" :src="item.imgUrl">
        </div>
      </div>
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
    </div>
    <!-- 區塊一 -->
    <div class="lg:h-pic lg:flex">
      <div class="bg-white lg:w-1/2">
        <div class="lg:pl-60 lg:pr-32">
          <HomeCard card-title="About Our Chiefs">
            <div v-swiper:mySwiper2="swiperOptionTwo" class="mt-6">
              <div class="swiper-wrapper">
                <div v-for="(item, index) in collections" :key="index" class="swiper-slide">
                  <div class="h-24 mb-6 flex items-center">
                    <img class="w-24 h-full rounded-full" :src="item.collection.image_url">
                    <div class="pl-5 flex flex-col text-left">
                      <span class="text-xl leading-8">{{ item.collection.title }}</span>
                      <span class="text-main">Chef De Partie</span>
                    </div>
                  </div>
                  <div class="text-left leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in elementum purus molestie. Curabitur pellentesque massa eu nulla consequat sed porttitor arcu porttitor.
                  </div>
                </div>
              </div>
              <div class="relative w-28 h-20 mt-6">
                <div slot="button-prev" class="swiper-button-prev" />
                <div slot="button-next" class="swiper-button-next" />
              </div>
            </div>
          </HomeCard>
        </div>
      </div>
      <div class="bg-black w-full h-full lg:w-1/2">
        <img class="w-full h-full object-cover" :src="pic">
      </div>
    </div>
    <!-- 區塊二 -->
    <div>
      <HomeCard card-title="Our Services" card-content="Aenean sodales dictum augue, in faucibus nisi sollicitudin eu. Nulla semper arcu vel diam auctor. condimentum. Nam molestie sem eu quam fermentum a tempus nisi aliquet." is-dark-mode />
    </div>
    <!-- 區塊三 -->
    <div
      class="lg:grid grid-cols-5"
    >
      <div
        v-for="(item, index) in collections.slice(0,10)"
        :key="index"
        class="h-auto w-full"
      >
        <HoverCard
          :background-image="item.collection.image_url"
          :title="item.collection.establishments_name"
        />
      </div>
    </div>
    <!-- 區塊四 -->
    <div>
      <HomeCard card-title="Our Services" card-content="Aenean sodales dictum augue, in faucibus nisi sollicitudin eu. Nulla semper arcu vel diam auctor. condimentum. Nam molestie sem eu quam fermentum a tempus nisi aliquet.">
        <div class="xl:w-desktop flex flex-col xl:flex-row mt-10 mx-auto">
          <Service
            v-for="(item, index) in services"
            :key="index"
            :service-picture="item.img_url"
            :service-name="item.name"
            :service-content="item.content"
          />
        </div>
      </HomeCard>
    </div>
    <!-- 區塊五 -->
    <div>
      <HomeCard card-title="Our Breakfast" is-dark-mode>
        <div class="xl:w-desktop xl:flex-row flex flex-col m-auto mt-8">
          <div class="menu-content">
            <div v-for="(item, index) in restaurants.slice(0,5)" :key="index" class="py-3">
              <div class="text-2xl">{{ item.restaurant.name }}</div>
              <div class="text-align">{{ restaurantContent(item) }}</div>
            </div>
          </div>
          <div class="menu-content">
            <div v-for="(item, index) in restaurants.slice(5,10)" :key="index" class="py-3">
              <div class="text-2xl">{{ item.restaurant.name }}</div>
              <div class="text-align">{{ restaurantContent(item) }}</div>
            </div>
          </div>
        </div>
      </HomeCard>
    </div>
  </div>
</template>

<script>
import HomeCard from '@/components/HomeCard'
import HoverCard from '@/components/HoverCard'
import Service from './Service'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeCard,
    HoverCard,
    Service
  },
  data() {
    return {
      pic: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/03/12333-min-compressed.jpg',
      dataImage: [
        {
          imgUrl: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/07/slide3-compressed.jpg'
        },
        {
          imgUrl: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/03/slider1-min.jpg'
        },
        {
          imgUrl: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/07/slide2-compressed.jpg'
        }
      ],
      services: [
        { img_url: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/03/ico1.png', name: 'Breakfast', content: 'Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum.' },
        { img_url: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/03/ico2.png', name: 'Lunch', content: 'Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum.' },
        { img_url: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/03/ico3.png', name: 'Dinner', content: 'Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum.' },
        { img_url: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/03/ico4.png', name: 'Custom', content: 'Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum.' }
      ],
      swiperOption: {
        lazy: {
          loadPrevNext: true
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOptionTwo: {
        lazy: {
          loadPrevNext: true
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  async fetch() {
    await this.GetCategories()
    await this.GetCollections()
    await this.GetRestaurants()
    // this.GetCities()
    // await this.GetCuisines()
  },
  computed: {
    ...mapState('foodie', [
      'categories',
      'collections',
      'restaurants'
    ]),
    restaurantContent() {
      return item => {
        const { cuisines, currency } = item.restaurant
        const result = cuisines.padEnd(140, ' . ') + currency
        return result
      }
    }
  },
  methods: {
    ...mapActions('foodie', [
      'GetCategories',
      'GetCollections',
      'GetCuisines',
      'GetRestaurants',
      'GetCities'
    ])
  }
}
</script>

<style lang="postcss" type="text/postcss">
.menu-content {
  @apply flex-1 text-left text-white py-4 px-3;
}
.text-align {
  text-align-last: justify;
}
</style>
