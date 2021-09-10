<template>
  <div class="flex flex-col px-4">
    <div class="h-26 m-auto mb-6">
      <img :src="servicePicture" alt="">
    </div>
    <div class="text-3xl text-main">{{ serviceName }}</div>
    <div class="mt-4 text-gray leading-7">{{ serviceContent }}</div>
  </div>
</template>

<script>
export default {
  name: 'Service',
  props: {
    servicePicture: {
      type: String,
      default: ''
    },
    serviceName: {
      type: String,
      default: ''
    },
    serviceContent: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
