<template>
  <div class="container p-0 md:p-10 mt-20">
    <h2 class="font-wind-song font-bold text-5xl text-center text-yellow-500">
      Our Menu
    </h2>
    <div class="mt-10 p-5 grid grid-cols-2 md:grid-cols-3 gap-5">
      <div
        v-for="food in foods"
        :key="food.name"
        class="bg-white border-b rounded-md shadow-md mt-5 flex flex-col md:flex-row items-center md:items-center md:p-5 cursor-pointer overflow-hidden"
        @click="onOpen(food.filename)"
      >
        <img :src="setImage(food.filename)" :alt="food.name" class="w-full h-28 md:w-32 md:h-32 md:rounded-full object-cover">
        <h3 class="md:ml-10 mt-5 mb-5 md:mb-0 md:mt-0 text-sm md:text-xl text-center text-gray-500 font-bold" v-text="food.name" />
      </div>
    </div>

    <div v-show="open" class="fixed z-50 top-0 bottom-0 left-0 right-0">
      <div class="w-full h-full bg-black-o-80" @click="onOpen" />
      <div class="fixed z-50 top-0 bottom-0 left-0 right-0 flex flex-col-reverse justify-center items-center">
        <img :src="filename" :alt="filename" class="rounded-md" style="max-width:90%;max-height:90%">
        <button class="bg-black text-white font-bold w-10 h-10 rounded-full -mb-5" @click="onOpen">
          X
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      open: false,
      filename: ''
    }
  },
  computed: {
    foods () {
      return this.$store.state.foods
    }
  },
  methods: {
    setImage (filename: string) {
      return '/images/foods/' + filename
    },
    onOpen (filename?: string) {
      if (filename) {
        this.filename = '/images/foods/' + filename
      }

      this.open = !this.open
    }
  }
})
</script>
