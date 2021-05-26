<template>
  <div id="imagetag">
    <global-header :crumbs="crumbs" />
    <h2 class="p-2">imgタグをレスポンシブに調整する方法</h2>
    <div class="img__container">
      <img
        class="img__item"
        src="~/assets/personal-computer.jpg"
        width="640px"
        height="398px"
        alt="hoge"
      />
    </div>
  </div>
</template>

<script>
import GlobalHeader from '~/components/GlobalHeader.vue'

export default {
  components: {
    GlobalHeader
  },
  data() {
    return {
      crumbs: [
        { text: 'Home', href: '/' },
        { text: 'Image Tag', href: '/imagetag' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  &__container {
    width: 50%;
    height: 50%;
  }
  &__item {
    max-width: 100%;
    height: auto;
  }
}
</style>
