<template>
  <div class="container box p-6
  has-background-light">
    <h1 class="title has-text-centered
               has-text-success">
      Add New Product
    </h1>
    <form @submit.prevent="addProduct">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" v-model="name" type="text" placeholder="Enter product name" />
        </div>
      </div>
      <div class="field">
        <label class="label">Category</label>
        <div class="control">
          <input class="input" v-model="category" type="text" placeholder="Enter product category" />
        </div>
      </div>
      <div class="field">
        <label class="label">Price</label>
        <div class="control">
          <input class="input" v-model="price" type="number" min="0" />
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input class="input" v-model="description" type="text" placeholder="Descriptions" />
        </div>
      </div>
      <div class="field">
        <label class="label">Date</label>
        <div class="control">
          <input class="input" v-model="date" type="date" />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-success">
            Add
          </button>
        </div>
        <div class="control">
          <button class="button is-link is-light">
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { format } from 'date-fns'
import { useStore } from 'vuex';
import router from '@/router';

const store = useStore();
const name = ref('');
const category = ref('');
const price = ref(0);
const description = ref('');
const date = ref(format(new Date(), 'yyyy-MM-dd'));

function addProduct() {
  store.dispatch('addProduct', {
    name: name.value,
    category: category.value,
    price: price.value,
    description: description.value,
    date: date.value,
  })
  router.push('/');
}
</script>
