import Vue from 'vue'
import Router from 'vue-router'
import Login from "./components/tabbar/Login.vue"
import GoodList from "./components/home/GoodList.vue"
import NewsList from "./components/tabbar/NewsList.vue"
import Home from "./components/tabbar/Home.vue"
import ShopCart from "./components/tabbar/ShopCart.vue"
import Collect from "./components/tabbar/collect.vue"
import Msg_list from "./components/tabbar/msg_list.vue"
import My from "./components/tabbar/my.vue"
import Overseas from "./components/tabbar/overseas.vue"
import Bottom from "./components/tabbar/bottom.vue"
import Bottom1 from "./components/tabbar/bottom1.vue"
import Detail from "./components/tabbar/details.vue"
import DetailPic from "./components/tabbar/detail-pic.vue"
import Ex from "./components/home/ex.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Login,meta: { navShow: false}},
    {path:'/login',component:Login,meta: { navShow: false}},
    {path:'/goodlist',component:GoodList},
    {path:'/newsList',component:NewsList},
    {path:'/home',component:Home},
    {path:'/shopcart',component:ShopCart},
    {path:'/collect',component:Collect},
    {path:'/msg_list',component:Msg_list},
    {path:'/my',component:My},
    {path:'/overseas',component:Overseas},
    {path:'/bottom',component:Bottom},
    {path:'/bottom1',component:Bottom1},
    {path:'/details',component:Detail,meta: { navShow: false}},
    {path:'/detail-pic',component:DetailPic,meta: { navShow: false}},
    {path:'/ex',component:Ex},
  ]
})
