<template>
  <div class="b-wrapper">
    <div class="b-grid">
      <div class="left-nav">
        
      </div>
      <div class="right-body">
        <div class="rb-one">
          <h1>Hello</h1>
          <h2>I'am Alan</h2>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
    }
  },
  methods: { 
    fn() {
    }
  }   
}       
</script>

<style scoped>
  .b-grid {
    width: 100vw;
    /*height: 100%;*/
    min-height: 100vh;
    display: grid;
    grid-template-columns: 4% 96%;
  }
  .left-nav {
    background-color: #1a1a1a;
  }
  .right-body {
    background-color: #212121;
    /*background-color: #323232;*/
  }
  .rb-one {
    color: #14FFEC;
    margin-left: 10%;
    margin-top: 10%;
  }
</style>