<template>
  <div class="container">
    <global-header :crumbs="pages" />
    <main class="my-3 mx-auto">
      <ul>
        <li><nuxt-link to="/buttons">Button Page</nuxt-link></li>
        <li>
          <nuxt-link to="/cherryblossoms">Cherry Blossoms Page</nuxt-link>
        </li>
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
      pages: [{ text: 'Home', href: '/' }]
    }
  }
}
</script>
