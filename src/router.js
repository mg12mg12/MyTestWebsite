import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ContentPage from './pages/ContentPage.vue'
import Other from './pages/Other.vue'; // 引入 Other 頁面
import Products from './pages/Products.vue'; // 引入 Other 頁面


const routes = [
  { path: '/', component: HomePage },
  { path: '/content', component: ContentPage },
  { path: '/other', name: 'Other', component: Other },
  { path: '/products', name: 'Products', component: Products }, // 新增的路由
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})