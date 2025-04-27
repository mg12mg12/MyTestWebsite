<script setup>
import { ref, onMounted } from 'vue';

const products = ref([]);

onMounted(async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  products.value = await res.json();
});
</script>

<template>
  <div class="products-page container">
    <h1 class="text-center my-4">商品列表</h1>
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card h-100">
          <img :src="product.image" class="card-img-top" :alt="product.title" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text text-truncate">{{ product.description }}</p>
            <p class="card-text"><strong>價格: ${{ product.price }}</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* 限制圖片高度，保持卡片整齊 */
.card-img-top {
  max-height: 150px;
  object-fit: contain;
}
</style>