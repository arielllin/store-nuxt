// import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)

import Vue from 'vue'
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  EffectFade,
  Mousewheel,
  Autoplay
} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay, EffectFade])
Vue.use(getAwesomeSwiper(SwiperClass))
// const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
