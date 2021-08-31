<template>
  <div class="w-full flex flex-col items-center">
    <TopBar />
    <Header />
    <AboutUs />
    <OurMenu />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted () {
    this.getData()
    this.getFoods()
  },
  methods: {
    async getData () {
      const response = await fetch('/data/data.json')
      const data = await response.json()

      this.$store.commit('setAboutUs', data.aboutUs)
      this.$store.commit('setContacts', data.contacts)
      this.$store.commit('setAddress', data.address)
      this.$store.commit('setVisi', data.visi)
      this.$store.commit('setMisi', data.misi)
      this.$store.commit('setVideo', data.video)
    },
    async getFoods () {
      const response = await fetch('/data/foods.json')
      const { data } = await response.json()
      this.$store.commit('setFoods', data)
    }
  }
})
</script>
