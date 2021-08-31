<template>
  <div id="about-us" class="container flex flex-col md:flex-row mt-5 md:mt-20">
    <div class="w-full md:w-1/2">
      <iframe
        class="video"
        :height="videoHeight"
        :src="video"
        title="Rumah Makan Salero Tanyoe"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        @load="setVideoHeight"
      />
    </div>
    <div class="w-full md:w-1/2 md:pl-10 mt-5 md:mt-0">
      <h2 class="font-wind-song font-bold text-3xl text-yellow-500 text-center md:text-left">
        Tentang Kami
      </h2>
      <h3 class="font-bold text-2xl md:text-3xl text-center md:text-left">
        Selamat Datang di <span class="whitespace-nowrap">Rumah Makan</span> <span class="whitespace-nowrap">Salero Tanyoe</span>
      </h3>
      <div class="mt-10 md:mr-20 p-4 md:p-0">
        <p
          v-for="item in aboutUs"
          :key="item"
          class="mt-2"
          v-text="item"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      videoHeight: 'auto'
    }
  },
  computed: {
    aboutUs () {
      return this.$store.state.aboutUs
    },
    video () {
      return this.$store.state.video
    }
  },
  methods: {
    setVideoHeight () {
      // @ts-ignore
      const width: number = this.$el.querySelector('.video').offsetWidth

      this.videoHeight = (width / 1.777777778) + 'px'
    }
  }
})
</script>

<style scoped>
.video {
  width: 100%;
  margin-top: 155px;
}

@media only screen and (max-width: 600px) {
  .video {
    margin-top: 0px !important;
  }
}
</style>
