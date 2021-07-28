<template>
  <footer class="bg-dark w-full relative pt-16">
    <div class="flex flex-col xl:w-desktop xl:flex-row m-auto">
      <div class="flex justify-center flex-quarter px-6">
        <div class="">
          <img src="@/assets/icons/svg/taco_tuesday.svg">
        </div>
      </div>
      <div class="form-desktop">
        <HomeCard card-title="Contact Us">
          <div class="flex flex-col px-8 pt-5">
            <input class="pl-2 my-4 leading-10 border-b border-border" type="text" placeholder="name*">
            <input class="pl-2 my-4 leading-10 border-b border-border" type="email" placeholder="email*">
            <textarea class="pl-2 my-4 leading-10 border-b border-border" placeholder="Message*" />
          </div>
        </HomeCard>
      </div>
      <div class="flex-quarter px-6">
        <Info
          v-for="(item, index) in footerInfo"
          :key="index"
          :info-icon="item.icon"
          :infos="item.info"
        />
      </div>
    </div>
    <div class="py-10 text-center text-coffee">© 2021 XX BY XXX. XXXXXXXXXXXXXXX</div>
  </footer>
</template>

<script>
import HomeCard from '../HomeCard'
import Info from './Info'

export default {
  name: 'Footer',
  components: {
    HomeCard,
    Info
  },
  data() {
    return {
      footerInfo: [
        {
          icon: require('@/assets/icons/svg/location.svg'),
          info: [
            'FOODIE',
            'PO Box 123456',
            '171 1st Avenue 10003',
            'New York City'
          ]
        },
        {
          icon: require('@/assets/icons/svg/mobile.svg'),
          info: [
            'Phone: (212) 777-7773',
            'Fax: (212) 777-7773'
          ]
        },
        {
          icon: require('@/assets/icons/svg/email.svg'),
          info: [
            'support@yourname.com'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="postcss" type="text/postcss">
.flex-half {
  flex: 1 1 50%;
}
.flex-quarter {
  flex: 1 1 25%;
}
.form-desktop {
  flex: 1 1 50%;
  @apply relative -mt-44;
}
</style>
