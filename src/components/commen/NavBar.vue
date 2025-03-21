<template>
    <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
        <!-- 左侧：站内导航 -->
        <div class="navbar-left">
            <router-link to="/" class="nav-link" :class="{'navlink-scrolled':isScrolled}">主页</router-link>
            <router-link to="/Favorite" class="nav-link" :class="{'navlink-scrolled':isScrolled}">年度最佳</router-link>
            <router-link to="/Share" class="nav-link" :class="{'navlink-scrolled':isScrolled}">分享</router-link>
        </div>
        <!-- 右侧：外部链接 -->
        <div class="navbar-right">
            <a href="https://space.bilibili.com/358565398?spm_id_from=333.1007.0.0" target="_blank" class="nav-link" :class="{'navlink-scrolled':isScrolled}">
                <i class="fab fa-bilibili"></i> 
            </a>

            <a href="https://github.com/AnonTokyo-522" target="_blank" class="nav-link" :class="{'navlink-scrolled':isScrolled}">
                <i class="fab fa-github"></i> 
            </a>

            <a href="https://leetcode.cn/u/quirky-villanivbb/" target="_blank" class="nav-link" :class="{'navlink-scrolled':isScrolled}">
                <i class="fas fa-code"></i> 
            </a>
        </div>
    </nav>
</template>
  


<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    // 绑定一个响应式变量
    const isScrolled = ref(false);

    // 监听滚动事件
    const handleScroll = () => {
    if (window.scrollY > 0) {
        isScrolled.value = true;
    } else {
        isScrolled.value = false;
    }
    };

    // 组件挂载时添加事件监听，销毁时移除
    onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    });
</script>
  


<style scoped>
/* 导航栏基础样式 */
.navbar {
    z-index: 1000;
    position: fixed;    
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 10px 15px;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    justify-content: space-between;
}

.navbar-right .nav-link i {
    font-size: 24px; 
}

/* 导航链接的基础样式 */
.nav-link {
    color: #fff;                 
    margin-right: 20px;          
    text-decoration: none;       
    font-size: 20px;
    font:bold;
}

/* 页面移动后导航栏变化 */
.navbar-scrolled {
    background-color: rgb(255, 255, 255);
}
.navlink-scrolled {
    color: black;
}
/* 鼠标悬停时的样式变化 */
.nav-link:hover {
    color:rgb(249, 145, 32);
}
</style>
  