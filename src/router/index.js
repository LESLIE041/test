import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout.vue'
import Welcome from '../pages/Welcome.vue'
import Location from '../pages/Location.vue'
import PersonalInformation from '../pages/PersonalInformation'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: Layout,
      redirect: { name: 'welcome' },
      children: [
        { path: 'welcome', component: Welcome, name: 'welcome' },
        { path: 'location', component: Location },
        { path: 'personalInformation', component: PersonalInformation, name: 'personalInformation' }
      ]
    }
  ]
})
