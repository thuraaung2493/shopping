<template>
  <div class="container is-fluid">
    <div class="tile is-ancestor">
      <table class="table" style="width: 100%;">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>
              <router-link to="/add-product" class="button is-info">
                <strong>Add Product</strong>
              </router-link>
            </th>
          </tr>
        </thead>
        <template v-if="productItems.length > 0">
          <tbody v-for="(productItem, index) in productItems" :key="productItem.id">
            <ProductListItem :productItem="productItem" :index="index" />
          </tbody>
        </template>
        <tbody v-else>
          <tr>
            <td colspan="5" style="text-align: center;">Loading...</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import ProductListItem from '@/components/product/ProductListItem.vue';
import { computed, onMounted } from 'vue';

const store = useStore();

const productItems = computed(() => store.getters.productItems);

onMounted(() => {
  store.dispatch('getProductItems');
});
</script>