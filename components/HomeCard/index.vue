<template>
  <div class="py-16" :class="`bg-${cardBackgroundColor}`">
    <div class="flex flex-col text-center">
      <div class="text-5xl">
        <span class="text-main">{{ splitCardTitle[0] }}</span>
        <span :class="`text-${cardTextColor}`">{{ splitCardTitle.slice(1).join(' ') }}</span>
      </div>
      <div v-if="cardContent" class="lg:w-article mt-5 mx-auto">
        <span :class="`text-${cardContentColor}`" class="leading-7">
          {{ cardContent }}
        </span>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    cardTitle: {
      type: String,
      default: ''
    },
    cardContent: {
      type: String,
      default: ''
    },
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    splitCardTitle() {
      const words = this.cardTitle.split(' ')
      return words
    },
    cardBackgroundColor() {
      return this.isDarkMode ? 'dark' : 'white'
    },
    cardTextColor() {
      return this.isDarkMode ? 'white' : 'black'
    },
    cardContentColor() {
      return this.isDarkMode ? 'white' : 'gray'
    }
  }
}
</script>

<style>

</style>
