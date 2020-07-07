<template>
  <div class="b-wrapper">
    <div class="b-grid">
      <div class="left-nav">
        
      </div>
      <div class="right-body">
        <router-view>
          
        </router-view>
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
</style>


      <div class="sidenav">
        <div class="sidenav-mid">

          <div class="sidenav-mid-one">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="wr-1">
                <div class="sidenav-mid-img1"></div>
                <p>Bookings</p>
              </div>
            </router-link>
          </div>
          <div class="sidenav-mid-two">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="wr-1">
                <div class="sidenav-mid-img2"></div>
                <p>Order History</p>
              </div>
            </router-link>
          </div>
          <div class="sidenav-mid-three">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="wr-1">
                <div class="sidenav-mid-img3"></div>
                <p>Favorites</p>
              </div>
            </router-link>
          </div>      
          <div class="sidenav-mid-four">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="wr-1">
                <div class="sidenav-mid-img4"></div>
                <p>My Profile</p>
              </div>
            </router-link>
          </div>   
          <div class="sidenav-mid-five">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="wr-1">
                <div class="sidenav-mid-img5"></div>
                <p>Notifications</p>
              </div>
            </router-link>
          </div>                                 
        
        </div>
      </div>