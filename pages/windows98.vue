<template>
  <div class="window w-98__container">
    <div class="row">
      <div class="col-3">
        <ul class="tree-view">
          <li>
            home
            <ul>
              <li><nuxt-link to="/buttons">Button Page</nuxt-link></li>
              <li><nuxt-link to="/snowfall">Snow Fall</nuxt-link></li>
              <li><nuxt-link to="/windows98">Windows98</nuxt-link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-8">
        <div class="window" style="width: 300px">
          <div class="title-bar">
            <div class="title-bar-text">ようこそ</div>
            <div class="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div class="window-body">
            <p>懐かしすぎるページ</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'onepage'
}
</script>

<style lang="scss" scoped>
/* このvueコンポーネントのみでwindows98のcssを利用する */
@import url('98.css');

.window {
  font-size: 14px;
}
.w-98 {
  &__container {
    height: 1000px;
  }
}
</style>
