<template>
   <app-header></app-header>

   <loader v-if="isLoading"></loader>

   <div class="row">
      <h1 class="title">Все товары</h1>
		<select>
			<option value="">По цене (сначала дешевые)</option>
			<option value="">По цене (сначала дорогие)</option>
			<option value="">По названию (А-Я)</option>
		</select>
   </div>

   <div class="product-list">
      <product-card
         v-for="card in products"
         :key="card.id"
         :title="card.title"
         :price="card.price"
         :descr="card.description"
         :category="card.category"
         :img="card.image"
         :rating="card.rating"
      ></product-card>
   </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import getProducts from "../services/get-products";

import ProductCard from "./ProductCard.vue";
import Loader from "./Loader.vue";
import AppHeader from "./AppHeader.vue";

const products = ref(null);
const isLoading = ref(false);

onBeforeMount(async () => {
   isLoading.value = true;
   products.value = await getProducts();
   isLoading.value = false;
});
</script>