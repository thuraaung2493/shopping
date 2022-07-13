import InvoiceApi from '@/api/invoice';

const state = {
  cartItems: [],
};

const mutations = {
  addCart(state, payload) {
    state.cartItems.push(payload);
  },
  incrementCount(state, id) {
    const cartItem = state.cartItems.find((i) => i.id === id);
    if (cartItem) cartItem.quantity++;
  },
  removeItem(state, item) {
    const cartItem = state.cartItems.find((i) => i.id === item.id);
    if (cartItem.quantity === 0) {
      state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
    } else {
      cartItem.quantity--;
    }
  },
  removeAllItem(state) {
    state.cartItems = [];
  },
};

const actions = {
  addCartItem({ state, commit }, cartItem) {
    const item = state.cartItems.find((i) => i.id === cartItem.id);

    if (!item) {
      commit('addCart', { ...cartItem, quantity: 1 });
    } else {
      commit('incrementCount', cartItem.id);
    }
  },

  checkoutItem({ state, commit }, payload) {
    const items = state.cartItems.map((item) => {
      return {
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      };
    });
    new InvoiceApi().create({
      items,
      totalAmount: payload.cartTotal,
      totalQuantity: payload.cartQuantity,
    });
    commit('removeAllItem');
  },

  removeCartItem({ commit }, cartItem) {
    commit('removeItem', cartItem);
  },

  removeAllCartItems({ commit }) {
    commit('removeAllItem');
  },
};

const getters = {
  cartItems: (state) => state.cartItems,
  cartTotal: (state) => {
    return state.cartItems
      .reduce((acc, cartItem) => {
        return cartItem.quantity * cartItem.price + acc;
      }, 0)
      .toFixed(2);
  },
  cartQuantity: (state) => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  },
};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};
export default cartModule;
