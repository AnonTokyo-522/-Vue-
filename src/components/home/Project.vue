<template>
    <div class="projects-section">
      
      <div class="projects-container">
        <button @click="scrollLeft" class="scroll-button left">&lt;</button>
        
        <div class="projects-wrapper" ref="projectsWrapper">
          <div 
            v-for="(project, index) in projects" 
            :key="index" 
            class="project-card"
          >
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="project-date">{{ project.date }}</p>
            <img class="project-image":src="project.img" alt="项目图片">
            <p class="project-description">{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="project-link">查看项目</a>
          </div>
        </div>
  
        <button @click="scrollRight" class="scroll-button right">&gt;</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const projects = ref([
    { 
      name: "战机小游戏", 
      date: "2024-04", 
      img:"/projectIMG/img1.png",
      description: "使用 C++ 和 Qt 制作的简单小游戏，主要实现了游戏的UI界面，战斗逻辑 攻击 技能 和简易碰撞。",
      link: "https://space.bilibili.com/358565398?spm_id_from=333.1007.0.0"
    },
    { 
      name: "GithubPage", 
      date: "2024-11", 
      img:"/projectIMG/img2.png",
      description: "在学习Html、Css和JavaScript的过程中，边学边做出来的简易个人网页，展示个性、技能，分享生活 学习。",
      link: "https://github.com/AnonTokyo-522/AnonTokyo-522.io"
    },
    { 
      name: "Vue个人网页", 
      date: "2025-03", 
      img:"/projectIMG/img3.png",
      description: "在上一个网站的基础上，一边学习vue，一边使用vue框架制作出的个人网页，充分利用vue的组件化开发、双向数据绑定等功能。",
      link: "https://github.com/你的仓库"
    },
  ]);
  
  const projectsWrapper = ref(null);
  
  const scrollLeft = () => {
    projectsWrapper.value.scrollBy({ left: -300, behavior: "smooth" });
  };
  
  const scrollRight = () => {
    projectsWrapper.value.scrollBy({ left: 300, behavior: "smooth" });
  };
  </script>
  
  <style scoped>
  /* 外层容器 */
  .projects-section {
    padding: 40px;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  /* 标题 */
  .section-title {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .projects-container {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
    max-width: 90vw; 
    margin: 0 auto;
 }

 .projects-wrapper {
    display: flex;
    gap: 20px; 
    padding: 10px;
    white-space: nowrap;
    overflow-x: auto; /* 允许横向滚动 */
    scroll-behavior: smooth;
    flex-wrap: nowrap; /* 确保卡片不会换行 */
    width: 100%; /* 让 wrapper 适应容器 */
}


  /* 隐藏滚动条 */
  .projects-wrapper::-webkit-scrollbar {
    display: none;
  }
  
  /* 项目卡片 */
  .project-card {
    flex: 0 0 auto; /* 确保卡片不会被压缩 */
    width: 250px;
    min-height: 320px; /* 让卡片足够高 */
    background: white;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: inline-block;
    text-align: left;
    overflow: hidden;
    word-wrap: break-word; /* 让长单词换行 */
    white-space: normal; /* 让文字正常换行 */
  }

  .project-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 10px 0;
  }

  /* 鼠标悬停时放大 + 阴影 */
  .project-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  /* 文字样式 */
  .project-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .project-date {
    font-size: 14px;
    color: gray;
    margin-bottom: 8px;
  }
  
  .project-description {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
    line-height: 1.5; /* 增加行距让阅读更舒服 */
    max-height: 150px; /* 限制最大高度，避免溢出 */
    overflow: hidden; /* 超出部分隐藏 */
    text-overflow: ellipsis; /* 超长文本用省略号代替 */
  }
  
  /* 链接按钮 */
  .project-link {
    display: inline-block;
    margin-top: 8px;
    padding: 6px 12px;
    color: white;
    background: #3498db;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
  }
  
  .project-link:hover {
    background: #2980b9;
  }
  
  .scroll-button {
  position: absolute;
  background: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s;
  z-index: 10; 
  }
  .scroll-button.left {
    left: -10px; /* 让按钮靠近左侧 */
  }
  .scroll-button.right {
    right: -10px; /* 让按钮靠近右侧 */
  }

  </style>
  