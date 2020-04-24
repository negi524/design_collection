<template>
  <div class="window">
    <div class="title-bar">
      <div class="title-bar-text">
        My First VB4 Program
      </div>
    </div>
    <div class="window-body">
      <p>Hello, world!</p>
    </div>
  </div>
</template>

<script>
// windows98のモジュールを利用する
import '98.css'

export default {
  layout: 'onepage'
}
</script>

<style scoped>
.window {
  margin: 32px;
  width: 250px;
}
</style>
