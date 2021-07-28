<template>
  <div
    class="h-banner pt-36 pb-28 bg-cover"
    :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
  >
    <div class="text-center text-8xl text-white">
      text
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    backgroundImage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
