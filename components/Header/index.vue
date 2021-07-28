<template>
  <!-- header最外層 -->
  <header class="absolute z-50 w-full">
    <!-- 內層一 -->
    <div class="xl:flex justify-between items-center px-9 h-28 leading-28">
      <!-- 左邊LOGO -->
      <div>LOGO</div>
      <!-- 右邊 -->
      <div class="xl:flex justify-end h-full">
        <!-- MENU -->
        <ul class="xl:flex">
          <li
            v-for="(item, index) in menu"
            :key="index"
            class="mr-8 text-white"
          >
            <a
              class="cursor-pointer"
              :class="{'pb-1 border-b border-lightGray': item.name === currentMenu}"
              @click="onClick(item.name)"
            >
              {{ item.name.toUpperCase() }}
            </a>
          </li>
        </ul>
        <!-- 預約 -->
        <div class="mr-12">
          <span class="text-white px-8 py-3 border border-solid border-gray-400">RESERVATION</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
    menu: {
      type: Array,
      default: () => []
    },
    currentMenu: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick(name) {
      this.$emit('onChangeMenu', name)
    }
  }
}
</script>

<style>

</style>
