<template>
  <div class="b-wrapper">
    <div class="b-grid">
      <div class="left-nav">
        <div class="lc-top">

        </div>
        
        <div class="lc-mid">          
          <div class="lc-mid-one">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="img1"></div>
            </router-link>
          </div>
          <div class="lc-mid-two">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="img1"></div>
            </router-link>
          </div>
          <div class="lc-mid-three">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="img1"></div>
            </router-link>
          </div>
          <div class="lc-mid-four">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="img1"></div>
            </router-link>
          </div>
          <div class="lc-mid-five">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="img1"></div>
            </router-link>
          </div>                                        
        </div>

        <div class="lc-bottom">

        </div>
      </div>
      <div class="right-body">

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
    grid-template-columns: 4vw 96vw;
  }
  .left-nav {
    background-color: #1a1a1a;
    /*background-color: #212121;*/
  }
  .right-body {
    background-color: #212121;
    /*background-color: #323232;*/
  }
  .lc-mid {
    background-color: blue;
    height: 310px;
    box-sizing: border-box;
    margin-top: 0px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;  
  }
  .lc-mid-one {
    background-color: aqua;
  }
  .lc-mid-two {
    background-color: red;
  }  
  .lc-mid-three {
    background-color: yellow;
  }
  .lc-mid-four {
    background-color: green;
  }
  .lc-mid-five {
    background-color: aqua;
  }        
</style>