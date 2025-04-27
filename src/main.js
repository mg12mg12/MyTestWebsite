// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 引入 Bootstrap 的 CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// 引入 Bootstrap 的 JS（可選）
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App).use(router).mount('#test_web');
createApp(App).use(ElementPlus);