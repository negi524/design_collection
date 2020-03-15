<template>
  <div class="container">
    <global-header :crumbs="crumbs" />
    <h2 class="p-2 text-success">Button List</h2>
    <div class="container my-3">
      <h3>hogehoge</h3>
      <div class="row">
        <div class="col-6">見た目</div>
        <div class="col-6">ソースコード</div>
      </div>
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
        { text: 'Buttons', href: '/buttons' }
      ]
    }
  }
}
</script>
