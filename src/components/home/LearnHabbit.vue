<template>
    <div class="skills-container">
      <!-- 技能卡片部分 -->
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="skill-card"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
      >
        <div class="skill-name">
          {{ skill.name }}
        </div>
        <!-- 进度条（鼠标悬停时才显示） -->
        <div v-if="hoveredSkill === index" class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: skill.weight + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- 兴趣爱好部分，复用技能卡片样式 -->
    <div class="skills-container">
      <div
        v-for="(interest, idx) in interests"
        :key="idx"
        class="skill-card"
        @mouseenter="handleMouseEnter(skills.length + idx)" 
        @mouseleave="handleMouseLeave"
      >
        <div class="skill-name">
          {{ interest.name }}
        </div>
        <div v-if="hoveredSkill === skills.length + idx" class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: interest.weight + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // 你的技能数据
  const skills = ref([
    { name: "C++", weight: 80 },
    { name: "Html+Css+JS", weight: 70 },
    { name: "Vue", weight: 60 },
    { name: "Java", weight: 50 },
    { name: "Python", weight: 35 },
  ]);
  
  // 你的兴趣爱好数据
  const interests = ref([
    { name: "Game", weight: 100 },
    { name: "Ride", weight: 80 },
    { name: "Animation", weight: 80 },
    { name: "Music", weight: 70 },
    { name: "Tea", weight: 70 },
  ]);
  
  // 鼠标悬停逻辑
  const hoveredSkill = ref(null);
  
  function handleMouseEnter(index) {
    hoveredSkill.value = index;
  }
  
  function handleMouseLeave() {
    hoveredSkill.value = null;
  }
  </script>
  
  <style scoped>
  /* =========================
     卡片区（技能 & 兴趣爱好共用）
     ========================= */
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 40px;
    background-color: #f5f5f5;
  }
  
  .skill-card {
    position: relative;
    width: 250px;
    height: 150px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .skill-card:hover {
    transform: scale(1.05);
  }
  
  .skill-name {
    font-size: 30px;
    font-weight: 600;
    color: #000000;
    text-align: center;
  }
  
  /* 进度条 */
  .progress-container {
    position: absolute;
    bottom: 10px;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .progress-bar {
    background-color: rgba(255, 255, 255, 0.3);
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .progress-fill {
    background-color: #4caf50;
    height: 100%;
    transition: width 0.3s ease;
  }
  </style>
  