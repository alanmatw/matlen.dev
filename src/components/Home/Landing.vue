<template>
  <div class = "Main">
    <div class="Base">
      <!--<div class="Mtag"><p>:<span id="Mt">\</span><span id="At">></span><span id="Mt">_</span>Hey there</p></div>-->
      <div class="Top">
        <div class="Mtag"><p>_Hey the<span id="ReD">re</span></p></div>
      </div>

      <div class="Stag"><p>I'<span id="ReD">m </span><span id="Lname">Alan Mathew</span>_</p></div> 
      <div id="Cd">WEB DEVELOPER_</div>
      <div class="Img"></div>
      <!--<div class="lifeMotto">
        <div class="HeartL"></div>
        <div class="Btm"><p>LifeMotto() { while ( ! ( succeed = try() ) ); }</p></div>
        <div class="HeartR"></div>
      </div>-->
      
      <!--<div class="Btm"><p>bE HapPpY :)</p></div>-->
    </div>
  </div>       
</template>

<script>
export default {
    
}
</script>

<style scoped>
  .Base {
    box-sizing: border-box;
    background-color: #000;
    width: 100%;
    height: 79vh;
  }
  .Top {
    display: flex;
  }
  .Mtag {
    color: #fff;
    font-family: 'FiraCode-Light';
    font-size: 50px;
    margin-top: 150px;
    margin-left: 265px;
    
  }
  #ReD {
    color: red;
  }
  .Img {
    margin-top: 200px;
    margin-left: 50px;
    background-image: url('../../assets/star1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;  
  }
  #Mt {
    margin-left: -30px;;
  }
  #At {
    margin-left: -10x;;
  }
  .Stag {
    color: #fff;
    font-size: 50px;
    font-family: 'FiraCode-Regular';
    margin-top: -25px;
    margin-left: 350px;
  }
  #Lname {
    font-size: 100px;
    color: #fff;
  }
  #Cd {
    margin-left: 650px;
    font-family: 'FiraCode-Regular';
    margin-top: -25px;
    font-size: 20px;
    color: red;
  }
  .lifeMotto {
    display: flex;
  }
  .Btm {
    font-family: 'FiraCode-Regular';
    font-size: 20px;
    margin-top: 100px;
    margin-left: 300px;
    color: #fff;
  }
  .HeartL {
    background-image: url('../../assets/heart.jpg');
    width: 50px;
    height: 50px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    left: 300px;
    top: 80px;  
  }
  .HeartR {
    background-image: url('../../assets/heart.jpg');
    width: 50px;
    height: 50px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: 80px;  
  }  
</style>