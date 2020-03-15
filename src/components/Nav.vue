<template>
  <nav>
    <div class="LeFt">
      <div class="ImgL"></div>  
    </div>
    <div class="RiGht">
      <div class="ImgR"></div>
    </div>  
  </nav>    
</template>

<style scoped>
  nav {
    background-color: #fff;
    width: 100%;
    height: 150px;
    position: relative;
  }
  .LeFt {
    float: left;
  }
  .RiGht {
    float: right;
  }
  .ImgL {
    position: absolute;
    top: 35%;
    left: 5%;
    background-image: url('../assets/CoffeeCup.png');
    height: 50px;
    width: 50px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .ImgR {
    position: absolute;
    top: 35%;
    right: 5%;
    background-image: url('../assets/Code.png');
    height: 70px;
    width: 70px;
    background-size: cover;
    background-repeat: no-repeat;    
  }
</style>