<template>
  <div class = "Main">
    <div class="Base">
      <h1><span id="Lpath">matlen:\></span>Hey there,</h1>
      <h2>I'm <span id="Lname">ALAN MATHEW</span>, loves to code, Vue.js and Node.js</h2>
      <h2>Watch a lot of movies, favorite one is 'The Dark Knight'</h2>
      <h2>Coffee is a weakness</h2>
      <h2>A sip of coffee, rain outside and coding - a perfect combo!</h2>      
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
    background-color: #1e2022;
    width: 100%;
    height: 79vh;
    padding: 50px;
  }
  h1 {
    color: #c9d6df;
    font-family: 'FiraCode-Light';
    font-size: 50px;
    padding-bottom: 40px;
  }
  h2 {
    color: #fff;
    padding-top: 0px;
    font-size: 25px;
    font-family: 'FiraCode-Regular';
  }
  #Lname {
    font-size: 40px;
    color: #52616b;
  }
  #Lpath {
    font-size: 35px;
    color: #000;
  }
</style>