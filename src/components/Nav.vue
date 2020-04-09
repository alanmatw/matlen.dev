<template>
  <div class="navbar">
    <div class="Wrapper">
      <div class="Img1"></div>
      <h2 id="H1">About.</h2>
      <div class="Img2"></div>
      <h2 id="H2">Projects.</h2>
      <div class="Img3"></div>
      <h2 id="H3">Contact.</h2>
    </div>
  </div>    
</template>
 
<style scoped>
  .navbar {
    background-color: #fff;
    width: 100%;
    height: 150px;
   
  }
  .Wrapper {
    display: flex;
    padding-left: 33%;
    padding-top: 45px;
  }
  .Wrapper h2 {
    padding-top: 21px;;
    font-size: 22px;
    font-family: 'FiraCode-Medium';
  }
  #H1 {
    color: #000;
  }
  #H2 {
    color: #000;
    margin-left: -20px;
  }
  #H3 {
    color: #000;
    margin-left: -20px;
  }
  .Img1 {
    background-image: url('../assets/CoffeeCup.png');
    height: 50px;
    width: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 0px;
  }
  .Img2 {
    background-image: url('../assets/Code.png');
    height: 100px;
    width: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -5px;
    margin-left: 50px;
  }
 .Img3 {
    background-image: url('../assets/contact2.png');
    height: 30px;
    width: 60px;
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 0px;
    margin-top: 17px;
    margin-left: 70px;
  }  
</style>