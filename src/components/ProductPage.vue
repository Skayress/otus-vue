<template>
	<div class="product-list">
		<product-card
			v-for="card in products"
			:key="card.id"
			:title="card.title"
			:price="card.price"
			:descr="card.description"
			:category="card.category"
			:img="card.image"
			:rate="card.rating.rate"
			:count="card.rating.count"
		></product-card>
	</div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import ProductCard from './ProductCard.vue';

const products = ref(null)

onBeforeMount(async () => {
	try {
		const URL = 'https://fakestoreapi.com/products'
		const response = await fetch(URL)
		if (response.ok) {
			products.value = await response.json()
			console.log(products.value);
		}
	} catch (e) {
		console.log("Ошибка запроса", e);
	}
}) 
</script>