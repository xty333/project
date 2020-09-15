import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home/Home.vue"
import Index from "../views/home/index/Index.vue"
import Classify from "../views/home/classify/Classify.vue"
import Cart from "../views/home/cart/Cart.vue"
import My from "../views/home/my/My.vue"
import Hairdressing from "../views/home/classify/hairdressing/Hairdressing.vue"
import Milkpowder from "../views/home/classify/milkpowder/Milkpowder.vue"
import Infant from "../views/home/classify/infant/Infant.vue"
import Health from "../views/home/classify/health/Health.vue"
import Numerical from "../views/home/classify/numerical/Numerical.vue"
import Individual from "../views/home/classify/individual/Indivdual.vue"
import Entrylux from "../views/home/classify/entrylux/Entrylux.vue"
import Apparel from "../views/home/classify/apparel/Appare.vue"
import Sport from "../views/home/classify/sport/Sport.vue"
import Watch from '../views/home/classify/watch/Watch.vue'
import Family from "../views/home/classify/family/Family.vue"
import Food from "../views/home/classify/food/Food.vue"
import Factory from "../views/home/classify/factory/Factory.vue"
import Overseas from "../views/home/classify/overseas/Overseas.vue"
import Strict from "../views/home/classify/strict/Strict.vue"
import Super from "../views/home/classify/super/Super.vue"
import Fresh from "../views/home/classify/fresh/Fresh.vue"
import Voucher from "../views/home/classify/voucher/Voucher.vue"
import Pet from "../views/home/classify/pet/Pet.vue"
import Details from "../views/details/Details.vue"
import Open from "../views/open/Open.vue"
import Arcade from "../views/arcade/Arcade.vue"
import Carttwo from "../views/carttwo/Carttwo.vue"
import Service from "../views/service/Service.vue"

Vue.use(VueRouter)

  const routes = [
     {
       path:"/",
       redirect:"/home/index"
     },
      {
        path:"/arcade",
        component:Arcade
      },
      {
        path:"/carttwo",
        component:Carttwo
      },
      {
        path:"/service",
        component:Service
      },
     {
       path:"/details",
       component:Details,
     },
     {
      path:"/open",
      component:Open,
    },
     {
       path:"/home",
       component:Home,
       children:[
         {
           path:"/home/index",
           component:Index
         },
         {
          path:"/home/classify",
          component:Classify,
          redirect:'/home/classify/hairdressing/Hairdressing',
          children:[
            {
              path:"/home/classify/hairdressing/Hairdressing",
              component:Hairdressing,
            },
            {
              path:"/home/classify/milkpowder/Milkpowder",
              component:Milkpowder,
            },
            {
              path:"/home/classify/infant/Infant",
              component:Infant,
            },
            {
              path:"/home/classify/health/Health",
              component:Health,
            },
            {
              path:"/home/classify/numerical/Numerical",
              component:Numerical,
            },
            {
              path:"/home/classify/individual/Individual",
              component:Individual,
            },
            {
              path:"/home/classify/entrylux/Entrylux",
              component:Entrylux,
            },
            {
              path:"/home/classify/apparel/Apparel",
              component:Apparel,
            },
            {
              path:"/home/classify/watch/Watch",
              component:Watch,
            },
            {
              path:"/home/classify/family/Family",
              component:Family,
            },
            {
              path:"/home/classify/food/Food",
              component:Food,
            },
            {
              path:"/home/classify/factory/Factory",
              component:Factory,
            },
            {
              path:"/home/classify/sport/Sport",
              component:Sport,
            },
            {
              path:"/home/classify/overseas/Overseas",
              component:Overseas,
            },
            {
              path:"/home/classify/strict/Strict",
              component:Strict,
            },
            {
              path:"/home/classify/super/Super",
              component:Super,
            },
            {
              path:"/home/classify/fresh/Fresh",
              component:Fresh,
            },
            {
              path:"/home/classify/voucher/Voucher",
              component:Voucher,
            },
            {
              path:"/home/classify/pet/Pet",
              component:Pet,
            }
     
          ]
         },
         {
          path:"/home/cart",
          component:Cart
         },
         {
          path:"/home/my",
          component:My
         },
       ] 
     }
]

const router = new VueRouter({
  routes
})

export default router
