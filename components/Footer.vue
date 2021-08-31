<template>
  <div id="footer" class="mt-10 bg-black w-full flex justify-center">
    <div class="container p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div>
        <ul>
          <li
            v-for="contact in contacts"
            :key="contact.name"
            class="flex items-center mb-2"
          >
            <img :src="setImage(contact.name)" class="w-4 md:w-5 h-4 md:h-5">
            <a class="text-white text-xs md:text-md font-bold ml-2" target="_blank" :href="setLink(contact.name, contact.value)" v-text="contact.text" />
          </li>
        </ul>
      </div>

      <div>
        <div class="flex">
          <img src="/images/icons/address-48.png" class="w-4 md:w-5 h-4 md:h-5">
          <a class="text-white text-xs md:text-md font-bold ml-2" v-text="address" />
        </div>
      </div>

      <div class="flex justify-end">
        <div class="flex flex-col items-end justify-end">
          <h2 class="text-white text-xs">
            Designed by <a class="font-bold" href="https://github.com/dalfiannur" target="_blank">Dikry Alfiannur Wahyu</a>
          </h2>
          <p class="text-white text-xs font-bold">
            &copy; 2021
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    contacts () {
      return this.$store.state.contacts
    },
    address () {
      return this.$store.state.address
    }
  },
  methods: {
    setImage (name: string) {
      return '/images/icons/' + name + '-48.png'
    },
    setLink (key: string, value: string) {
      if (key === 'facebook') {
        return `https://web.facebook.com/profile.php?id=${value}`
      }

      if (key === 'instagram') {
        return `https://instagram.com/${value}`
      }

      if (key === 'whatsapp') {
        return `https://wa.me/${value}`
      }

      return ''
    }
  }
})
</script>
