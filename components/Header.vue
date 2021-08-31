<template>
  <div class="w-full min-h-max flex justify-center mt-28 md:mt-0">
    <div class="container">
      <div class="w-full md:w-1/2 pt-20 flex justify-center items-center" :style="height">
        <div class="image-slider absolute right-0 top-24 md:top-0 w-full md:w-1/2 overflow-hidden" :style="height">
          <img
            v-for="item in foods"
            :key="item.name"
            :src="setSliderImage(item.filename)"
            class="w-full h-full object-cover"
          >
        </div>

        <div class="text-section absolute md:relative top-32 md:top-0 left-4 right-4 p-5 md:p-0 bottom-4 rounded-md">
          <div class="text-slider">
            <span class="font-lobster text-4xl md:text-5xl pt-2 pb-2 text-yellow-500">
              Yang
            </span>
            <ul class="overflow-hidden h-14 md:h-16">
              <li v-for="item in textSliders" :key="item" class="font-lobster text-4xl md:text-5xl pt-2 pb-2" v-text="item" />
            </ul>
          </div>

          <div class="max-w-md">
            <p class="mt-10 font-bold md:pr-10" v-text="visi" />
            <p class="mt-5 font-bold md:pr-10" v-text="misi" />
          </div>

          <div class="mt-10 flex md:block justify-center">
            <a :href="whatsapp" target="_blank" class="bg-yellow-500 p-2 rounded-md text-white font-bold">Pesan Sekarang</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Slider {
  name: string;
  filename: string;
}

interface DataResult {
  height: string;
  sliders: Slider[];
  textSliders: string[];
}

export default Vue.extend({
  data (): DataResult {
    return {
      height: 'height: auto',
      sliders: [],
      textSliders: [
        'Jauh Mendekat!',
        'Dekat Merapat!',
        'Rapat Melekat!'
      ]
    }
  },
  computed: {
    foods () {
      const data = this.$store.state.foods
      const foods = [...data]
      return foods.sort(() => 0.5 - Math.random()).slice(0, 5)
    },
    visi () {
      return this.$store.state.visi
    },
    misi () {
      return this.$store.state.misi
    },
    whatsapp () {
      const whatsapp = this.$store.state.contacts.find((item: any) => item.name === 'whatsapp')
      if (whatsapp) {
        return 'https://wa.me/' + whatsapp.value
      }
      return ''
    }
  },
  mounted () {
    this.height = 'height:' + window.innerHeight + 'px'
  },
  methods: {
    setSliderImage (filename: string) {
      return '/images/foods/' + filename
    }
  }
})
</script>

<style scoped>
.image-slider img {
  animation: image-slider 20s;
  animation-iteration-count: infinite;
}

@keyframes image-slider {
  0%, 5%, 100% {
    transform: translate3d(0, 0, 0)
  }
  20%, 25% {
    transform: translate3d(0, -100%, 0)
  }
  40%, 45% {
    transform: translate3d(0, -200%, 0)
  }
  60%, 65% {
    transform: translate3d(0, -300%, 0)
  }
  80%, 85% {
    transform: translate3d(0, -400%, 0)
  }
}

.text-slider ul li {
  animation: text-slider 10s;
  animation-iteration-count: infinite;
}

@keyframes text-slider {
  0%, 33%, 100% {
    transform: translate3d(0, 0, 0);
  }
  35%, 66% {
    transform: translate3d(0, -100%, 0);
  }
  70%, 99% {
    transform: translate3d(0, -200%, 0);
  }
}

.text-section {
  background-color: rgba(255, 255, 255, .8);
}

@media only screen and (min-width: 768px) {
  .text-section {
    background-color: rgba(255, 255, 255, 0) !important;
  }
}
</style>
