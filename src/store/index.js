import { createStore } from 'vuex';
import product from '@/store/modules/product';
import cart from '@/store/modules/cart';

export default createStore({
  modules: {
    product,
    cart,
  },
});
