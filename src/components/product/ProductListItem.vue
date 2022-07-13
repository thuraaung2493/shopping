<template>
  <tr>
    <td>{{ props.index + 1 }}</td>
    <td>{{ props.productItem.name }}</td>
    <td class="text-capitalize">{{ props.productItem.category }}</td>
    <td>$ {{ props.productItem.price }}</td>
    <td>
      <button class="button is-primary" @click="addCartItem(productItem)">Add to Cart</button>
    </td>
  </tr>
</template>

<script setup>
import { useStore } from 'vuex';

// eslint-disable-next-line no-undef
const props = defineProps(['index', 'productItem']);
const store = useStore();

function addCartItem(productItem) {
  store.dispatch('addCartItem', productItem);
}
</script>

<style>
.text-capitalize {
  text-transform: capitalize;
}
</style>