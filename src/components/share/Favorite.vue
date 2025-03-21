<template>
    <div class="main-container">
      <h1>My favorite things every year.</h1>
  
      <div
        v-for="(year, index) in years"
        :key="index"
        :id="`year-${index}`"
        class="year-part"
        :class="{ visible: isVisible[index] }"
      >
        <h3 class="year-title">{{ year.year }}</h3>
        <div class="favorites-wrapper">
          <div
            v-for="(favorite, favoriteIndex) in favorites[index]"
            :key="favoriteIndex"
            class="favorite-part"
          >
            <img class="favorite-image" :src="favorite.image" alt="图片" />
            <div class="favorite-description">{{ favorite.description }}</div>
            <h3 class="favorite-title">{{ favorite.title }}</h3>
          </div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import axios from "axios"; // 引入 axios
  
  // 年份数据
  const years = ref([
    { year: 2025 },
    { year: 2024 },
    { year: 2023 },
    { year: 2022 }
  ]);
  
  const favorites = ref([
    [
        { title: "星光咖啡馆与死神之蝶", image: "/favoriteIMG/img7.jpg" ,description:"现代的社会浮躁、焦虑，因此很多人的能量低迷 容易抑郁、引发不和谐。死神负责收集这些负能量、也会帮助人们走出过往的阴霾，我就是这样一个例子，我和死神 与其他同样的人一起经营一家咖啡馆，努力工作、实现价值，让我从抑郁变得积极，也为身边的人带来了希望。" },
        { title: "葬送的芙莉莲", image: "/favoriteIMG/img1.jpg" ,description:"勇者小队一行四人打败了魔王，其中的魔法使芙莉莲是长寿的精灵。在过去她对人类、时间等概念漠不关心，但在勇者死后的葬礼上，她因没有好好了解勇者而落泪，下定决心踏上一段新的旅程，去了解人类。一路上，她收徒弟、结识新的朋友、继续收集魔法，她发现勇者在他短暂的人生中，做了很多让他人历久难忘的事，同时也理解了勇者不希望芙莉莲以后一个人感到孤单，她越来越理解勇者、会做出和勇者当年一样的义举。"}
    ],
    [
        { title: "哭泣少女乐队", image: "/favoriteIMG/img4.jpg",description:"从高中辍学，前往东京一边工作、一边考大学的井芹仁菜，受到独立乐团音乐的渲染；在郊外的车站前，找到了已经退团，正在唱歌的偶像——河原木桃香。两人与藏起自己情绪的安和昴、被双亲抛弃的海老冢智，以及独自一人的少女璐帕；组成了女子乐团“有刺无刺”。 拥有不同背景并且背负着不同伤痛的五人，借由音乐找到属于她们的归属。" },
        { title: "无畏契约", image: "/favoriteIMG/img5.jpg",description:"《无畏契约》（英语：Valorant，香港和台湾译作“特战英豪”），又作瓦罗兰或瓦罗兰特，是一款由Riot Games开发的免费多人第一人称射击游戏。 《无畏契约》是基于团队的射击游戏以及第一人称射击游戏，经典玩法采取五打五的爆破模式，亦有其他原创模式供玩家选择。" },
        { title: "败犬女主太多了", image: "/favoriteIMG/img2.jpg",description:"第一学期期末考试完结那天，自称“背景人物”的高中生温水和彦在家庭餐厅看着轻小说，却撞见同班同学八奈见杏菜，被青梅竹马袴田草介甩掉的失恋现场。温水被迫听八奈见吐了一番苦水，并借了钱给没钱付账的八奈见。为了还钱，八奈见提议每天为温水准备便当来抵债。以此为契机，素昧平生的两人逐渐变得无话不谈，温水也进而结识田径社的烧盐柠檬、文艺社的小鞠知花，以及其他许多的“败犬女主”。于此同时，温水原本平淡的生活也一点一滴地发生变化。" },
        { title: "It's MYGO!!!!!", image: "/favoriteIMG/img3.jpg" }
    ],
    [
        { title: "崩坏：星穹铁道", image: "/favoriteIMG/img8.jpg" },
        { title: "孤独摇滚", image: "/favoriteIMG/img6.jpg" },
        { title: "辉夜大小姐想让我告白", image: "/favoriteIMG/img9.jpg" },
        { title: "咒术回战", image: "./favoriteIMG/img10.jpg" }
    ],
    [
        { title:"Fate" , image:"/favoriteIMG/img11.jpg"},
        { title:"葬花：暗黑桃花源" , image:"/favoriteIMG/img12.png"},
        { title:"JOJO" , image:"/favoriteIMG/img13.png"}
    ]
  ]);
  
  // 控制元素的可见状态
  const isVisible = ref([]);
  let lastScrollTop = 0; // 记录上一次滚动位置
  
  // 检测元素是否进入视口
  function checkVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return rect.top < windowHeight * 0.85 && rect.bottom > windowHeight * 0.15;
  }
  
  // 监听滚动
  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const isScrollingUp = scrollTop < lastScrollTop; // 判断滚动方向
  
    years.value.forEach((_, index) => {
      const elementId = `year-${index}`;
      const visible = checkVisibility(elementId);
  
      if (visible) {
        isVisible.value[index] = true; // 进入视口，设置可见
      } else if (isScrollingUp) {
        isVisible.value[index] = false; // 向上滚动时重新隐藏，允许再次触发动画
      }
    });
  
    lastScrollTop = scrollTop; // 更新上次滚动位置
  }
  
  onMounted(() => {
  isVisible.value = Array(years.value.length).fill(false);
  window.addEventListener("scroll", handleScroll);
  handleScroll();
 });

  
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>
  
  <style scoped>
  /* 主容器 */
  .main-container {
    width: 100%;
    min-height: 100vh;
    padding-top: 80px;
  }
  
  /* 标题 */
  h1 {
    color: #333;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 30px;
    margin-left: 8%;
  }
  
  /* 每个年份块：默认隐藏 */
  .year-part {
    width: 80%;
    margin: 0 auto 40px;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  
  /* 进入视口时淡入 */
  .year-part.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* 年份标题 */
  .year-title {
    font-size: 24px;
    font-weight: bold;
    color: #444;
    margin-bottom: 15px;
  }
  
  /* 内容布局 */
  .favorites-wrapper {
    display: flex;
    flex-wrap: wrap; 
    gap: 20px;       
  }
  
  /* 单个收藏项 */
  .favorite-part {
    width: 300px;
    height: auto;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  /* 图片 */
  .favorite-image {
    width: 100%;
    height: 500px;
    border-radius: 7%;
    object-fit: cover;
  }
  
  /* 标题 */
  .favorite-title {
    margin-top: 8px;
    font-size: 18px;
    color: #333;
  }

  .favorite-description{
    border-radius: 7%;
    position: absolute;
    width: 260px;
    height: 460px;
    background-color:#333;
    opacity: 0;
    color: aliceblue;
    font-family: fangsong;
    font-size: 18px;
    text-align: start;
    padding: 20px;
    transition:opacity 0.3s ease-in-out;
  }

  .favorite-description:hover{
    opacity: 0.83;
  }
  
  </style>
  