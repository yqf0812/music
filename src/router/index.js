import Vue from 'vue'
import VueRouter from 'vue-router'
import MusicHall from '../views/MusicHall/MusicHall.vue'
import Recommend from '../views/Recommend/Recommend.vue'
import Mine from '../views/Mine/Mine.vue'
import PlayDetail from '../views/PlayDetail/PlayDetail.vue'

Vue.use(VueRouter)

  const routes = [
    { path: '*', redirect: '/musicHall', component: MusicHall },
    { path: '/musicHall', component: MusicHall },
    { path: '/recommend', component: Recommend },
    { path: '/mine', component: Mine },
    { path: '/playdetail', component: PlayDetail, name: 'playdetail' }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
