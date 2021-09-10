<!-- <template>
  <div class="swiper overflow-hidden">
    <div
      ref="swiperWrapper"
      class="swiper-wrapper flex"
      @mousedown="onMousedown"
      @mousemove="onMousemove"
      @mouseup="onMouseup"
    >
      <slot />
    </div>
  </div>
</template> -->

<script>
export default {
  name: 'SwiperMain',
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      state: 0,
      index: 0,
      swiperWidth: null,
      startEvent: null,
      swiperItemLength: null
    }
  },
  computed: {
    distance() {
      return 0 - this.swiperWidth * this.index
    }
  },
  watch: {
    index(val) {
      if (this.index < 0) {
        this.index = 0
      } else if (this.index > this.swiperItemLength - 1) {
        this.index = this.swiperItemLength - 1
      }
      this.$refs.swiperWrapper.style.transform = `translateX(${this.distance}px)`
    }
  },
  mounted() {
    this.swiperWidth = this.$refs.swiperWrapper.offsetWidth
    this.swiperItemLength = this.$refs.swiperWrapper.children.length
  },
  methods: {
    onMousedown(e) {
      this.state = 1
      this.startEvent = e
      console.log('按下', e)
    },
    onMousemove(e) {
      e.preventDefault()
      if (this.state !== 1) return
      // console.log('移動', e)
    },
    onMouseup(e) {
      this.state = 0
      if (e.offsetX === this.startEvent.offsetX) return
      // 判斷左滑還是右滑
      if (e.offsetX < this.startEvent.offsetX) {
        this.index++
      } else {
        this.index--
      }
      // 非loop時判斷是不是第一張集最後一張
      // if (this.index < 0) {
      //   this.index = 0
      // } else if (this.index > this.swiperItemLength - 1) {
      //   this.index = this.swiperItemLength - 1
      // }
      console.log('抬起', e)
    },
    onPrevArrow() {
      this.index--
      console.log('按了左箭頭')
    },
    onNextArrow() {
      this.index++
      console.log('按了右箭頭')
    }
  },
  render: function(h) {
    // const arrowPrev = Object.hasOwnProperty.call(this.$slots, 'arrowPrev')
    const arrowNext = Object.hasOwnProperty.call(this.$slots, 'arrowNext')
    console.log('test', this.$slots)
    return h(
      'div',
      {
        class: ['swiper', 'overflow-hidden', 'relative']
      },
      [
        h(
          'div',
          {
            class: ['swiper-wrapper', 'flex'],
            ref: 'swiperWrapper',
            on: {
              mousedown: this.onMousedown,
              mousemove: this.onMousemove,
              mouseup: this.onMouseup
            }
          },
          [this.$slots.default]
        ),
        this.options && this.options.navigation.nextEl && h(
          'button',
          {
            class: [...this.options.navigation.nextEl, 'absolute', 'bottom-1/2', 'left-0'],
            on: {
              click: this.onPrevArrow
            }
          },
          this.$slots.arrowPrev ||
          [h('svg-icon', { props:
            {
              iconClass: 'arrow-prev',
              className: 'icon-arrow'
            }
          })]
        ),
        arrowNext && h(
          'button',
          {
            class: ['arrow-next-button', 'absolute', 'bottom-1/2', 'right-0'],
            on: {
              click: this.onNextArrow
            }
          },
          this.$slots.arrowNext ||
          [h('svg-icon', { props:
            {
              iconClass: 'arrow-next',
              className: 'icon-arrow'
            }
          })]
        )
      ]
    )
  }
}
</script>

<style>
.swiper-wrapper {
  transition: transform 0.2s ease-in-out;
}
.icon-arrow {
  font-size: 40px;
}
</style>
