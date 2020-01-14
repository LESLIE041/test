import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout.vue'
import Welcome from '../pages/Welcome.vue'
import Location from '../pages/Location.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: Layout,
      redirect: { name: 'Welcome' },
      children: [
        { path: 'Welcome', component: Welcome, name: 'Welcome' },
        { path: 'location', component: Location }]
    }
  ]
})
