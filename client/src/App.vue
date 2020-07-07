<template>
  <div id="app">
    <Base />
  </div>
</template>

<script>
import Base from './components/Base/base'

export default {
  name: 'app',
  components: {
    Base
  }
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  @font-face {
      font-family: "FiraCode-Medium";
      src: url('./assets/Font/woff/FiraCode-Medium.woff') format('woff');
  }
  @font-face {
      font-family: "FiraCode-Light";
      src: url('./assets/Font/woff/FiraCode-Light.woff') format('woff');
  }
  @font-face {
      font-family: "FiraCode-Bold";
      src: url('./assets/Font/woff/FiraCode-Bold.woff') format('woff');
  }
  @font-face {
      font-family: "FiraCode-Regular";
      src: url('./assets/Font/woff/FiraCode-Regular.woff') format('woff');
  }
  @font-face {
    font-family: "FiraCode-Retina";
    src: url('./assets/Font/woff/FiraCode-Retina.woff') format('woff');
  }
</style>
