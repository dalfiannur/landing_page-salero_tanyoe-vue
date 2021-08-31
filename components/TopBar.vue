<template>
  <div class="fixed left-0 right-0 top-0 z-40 bg-white md:bg-transparent" :class="{ 'md:bg-white shadow-md': scrolledOut }">
    <div class="container flex justify-between items-center p-5">
      <img src="/icon.png" class="logo">
      <div class="flex">
        <button class="block md:hidden" @click="setOpenMenu">
          <img src="/menu.png">
        </button>
        <ul :class="{ hidden: !openMenu }" class="menu md:block flex-none md:flex md:flex-row text-yellow-500 fixed md:static right-0 left-0 top-20 pt-10 md:pt-0 pb-5 md:pb-0 bg-white md:bg-transparent">
          <li class="p-2 hover:text-black">
            <a href="#header" class="font-bold w-full">Beranda</a>
            <div class="md:border-b-2 md:border-yellow-500" />
          </li>
          <li class="p-2 hover:text-black">
            <a href="#our-menu" class="font-bold w-full">Menu Makanan</a>
            <div class="md:border-b-2 md:border-yellow-500" />
          </li>
          <li class="p-2 hover:text-black">
            <a href="#about-us" class="font-bold w-full">Tentang Kami</a>
            <div class="md:border-b-2 md:border-yellow-500" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      scrolledOut: false,
      openMenu: false
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.scrolledOut = window.scrollY > 20
    })
  },
  methods: {
    setOpenMenu () {
      this.openMenu = !this.openMenu
    }
  }
})
</script>

<style scoped>
.logo {
  height: 50px !important;
}
</style>
