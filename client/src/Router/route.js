/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import base from '../components/Base/base.vue'
import home from '../components/Home/home.vue'
import about from '../components/About/about.vue'
import contactme from '../components/ContactMe/contactme.vue'
import myworks from '../components/MyWorks/myworks.vue'
import skills from '../components/Home/skills.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      component: base 
    },
    { 
      path: '/home', 
      component: home,    
    },          
    {
      path: '/about',
      component: about
    },
    {
      path: '/skills',
      component: skills
    },
    {
      path: '/myworks',
      component: myworks
    },
    {
      path: '/contactme', 
      component: contactme
    },        
  ]
})