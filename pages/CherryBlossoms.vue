<template>
  <div>
    <global-header :crumbs="crumbs" />
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
        { text: 'CherryBlossoms', href: '/cherryblossoms' }
      ]
    }
  }
}
</script>
