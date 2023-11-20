<template>
	<div class="product-card">
		<img
			:src="img"
			alt="Product image"
		>
		<h2>
			{{ title }}
		</h2>
		<p class="description">
			{{ descr }}
		</p>
		<p :class="['category', categoryProduct]">
			{{ category }}
		</p>
		<p class="price">
			${{ price }}
		</p>
		<div class="rating">
			<img src="./../assets/images/icon-star.png" alt="">
			<span>{{ rate }}</span>
		</div>
		<p class="quantity">In Stock: {{ count }}</p>
	</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['title', 'price', 'descr', 'category', 'img', 'rate', 'count'])

const categoryProduct = computed(() => {
	switch (props.category) {
		case "men's clothing": return 'men-cloth'
		case "women's clothing": return 'women-cloth'
		case 'jewelery': return 'jewelery'
		case 'electronics': return 'electronics'
	}
})
</script>