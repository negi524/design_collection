<template>
  <div class="container">
    <b-breadcrumb :items="crumbs" />
  </div>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      required: true
    }
  }
}
</script>
