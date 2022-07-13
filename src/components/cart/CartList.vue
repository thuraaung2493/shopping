<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <p v-if="!cartItems.length" class="cart-empty-text has-text-centered">
      Add some items to the cart!
    </p>
    <ul>
      <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
        <CartListItem :cartItem="cartItem" />
      </li>
      <div class="notification is-success">
        <p>
          Total Quantity:
          <span class="has-text-weight-bold">{{ cartQuantity }}</span>
        </p>
      </div>
      <br>
    </ul>
    <div class="buttons">
      <button :disabled="!cartItems.length" @click="checkoutItem" class="button is-info">
        Checkout (<span class="has-text-weight-bold">${{ cartTotal }}</span>)
      </button>

      <button class="button is-danger is-outlined" @click="removeAllCartItems">
        <span>Delete All items</span>
        <span class="icon is-small">
          <i class="fas fa-times"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import CartListItem from '@/components/cart/CartListItem.vue';
import router from '@/router';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const cartItems = computed(() => store.getters.cartItems);
const cartTotal = computed(() => store.getters.cartTotal);
const cartQuantity = computed(() => store.getters.cartQuantity);

function removeAllCartItems() {
  store.dispatch('removeAllCartItems');
}

function checkoutItem() {
  store.dispatch('checkoutItem', {
    cartTotal: cartTotal.value,
    cartQuantity: cartQuantity.value
  });
  router.push('/');
}
</script>