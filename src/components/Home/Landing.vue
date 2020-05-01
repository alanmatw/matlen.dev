<template>
  <div class = "Main">
    <div class="Base">
      <!--<div class="Mtag"><p>:<span id="Mt">\</span><span id="At">></span><span id="Mt">_</span>Hey there</p></div>-->
      <div class="Top">
        <div class="Mtag"><p>_Hey there</p></div>
        <div class="Img"></div>
      </div>

      <div class="Stag"><p>I'm <span id="Lname">Alan Mathew</span> and I love <span id="Cd">CODING_</span></p></div>
      <div class="lifeMotto">
        <div class="HeartL"></div>
        <div class="Btm"><p>LifeMotto() { while ( ! ( succeed = try() ) ); }</p></div>
        <div class="HeartR"></div>
      </div>
      
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
    padding-top: 10px;
    padding-left: 80px;
  }
  .Top {
    display: flex;
  }
  .Mtag {
    color: #fff;
    font-family: 'FiraCode-Light';
    font-size: 100px;
    margin-top: 100px;
    margin-left: 50px;
    
  }
  .Img {
    background-image: url('../../assets/lql.png');
    width: 80px;
    height: 80px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-left: 20px;
    top: 160px;    
  }
  #Mt {
    margin-left: -30px;;
  }
  #At {
    margin-left: -10x;;
  }
  .Stag {
    color: #fff;
    font-size: 25px;
    font-family: 'FiraCode-Regular';
    margin-top: -40px;
    margin-left: 200px;
  }
  #Lname {
    font-size: 50px;
    color: #fff;
  }
  #Cd {
    margin-top: -5px;
    font-size: 120px;
    color: #fff;
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