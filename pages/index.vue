<template>
  <div class="container">
    <global-header :crumbs="pages" />
    <main class="my-3 mx-auto">
      <ul>
        <li><a href="/buttons">Button Page</a></li>
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
      pages: [
        {
          text: 'Home',
          href: '/'
        }
      ]
    }
  }
}
</script>
