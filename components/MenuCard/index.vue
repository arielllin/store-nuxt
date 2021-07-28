<template>
  <div class="w-full h-full text-center">
    <!-- <div
      class="w-full h-full mb-4 bg-cover bg-center"
      :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
    > -->
    <div class="mb-4 aspect-w-1 aspect-h-1">
      <img class="w-full h-full object-cover" :src="backgroundImage" alt="">
    </div>
    <!-- <div class="flex justify-center items-center w-full h-full text-2xl text-white text-opacity-0 hover:text-opacity-100 bg-darkMask bg-opacity-0 hover:bg-opacity-70 transition duration-300">
      Food
    </div> -->
    <!-- </div> -->
    <div>{{ name }}</div>
    <div>{{ tags }}</div>
    <div class="mt-4 pt-4 border-t border-lightGray">
      <div>{{ price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuCard',
  props: {
    backgroundImage: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    tags: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
