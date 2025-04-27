<script setup>
import { ref,onMounted } from 'vue';
const isDropdownVisible = ref(false);

// 切換下拉選單顯示狀態
const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
  console.log('Dropdown visible:', isDropdownVisible.value);
};

// 關閉下拉選單
const closeDropdown = () => {
  isDropdownVisible.value = false;
};

</script>

<template>
  <div class="test_web-container">
    <!-- Banner -->
    <header class="banner">
      <h1>My Simple Website</h1>
    </header>

    <!-- Navigation Bar -->
    <nav class="navbar_banner">
      <!-- 左側摺疊選單 -->
      <div class="dropdown left-dropdown">
        <button class="dropdown-button"  @click="toggleDropdown">
          <!-- 三條線圖示 -->
          <span class="menu-icon"></span>
          <span class="menu-icon"></span>
          <span class="menu-icon"></span>
        </button>

        <!-- 遮罩 -->
        <div
          v-if="isDropdownVisible"
          class="dropdown-overlay"
          @click="closeDropdown"
        ></div>

        <!-- 下拉選單 -->
        <div
          class="dropdown-menu_test"
          :class="{ 'dropdown-menu_test-visible': isDropdownVisible }"
        >
          <button class="close-button" @click="closeDropdown">×</button>
          <router-link to="/content">內容</router-link>
          <router-link to="/other">其他</router-link>
          <router-link to="/products">商品</router-link>
        </div>
      </div>


      <div class="d-flex">
        <router-link to="/">首頁</router-link>
        <router-link to="/content">內容</router-link>
        <router-link to="/other">其他</router-link>
        <router-link to="/products">商品</router-link>
      </div>

    </nav>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
/* 全域樣式 */
html, body {
  margin: 0; 
  padding: 0;
  overflow-x: hidden; /* 隱藏水平滾動條 */
}

* {
  box-sizing: border-box; /* 確保 padding 和 border 不影響元素大小 */
}

/* App Container Styles */
.test_web-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #001f3f;
  color: white;
  margin: 0;
  width: 100%;
  overflow-x: hidden;
}

.banner {
  background-color: #42b983;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%; /* 改為 100% */
  box-sizing: border-box; /* 確保 padding 不影響寬度 */
}

/* Navigation Bar Styles */
.navbar_banner {
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;
  padding: 10px;
  width: 100%;
}

.navbar_banner a {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none; /* 去掉下劃線 */
}

.navbar_banner a:hover {
  background-color: #369b73;
}

/* Main Content Styles */
main {
  padding: 20px;
  text-align: center;
}

.detial-item .el-form-item__label {
  color: #42b983;
  font-size: 18px; /* 調整字體大小 */
  display: block;
  width: auto !important;
}

.el-form-item__content{
  margin-left: 0 !important;
  display: block;
  justify-content: center;
}

.checkbox-item {
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
}

.checkbox-item a {
  color: #fff;
  font-size: 12px;
}

/* 左側摺疊選單樣式 */
.left-dropdown {
  position: relative;
}

.dropdown-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.menu-icon {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #42b983;
  margin: 5px 0;
}

/* 下拉選單初始樣式 */
.dropdown-menu_test {
  position: fixed;
  top: 0;
  left: -200px; /* 隱藏在左側 */
  width: 200px;
  height: 100%;
  background-color: #f4f4f4;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: left 0.3s ease; /* 滑動動畫 */
  z-index: 1001;
  padding: 10px;
}

.dropdown-menu_test-visible {
  left: 0; /* 滾出到左側 */
}

.dropdown-menu_test a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-menu_test a:hover {
  background-color: #ddd;
}

/* 關閉按鈕樣式 */
.close-button {
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: end;
  /* position: absolute;
  top: 10px;
  right: 10px; */
}

/* 遮罩樣式 */
.dropdown-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75); /* 75% 黑色透明 */
  z-index: 1000;
}
</style>