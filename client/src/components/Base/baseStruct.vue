<template>
  <div class="b-wrapper">
    <div class="b-grid">
      <div class="left-nav">
        
      </div>
      <div class="right-body">
        <div class="one">
          <div class="one-hdn"></div>
          <div class="one1-bdy">
            <p>I'am Alan Mathew,</p>   
            <p>Web Developer.</p>             
          </div>    
          <div class="one2-bdy">
            <p>MEVN Stack Dev | Cloud Enthusiasist</p>
          </div>
        </div>
        <!--<div class="me"></div>-->
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
    /*background-color: #212121;*/

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
    /*filter: brightness(0) invert(1);*/
    filter: invert(82%) sepia(75%) saturate(510%) hue-rotate(95deg) brightness(105%) contrast(106%);
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;       
  }
  .one1-bdy {
    margin-top: 5px;
    font-size: 25px;
    font-family: FiraCode-Medium;
  }
  .one1-bdy p {
    margin-bottom: 5px;
  }
  .one2-bdy {
    margin-top: 25px;
    font-size: 23px;
    font-family: FiraCode-Medium;
  }  
  .me {
    border: 2px solid #fff;
    position: absolute;
    top: 5%;
    left: 50%;
    width: 400px;
    height: 400px;
    background-image: url('../../assets/me.jpg');    
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;     
  }
</style>