<template>
  <div id="buttons" class="container mt-5">
    <global-header :crumbs="crumbs" />
    <h2 class="p-2 text-success">Button List</h2>
    <div class="container my-3">
      <h3 class="my-2">hogehoge</h3>
      <div class="row">
        <div class="col-md-12">
          <div>
            <a class="myButton">
              <span class="myButton__item"></span>
              <span class="myButton__item"></span>
              <span class="myButton__item"></span>
              <span class="myButton__item"></span>
              Button
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <pre>
            <code>
              htmlのコード
              console.log('hello, world.');
            </code>
          </pre>
        </div>
        <div class="col-md-6">
          <pre>
            <code>
              cssのコード
              console.log('hello, world.');
            </code>
          </pre>
        </div>
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

<style lang="scss" scoped>
.myButton {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 60px;
  color: #1670f0;
  background: #0c002b;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    bottom: 2px;
    width: 50%;
    background: rgba(255, 255, 255, 0.06);
  }
  &__item {
    &:nth-child(1) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, #0c002b, #1779ff);
      animation: animate1 2s linear infinite;
    }
    &:nth-child(2) {
      position: absolute;
      top: 0;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(to bottom, #0c002b, #1779ff);
      animation: animate2 2s linear infinite;
      animation-delay: 1s;
    }
    &:nth-child(3) {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(to left, #0c002b, #1779ff);
      animation: animate3 2s linear infinite;
    }
    &:nth-child(4) {
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(to top, #0c002b, #1779ff);
      animation: animate4 2s linear infinite;
      animation-delay: 1s;
    }
  }
}
@keyframes animate1 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes animate2 {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
@keyframes animate3 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes animate4 {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
