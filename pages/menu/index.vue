<template>
  <div>
    <Banner :background-image="bannerUrl" />
  </div>
</template>

<script>
import Banner from '@/components/Banner'

export default {
  name: 'Menu',
  components: {
    Banner
  },
  data() {
    return {
      bannerUrl: 'https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/about_bg-min-1.jpg'
    }
  }
}
</script>

<style>

</style>
