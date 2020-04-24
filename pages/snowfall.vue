<template>
  <div id="snow" class="snow"></div>
</template>

<script>
import particlesJS from 'particles.js'
import snowData from '~/assets/snow.json'

export default {
  layout: 'onepage',
  data() {
    return {
      snow: snowData
    }
  },
  mounted() {
    window.particlesJS('snow', this.snow)
  }
}
</script>

<style lang="scss" scoped>
.snow {
  position: absolute;
  margin-top: 0;
  background-color: black;
  width: 100%;
  height: 100%;
}
</style>
