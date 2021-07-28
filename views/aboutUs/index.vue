<template>
  <div>
    <Banner :background-image="bannerUrl" />
    <HomeCard card-title="About Us" is-dark-mode />
    <div class="lg:flex">
      <div
        v-for="(item, index) in hoverCardImage"
        :key="index"
        class="w-full"
      >
        <HoverCard :background-image="item.imgUrl" />
      </div>
    </div>
    <div class="bg-light py-14 text-4xl text-black text-center">
      <div class="lg:w-desktop tracking-wider font-normal leading-12 m-auto">
        One cannot think well, love well, sleep well, if one has not dined well.
      </div>
    </div>
    <div class="px-4 lg:w-article m-auto">
      <HomeCard card-title="Our Blog" card-content="Aenean sodales dictum augue, in faucibus nisi sollicitudin eu. Nulla semper arcu vel diam auctor. condimentum.">
        <div class="my-9 border-t border-lightGray" />
        <Article />
      </Homecard>
    </div>
  </div>
</template>

<script>
import Article from '@/components/Article'
import Banner from '@/components/Banner'
import HomeCard from '@/components/HomeCard'
import HoverCard from '@/components/HoverCard'

export default {
  name: 'AboutUs',
  components: {
    Article,
    Banner,
    HomeCard,
    HoverCard
  },
  data() {
    return {
      bannerUrl: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/about_bg-min-1.jpg',
      hoverCardImage: [
        {
          imgUrl: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/chef5-compressed.jpg'
        },
        {
          imgUrl: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/chef4-compressed.jpg'
        },
        {
          imgUrl: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/chef5-compressed.jpg'
        },
        {
          imgUrl: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/chef4-compressed.jpg'
        },
        {
          imgUrl: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/chef5-compressed.jpg'
        }
      ]
    }
  }
}
</script>

<style>

</style>
