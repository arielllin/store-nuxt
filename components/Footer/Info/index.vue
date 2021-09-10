<template>
  <div class="flex">
    <div class="pt-1 pr-4">
      <svg-icon :icon-class="infoIcon" />
    </div>
    <div class="mb-5">
      <span v-for="(item, index) in infos" :key="index" class="flex flex-col text-coffee">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    infoIcon: {
      type: String,
      default: ''
    },
    infos: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
