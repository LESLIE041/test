import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Location from '../components/location/Location.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home',
      component: Home,
      redirect: '/Welcome',
      children: [
        { path: '/Welcome', component: Welcome },
        { path: '/location', component: Location }] }
  ]
})
