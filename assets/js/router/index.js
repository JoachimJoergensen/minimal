import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Basket from '../views/Basket.vue';
import ProductDetail from '../components/ProductDetail.vue';
import NotFound from '../components/NotFound.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductDetail,
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404'
    },
  ]
});