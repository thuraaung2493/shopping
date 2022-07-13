import ProductApi from '@/api/product';

const state = {
  productItems: [],
};

const mutations = {
  updateProduct(state, payload) {
    state.productItems = payload;
  },
};

const actions = {
  getProductItems({ commit }) {
    new ProductApi().all().then((data) => {
      commit('updateProduct', data);
    });
  },
  addProduct({ commit }, data) {
    console.log(data);
    new ProductApi().create(data).then((data) => {
      commit('updateProduct', data);
    });
  },
};

const getters = {
  productItems: (state) => state.productItems,
  productItemById: (state) => (id) => {
    return state.productItems.find((productItem) => productItem.id === id);
  },
};

const productModule = {
  state,
  mutations,
  actions,
  getters,
};

export default productModule;
