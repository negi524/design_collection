<template>
  <div class="container">
    <!-- <b-breadcrumb :items="crumbs" /> -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li
          v-for="item in crumbs"
          :key="item.text"
          class="breadcrumb-item text-secondary"
        >
          <nuxt-link :to="item.href">{{ item.text }}</nuxt-link>
        </li>
      </ol>
    </nav>
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
