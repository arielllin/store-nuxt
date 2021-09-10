<!-- <template>
  <div class="swiper-item w-full flex-shrink-0">
    <slot />
  </div>
</template> -->

<script>
export default {
  name: 'SwiperItem',
  render: function(h) {
    return h(
      'div',
      {
        class: ['swiper-item', 'w-full', 'flex-shrink-0']
      },
      this.$slots.default
    )
  }
}
</script>

<style></style>
