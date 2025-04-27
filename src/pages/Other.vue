<script setup>
import { ref } from 'vue';
import 'element-plus/dist/index.css';
import Swal from 'sweetalert2';

// 控制彈窗顯示的狀態
const showModal = ref(false);
// 控制 radio 是否被選中的狀態
const isRadioChecked = ref(false);

// 新增按鈕事件
// const handleNewButtonClick = () => {
//   alert('新增的按鈕被點擊了！');
// };

// 表單數據
const formData = ref({
  name: '',
  email: '',
});

// 表單驗證規則
const rules = {
  name: [
    { required: true, message: '請輸入姓名', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '請輸入郵箱', trigger: 'blur' },
    { type: 'email', message: '請輸入有效的郵箱地址', trigger: 'blur' },
  ],
};

// 提交表單
const handleSubmit = () => {
  console.log('表單數據:', formData.value);
  alert('表單提交成功！');
};

const handleConfirm = () => {
  handleNewButtonClick();
  showModal.value = false;
};

const details = ref([
    { title: '姓名', prop: 'name', placeholder: '請輸入姓名' },
    { title: '郵箱', prop: 'email', placeholder: '請輸入郵箱' },
]);

</script>

<template>
    <div class="test-other">
      <h2>表單</h2>
      <!-- 表單 -->
      <el-form :model="formData" :rules="rules" ref="formRef" label-width="100px">
        <div v-for="(detail, key) in details" :key="key">
          <el-form-item :label="detail.title" :prop="detail.name" class="detial-item" >
            <el-input v-model="formData.name" :placeholder="detail.placeholder"></el-input>
          </el-form-item>
        </div>

        <div class="checkbox-item">
          <a @click="() => { showModal = true; console.log('showModal:', showModal); }">同意視窗</a>
        </div>

        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </el-form-item>
      </el-form>   

        <!-- 彈窗 -->
        <div v-if="showModal" class="modal-overlay">
          <div class="test-modal">
              <h3>彈窗標題</h3>
              <p>這是彈窗的內容。</p>
              <!-- 新增的 Radio -->
              <div>
                <label>
                  <input type="radio" v-model="isRadioChecked" />
                      確認radio
                </label>
              </div>

              <button 
                @click="() => {
                  if (isRadioChecked) {
                    showModal = false; // 關閉彈窗
                  } else {
                    Swal.fire({
                      icon: 'warning',
                      title: '提示',
                      text: '請先同意條款！',
                      confirmButtonText: '確定'
                    });
                  }
                }"
              >
                確認並關閉
              </button>
          </div>
        </div>
    </div>
  </template>
  
  <style scoped>
  /* 彈窗背景遮罩 */
.test-other {
  background-color: #527699;
  border: #527699;
  color: white;
  padding: 10px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 彈窗樣式 */
.test-modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #000;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369b73;
}

h2 {
    color: #42b983;
  }

</style>