<template>
  <div class="w-full h-full text-center">
    <div class="aspect-w-7 aspect-h-5">
      <img class="w-full h-full object-cover" :src="backgroundImage" alt="">
      <div class="flex justify-center items-center w-full h-full text-2xl text-white text-opacity-0 hover:text-opacity-100 bg-darkMask bg-opacity-0 hover:bg-opacity-70 transition duration-300">
        {{ title }}
      </div>
    </div>
  </div>
  <!-- <div
    class="w-full h-full bg-cover bg-center"
    :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
  >
    <div class="flex justify-center items-center w-full h-full text-2xl text-white text-opacity-0 hover:text-opacity-100 bg-darkMask bg-opacity-0 hover:bg-opacity-70 transition duration-300">
      {{ title }}
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'HoverCard',
  props: {
    backgroundImage: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
