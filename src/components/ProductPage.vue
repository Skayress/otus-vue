<template>
	<loader v-if="isLoading"></loader>

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
import { ref, onBeforeMount } from 'vue';
import ProductCard from './ProductCard.vue';
import Loader from './Loader.vue';
import getProducts from '../services/get-products';

const products = ref(null)
const isLoading = ref(false)

onBeforeMount(async () => {
	isLoading.value = true
	products.value = await getProducts()
	isLoading.value = false
}) 
</script>