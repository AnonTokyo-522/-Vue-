<template>
    <div class="loading-screen">
      <div class="loading-content">
        <!-- 图标 + Loading文字 -->
        <div class="loading-row">
          <div class="spinner"></div>
          <span class="loading-text">Loading...</span>
        </div>
        <!-- 其他欢迎文字 -->
        <h1>我是格温，欢迎来到我的个人网站！</h1>

        <p>就读于天津，学习编程，有诸多爱好</p>
        <p>期待结识各位志趣相投的朋友们</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted } from 'vue'
  
  // 当加载界面显示时禁止滚动；隐藏时恢复滚动
  onMounted(() => {
    document.body.style.overflow = 'hidden'
  })
  
  onUnmounted(() => {
    document.body.style.overflow = 'auto'
  })
  </script>
  
  <style scoped>
  .loading-screen {
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    z-index: 9999;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
    margin: 0;
    padding: 0;
  }
  
  .loading-content {
    text-align: center; /* 让文字居中 */
  }
  
  /* 让图标与“Loading...”并排居中 */
  .loading-row {
    display: flex;
    align-items: center; /* 垂直对齐 */
    justify-content: center; /* 水平对齐 */
    margin-bottom: 20px; /* 与下方 h1 拉开一些距离 */
  }
  
  /* 加载图标 */
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #ccc;
    border-top-color: #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 10px; /* 图标与文字之间的间距 */
  }
  
  /* Loading文字 */
  .loading-text {
    font-size: 18px;
    color: #333;
  }
  
  /* 旋转动画 */
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  
  .loading-content p {
  margin: 5px 0; /* 或者 0, 看你想要多小 */
}
  </style>
  