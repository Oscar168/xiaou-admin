import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/Home/Home"
import Index from "@/pages/Home/Index"
import Cart from "@/pages/Home/Cart"
import My from "@/pages/Home/My"
import Category from "@/pages/Category/Category"
import Detail from "@/pages/Detail/Detail"
import Login from "@/pages/Login/Login"
import Register from "@/pages/Register/Register"
import BO from "@/pages/Backoffice/BO"


Vue.use(Router)

let router=new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {
      path:"/home",
      component:Home,
      children:[
        {path:"/home",redirect:"/home/index"},
        {
          path:"index",
          component:Index
        },
        {
          path:"cart",
          component:Cart,
          meta:{
            auto:true
          }
        },
        {
          path:"my",
          component:My,
          meta:{
            auto:true
          }
        }
      ]
    },
    {
      path:"/category",
      component:Category
    },
    {
      path:"/detail",
      component:Detail
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:"/register",
      component:Register
    },
    {
      path:"/bo",
      component:BO
    }
  ]
})
// 全局路由守卫购物车和我的
router.beforeEach((to,from,next)=>{
  // 多个路由守卫：if(to.meta.auto)
  if(to.meta.auto){
    if(!localStorage.getItem("uname")){
      setTimeout(()=>{
        next("/login")
      },2000)
    }else{
      next()
    }
  }
  else{
    next()
  }
})
export default router
