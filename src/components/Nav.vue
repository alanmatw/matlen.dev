<template>
  <nav>
    <div class="LeFt">
      <div class="Img"></div>  
    </div>
    <div class="RiGht">
      <a href="#"></a>
      <a href="#"></a>  
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
  .Img {
    position: absolute;
    top: 35%;
    left: 5%;
    background-image: url('../assets/CoffeeCup.png');
    height: 50px;
    width: 50px;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>