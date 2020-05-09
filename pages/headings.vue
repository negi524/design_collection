<template>
  <div id="headings">
    <global-header :crumbs="crumbs" />
    <h2 class="p-2 text-success">Heading List</h2>
    <div class="container my-3">
      <h2 class="mt-5 mb-4 p-2 headings__heading">シンプルな下線</h2>
      <div class="row border p-3">
        <div class="col-md-12">
          <div class="sample__underline">見出しデザインサンプル</div>
        </div>
      </div>

      <h2 class="mt-5 mb-4 p-2 headings__heading">シンプルな左線</h2>
      <div class="row border p-3">
        <div class="col-md-12">
          <div class="sample__leftline">見出しデザインサンプル</div>
        </div>
      </div>

      <h2 class="mt-5 mb-4 p-2 headings__heading">左線 + 下線</h2>
      <div class="row border p-3">
        <div class="col-md-12">
          <div class="sample__leftunderline">見出しデザインサンプル</div>
        </div>
      </div>

      <h2 class="mt-5 mb-4 p-2 headings__heading">吹き出しのデザイン</h2>
      <div class="row border p-3">
        <div class="col-md-12">
          <div class="sample__speech-bubble">見出しデザインサンプル</div>
        </div>
      </div>

      <h2 class="mt-5 mb-4 p-2 headings__heading">左側に丸</h2>
      <div class="row border p-3">
        <div class="col-md-12">
          <div class="sample__leftcircle">見出しデザインサンプル</div>
        </div>
      </div>

      <!-- <h2 class="mt-5 mb-4 p-2 headings__heading">リボン風のデザイン</h2>
      <div class="row border p-3">
        <div class="col-md-12">
          <div class="">見出しデザインサンプル</div>
        </div>
      </div> -->
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
        { text: 'Headings', href: '/headings' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.headings {
  &__heading {
    font-size: 25px;
  }
}
.sample {
  &__underline {
    font-size: 25px;
    padding-bottom: 3px;
    border-bottom: 3px solid #364e96;
  }
  &__leftline {
    font-size: 25px;
    padding-left: 3px;
    border-left: 7px solid #364e96;
  }
  &__leftunderline {
    font-size: 25px;
    padding-bottom: 3px;
    padding-left: 3px;
    border-bottom: 3px solid #364e96;
    border-left: 7px solid #364e96;
  }
  &__speech-bubble {
    position: relative;
    font-size: 25px;
    padding: 5px;
    background-color: #e0edff;
    &::after {
      position: absolute;
      content: '';
      top: 100%;
      left: 30px;
      border: 15px solid transparent;
      border-top: 15px solid #e0edff;
      width: 0;
      height: 0;
    }
  }
  &__leftcircle {
    font-size: 25px;
    &::before {
      content: '';
      display: inline-block;
      width: 21px;
      height: 21px;
      margin-right: 9px;
      border: 3px solid;
      border-radius: 50%;
      vertical-align: -2px;
    }
  }
}
</style>
