<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import HeroCarousel from "@/components/home/HeroCarousel.vue";
import Learning from "@/components/home/LearnHabbit.vue";
import Project from "@/components/home/Project.vue";
import MessageBoard from "@/components/commen/MessageBoard.vue";
import Article from "../components/home/article.vue";

const isVisible = ref({
  hero: false,
  learning: false,
  project: false,
  messageboard: false,
  article: false,
});

const handleScroll = () => {
  const windowHeight = window.innerHeight;

  // 通用的检测函数
  const checkVisibility = (id) => {
    const element = document.getElementById(id);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return rect.top < windowHeight * 0.85 && rect.bottom > 0;

  };

  isVisible.value.hero = checkVisibility("hero");
  isVisible.value.learning = checkVisibility("learning");
  isVisible.value.project = checkVisibility("project");
  isVisible.value.messageboard = checkVisibility("messageboard");
  isVisible.value.article = checkVisibility("article");
};

// 监听滚动
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 初始检查
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div>
    <!-- Hero -->
    <div
      id="hero"
      class="container"
      :class="{ visible: isVisible.hero }"
    >
      <HeroCarousel />
    </div>

    <!-- Learning -->
    <div
      id="learning"
      class="container"
      :class="{ visible: isVisible.learning }"
    >
      <Learning />
    </div>

    <!-- Project -->
    <div
      id="project"
      class="container"
      :class="{ visible: isVisible.project }"
    >
      <Project />
    </div>
    
    <div
      id="article"
      class="container"
      :class="{ visible: isVisible.article }"
    >
      <Article />
    </div>

    <!-- MessageBoard -->
    <div
      id="messageboard"
      class="container"
      :class="{ visible: isVisible.messageboard }"
    >
      <MessageBoard />
    </div>

  </div>
</template>

<style scoped>
/* ============================
   悬浮感 + 滚动淡入效果
   ============================ */
.container {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out, box-shadow 0.8s ease;

  opacity: 0;  /* 初始完全透明 */
  transform: translateY(50px); /* 初始位置稍微向下 */
  
}

/* 鼠标悬停时增加悬浮感 */
.container:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
}

/* 组件进入视野时，透明度增加，滑动到正常位置 */
.visible {
  opacity: 1;
  transform: translateY(0);
}

#messageboard {
  display: flex;
  justify-content: center;
}
</style>
