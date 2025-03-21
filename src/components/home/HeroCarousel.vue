<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = [
  "/images/Hero1.jpg",
  "/images/Hero2.jpg",
  "/images/Hero3.jpg",
  "/images/Hero4.jpg",
  "/images/Hero5.jpg",
  "/images/Hero6.jpg",
  "/images/Hero7.jpg",
  "/images/Hero8.jpg",
  "/images/Hero9.jpg",
  "/images/Hero10.jpg",
  "/images/Hero11.jpg",
  "/images/Hero12.jpg",
  "/images/Hero13.jpg",
  "/images/Hero14.jpg",
  "/images/Hero15.jpg",
  "/images/Hero16.jpg",
  "/images/Hero17.jpg",
  "/images/Hero18.jpg",
  "/images/Hero19.jpg",
];

// 生成下标数组，然后打乱
const indices = [...Array(images.length).keys()];
indices.sort(() => Math.random() - 0.5);

// 使用打乱后的前4个下标作为初始值
const part1Index = ref(indices[0]);
const part2Index = ref(indices[1]);
const part3Index = ref(indices[2]);
const part4Index = ref(indices[3]);

const fade = ref(true);

let timer1, timer2, timer3, timer4;

// 记录每个部分已经选择的图片下标
const usedImages = ref([part1Index.value, part2Index.value, part3Index.value, part4Index.value]);

// 处理图片切换，确保每个展示框选择的图片都不重复
function updateImage(indexRef, fadeRef, partIndex) {
  fadeRef.value = false; // 先淡出

  setTimeout(() => {
    // availableImages 过滤条件中对比的是数字下标
    let availableIndices = indices.filter(idx => !usedImages.value.includes(idx));
    if (availableIndices.length > 0) {
      // 随机选择一个未使用的下标
      const randomIdx = availableIndices[Math.floor(Math.random() * availableIndices.length)];
      indexRef.value = randomIdx;
      // 更新已使用的图片下标
      usedImages.value[partIndex] = randomIdx;
    }
    fadeRef.value = true; // 再淡入
  }, 350);
}

onMounted(() => {
  timer1 = setInterval(() => updateImage(part1Index, fade, 0), 5000);
  timer2 = setInterval(() => updateImage(part2Index, fade, 1), 5000);
  timer3 = setInterval(() => updateImage(part3Index, fade, 2), 5000);
  timer4 = setInterval(() => updateImage(part4Index, fade, 3), 5000);
});

onUnmounted(() => {
  clearInterval(timer1);
  clearInterval(timer2);
  clearInterval(timer3);
  clearInterval(timer4);
});
</script>

<template>
  <div class="main-container">
    <div class="image-section">
      <img :src="images[part1Index]" :class="{ fade: fade }" alt="图片1" />
    </div>
    <div class="image-section">
      <img :src="images[part2Index]" :class="{ fade: fade }" alt="图片2" />
    </div>
    <div class="image-section">
      <img :src="images[part3Index]" :class="{ fade: fade }" alt="图片3" />
    </div>
    <div class="image-section">
      <img :src="images[part4Index]" :class="{ fade: fade }" alt="图片4" />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.image-section {
  flex: 1;
  overflow: hidden;
}

.image-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease;
}

.image-section img.fade {
  opacity: 1;
}
</style>
