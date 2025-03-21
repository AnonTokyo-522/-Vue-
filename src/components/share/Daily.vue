<template>
    <div class="main-container">
        <h1>Share daily Life</h1>
        <div
        class="card fade-in"
        v-for="(daily, index) in dailys"
        :key="index"
        >
        <img :src="daily.image" alt="Daily Image" class="card-image" />
        <data value="data" class="card-data">{{ daily.date }}</data>
        <div class="card-content">{{ daily.content }}</div>
      </div>
    </div>
  </template>
  

  <script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';

    import axios from 'axios';

    const dailys = ref([]);

    onMounted(async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/dailys');
            dailys.value = response.data;

            // 让 Vue 等待数据渲染后，再手动触发 is-visible
            setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach(el => {
                el.classList.add('is-visible');
            });
            }, 100);
        } catch (error) {
            console.error("获取 daily 数据失败:", error);
        }
    });


  
  // 用来存放每个 card DOM 元素
  const cardsRef = ref([]);
  
  // ref 回调函数，传入 el 就 push 到数组里
  function setCardRef(el) {
    if (el) {
      cardsRef.value.push(el);
    }
  }
  
  let observer = null;
  
  onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, {
    threshold: 0.1 // 可见面积达到 10% 就触发回调
  });

  // 开始观察所有 card 元素
  cardsRef.value.forEach(cardEl => observer.observe(cardEl));
  });

  
  onBeforeUnmount(() => {
    // 组件卸载前，清理 observer
    if (observer) {
      cardsRef.value.forEach(cardEl => observer.unobserve(cardEl));
      observer.disconnect();
    }
  });
  </script>
  

  <style scoped>
  .main-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 60px;
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    padding: 8%;
    box-sizing: border-box;
  }
  
  .card {
    position: relative; /* 如果要在卡片内部用 absolute 定位内容, 建议加上这个 */
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 400px;
    border-radius: 7%;
  }
  
  /* 淡入基础类：初始状态不可见，稍微往下或往左也行 */
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  
  /* 进入视口后添加 is-visible，过渡到完全可见 */
  .fade-in.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .card-image {
    border-radius: 7%;
    width: 100%;
    height: 350px;
  }
  
  .card-data {
    text-align: center;
    font-size: 18px;
    font: bold;
    font-family: kaishu;
  }
  
  .card-content {
    margin-left: 30px;
    margin-top: 30px;
    padding: 20px;
    width: 150px;
    height: 240px;
    border-radius: 7%;
    position: absolute;
    background-color: rgb(236, 233, 196);
    opacity: 0;
    transition: 0.3s ease-in-out;
    rotate: -90deg;
  }
  
  .card-content:hover {
    opacity: 1;
    transform: rotate(90deg);
  }

  h1{
    position: absolute;
    top: 5%;
  }
  </style>
  