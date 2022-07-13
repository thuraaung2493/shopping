import { createRouter, createWebHashHistory } from 'vue-router';
import CartList from '@/components/cart/CartList.vue';
import ProductList from '@/components/product/ProductList.vue';
import NewProduct from '@/components/product/NewProduct.vue';

const routes = [
  {
    path: '/',
    name: 'products',
    component: ProductList,
  },
  {
    path: '/carts',
    name: 'carts',
    component: CartList,
  },
  {
    path: '/add-product',
    name: 'add-product',
    component: NewProduct,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
