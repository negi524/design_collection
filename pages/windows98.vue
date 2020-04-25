<template>
  <div class="window w98container">
    <div class="row">
      <div class="col-md-3">
        <ul class="tree-view h-100">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
            <ul>
              <li><nuxt-link to="/buttons">Button Page</nuxt-link></li>
              <li><nuxt-link to="/snowfall">Snow Fall</nuxt-link></li>
              <li><nuxt-link to="/windows98">Windows98</nuxt-link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-md-8">
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
            <div class="d-flex p-1 justify-content-end w98button__group">
              <button class="w98button__item--focused">OK</button>
              <button class="w98button__item">Cancel</button>
            </div>
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
.w98container {
  height: 1000px;
}

.w98button {
  &__item {
    margin: 0 6px;
    &--focused {
      outline: 1px dotted #000000;
      outline-offset: -4px;
    }
  }
}
</style>
