<template>
  <div class="box mb-3">
    <div class="cart-item__details">
      <p class="is-inline">{{ props.cartItem.name }}</p>
      <div class="is-flex is-justify-content-space-between">
        <span class="cart-item--price has-text-info has-text-weight-bold">
          ${{ props.cartItem.price }} X {{ props.cartItem.quantity }}
        </span>

        <span>
          <button class="button mr-3" @click="addCartItem(props.cartItem)">+</button>
          <button class="button" @click="removeCartItem(props.cartItem)">-</button>
        </span>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
// eslint-disable-next-line no-undef
const props = defineProps(['cartItem']);

function addCartItem(cartItem) {
  store.dispatch('addCartItem', cartItem);
}

function removeCartItem(cartItem) {
  store.dispatch('removeCartItem', cartItem);
}
</script>