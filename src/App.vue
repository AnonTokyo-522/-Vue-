<template>
  <div id="app">
    <!-- 加载组件 -->
    <LoadingScreen v-if="showLoading" />
    <!-- 主内容：当加载组件隐藏后显示 -->
    <router-view v-else />

    <!-- 全局导航栏 -->
    <NavBar />

    <!-- 底部栏 -->
    <BottomColumn />
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';  
import { ref, onMounted } from "vue";
import LoadingScreen from "./components/commen/LoadingScreen.vue";
import NavBar from './components/commen/NavBar.vue'
import BottomColumn from './components/commen/BottomColumn.vue';

// 获取当前路由对象
const route = useRoute();

// 监听路由变化，切换路由时滚动到顶部
watch(route, () => {
  window.scrollTo(0, 0); // 滚动到页面顶部
});

const showLoading = ref(true);

onMounted(() => {
  // 页面加载后3秒隐藏加载组件
  setTimeout(() => {
    showLoading.value = false;
  }, 2000);
});

</script>

<style>
/* 全局样式 */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 让整个页面至少占满视口高度 */
  background-color: aliceblue;
}

router-view {
  flex: 1; /* 让内容部分自动填充剩余空间 */
}
</style>
