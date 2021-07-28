<template>
  <div>
    <Header :menu="menu" :current-menu="currentMenu" @onChangeMenu="onChangeMenu" />
    <Nuxt />
    <div class="w-full h-map bg-lightGray" /> <!-- 預設放地圖區塊 -->
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Layouts',
  data() {
    return {
      currentMenu: this.$route.name,
      menu: [
        { name: 'Home' },
        { name: 'About Us' },
        { name: 'Blog' },
        // { name: 'Menu' },
        { name: 'Shop' }
      ]
    }
  },
  methods: {
    onChangeMenu(name) {
      if (this.currentMenu !== name) {
        this.currentMenu = name
        this.$router.push({ name: name })
      }
    }
  }
}
</script>

<style>
</style>
