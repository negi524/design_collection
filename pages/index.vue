<template>
  <div>
    <global-header :crumbs="crumbs" />
    <main class="my-3 mx-auto">
      <ul>
        <li><nuxt-link to="/headings">Headings</nuxt-link></li>
        <li><nuxt-link to="/buttons">Buttons</nuxt-link></li>
        <li><nuxt-link to="/snowfall">Snow Fall</nuxt-link></li>
        <li><nuxt-link to="/windows98">windows98</nuxt-link></li>
      </ul>
    </main>
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
      crumbs: [{ text: 'Home', href: '/' }]
    }
  }
}
</script>
