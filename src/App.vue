<template>
  <div id="app">
    <Nav />
    <Home />
  </div>
</template>

<script>
import Home from './components/Home/HMain'
import Nav from './components/Nav'

export default {
  name: 'app',
  components: {
    Nav,
    Home
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
</style>
