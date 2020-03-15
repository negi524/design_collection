<template>
  <div class="container">
    <!-- <b-breadcrumb :items="crumbs" /> -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <template v-for="(item, index) in crumbs">
          <li
            v-if="index === crumbs.length - 1"
            :key="item.text"
            class="breadcrumb-item text-secondary"
            aria-current="page"
          >
            {{ item.text }}
          </li>
          <li v-else :key="item.text" class="breadcrumb-item text-secondary">
            <nuxt-link :to="item.href">{{ item.text }}</nuxt-link>
          </li>
        </template>
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
