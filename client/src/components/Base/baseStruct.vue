<template>
  <div class="b-wrapper">
    <div class="b-grid">
      <div class="left-nav">
        
      </div>
      <div class="right-body">
        <div class="one">
          <div class="one-hdn"></div>
          <div class="one-bdy">
            <p>I'am Alan Mathew,</p>   
            <p>Web Developer.</p>             
          </div>    
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
  .one {
    color: #fff;
    margin-left: 10%;
    margin-top: 12%;
  }
  .one-hdn {
    width: 300px;
    height: 150px;
    background-image: url('../../assets/Text.svg');
    /*filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);*/
    /*filter: brightness(0) invert(1);*/
    filter: invert(82%) sepia(75%) saturate(510%) hue-rotate(95deg) brightness(105%) contrast(106%);
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;       
  }
  .one-bdy {
    margin-top: 0px;
    font-size: 25px;
    font-family: FiraCode-Medium;
  }
  .one-bdy p {
    margin-bottom: 5px;
  }
</style>