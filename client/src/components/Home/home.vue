<template>
  <div class="Wrapper">
    <div class="home-content">
      <div class="hc-hello"></div>
      <div class="hc-next">
        <p>I'am Alan Mathew,</p>   
        <p>Web Developer.</p>             
      </div>    
      <div class="hc-skill">
          <p>MEVN Stack Dev | Cloud Enthusiasist</p>
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
  .home-content {
    margin-left: 10%;
    margin-top: 12%;
  }
  .hc-hello {
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
  .hc-next {
    margin-top: 5px;
    font-size: 25px;
    font-family: FiraCode-Medium;    
  }
  .hc-next p {
    margin-bottom: 5px;
  }    
  .hc-skill {
    margin-top: 25px;
    font-size: 23px;
    font-family: FiraCode-Medium;
  } 
  /*.me {
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
  }*/
</style>