<script setup>
import { ref, onMounted } from 'vue'

const users = ref([])

onMounted(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  users.value = await res.json()
})
</script>

<template>
  <div class="content">
    <h2>內容頁面</h2>
    <p>這是內容頁面的內容。</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<style scoped>
  /* Navigation content Styles */
.content {
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.content ul {
  list-style-type: none;
  padding: 0;
}
.content li {
  background-color: #f4f4f4;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
}
.content li:hover {
  background-color: #e0e0e0;
}
</style>