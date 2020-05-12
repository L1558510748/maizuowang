import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
import Info from '../views/Info.vue'
import User from '../views/User.vue'
import City from '../views/City.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)
  const routes = [
  {
     path:'/',
     redirect:"/film"  
  },
  {
    path:'/film',
    redirect:'/film/nowplaying'
  },
  {
    path: '/film/:type',  
    name: 'film',
    component: Film
  },
  {
    path: '/cinema', 
    name: 'cinema',
    component: Cinema
  },
  {
    path:"/info",
    component:Info,
    meta:{
      flag:true   
    }
  },
  {
    path:'/user',
    component:User
  },
  {
    path:"/city",
    component:City
  },
  {
    path:"/detail/:id",
    component:Detail
  },
  {
    path:"/login",
    component:Login
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
