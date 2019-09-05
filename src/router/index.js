import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/index'
import getwhere from "../view/getwhere";
import justOne from "../view/justone";
import cartlist from "../view/cartlist";
import cartlist2 from "../view/cartlist2";
import cartlist3 from "../view/cartlist3";
import cartlist4 from "../view/cartlist4";
import detail from "../view/detail";
import shopcart from "../view/shopcart";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/where',
      name: 'getWhere',
      component: getwhere
    },
    {
      path: '/justOne',
      name: 'justOne',
      component: justOne
    },
    {
      path: '/cartList',
      name: 'cartList',
      component: cartlist
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/cartList2',
      name: 'cartList2',
      component: cartlist2
    },
    {
      path: '/cartList3',
      name: 'cartList3',
      component: cartlist3
    },
    {
      path: '/cartList4',
      name: 'cartList4',
      component: cartlist4
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: shopcart
    },
  ]
})
