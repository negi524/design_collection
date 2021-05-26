<template>
  <div id="imagetag">
    <global-header :crumbs="crumbs" />
    <h2 class="p-2 text-success">imgタグをレスポンシブに調整する方法</h2>
    <!-- 解説 -->
    <section class="description__point">
      <h3>ポイント</h3>
      <ul>
        <li>imgタグに指定するwidthとheightは本来の画像と同じサイズを指定</li>
        <li>CSSの当たり方や解像度の観点では画像は大きい方が良い</li>
        <li>
          画像ダウンロードのサイズや速度、パフォーマンスの観点では、画像は小さい方が良い
        </li>
        <li>
          CSSが読み込まれなかった場合、imgタグに指定したwidth,heightで表示される
        </li>
        <li>
          画像の<code>width</code>,<code>height</code>を指定しておくと、画像読み込み遅延によるカクカクがなくなる
        </li>
      </ul>
    </section>
    <section class="description__howto">
      <h3>やり方</h3>
      <ol>
        <li>
          PC版で表示する最大サイズとちょうど同じ程度の画像を用意する<br />
          大きすぎても小さすぎても良くない
        </li>
        <li>imgタグにheight, widthを画像本来のサイズで指定</li>
        <li>imgタグをdivタグで囲む</li>
        <li>imgタグのCSSには、<code>max-width: 100%</code>を指定する</li>
        <li>
          imgタグのCSSに、<code>height: auto;</code>を指定する<br />
          幅が縮んだときに縦長にならないように
        </li>
        <li>imgを囲ったdivタグのwidthで、デザインを調整する</li>
      </ol>
    </section>
    <!-- デモ -->
    <div class="demo">
      <div class="img__container">
        <img
          class="img__item"
          src="~/assets/personal-computer.jpg"
          width="640px"
          height="398px"
          alt="hoge"
        />
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
        { text: 'Image Tag', href: '/imagetag' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// SP
@media screen and (max-width: 896px) {
  .img {
    &__container {
      width: 400px;
      height: 300px;
    }
    &__item {
      max-width: 100%;
      height: auto;
    }
  }
}
// PC
@media screen and (min-width: 987px) {
  .img {
    &__container {
      width: 800px;
      height: 600px;
    }
    &__item {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
