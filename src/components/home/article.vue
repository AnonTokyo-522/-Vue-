<template>
  <div class="articles-container">
    <h2 class="section-title">Blogs</h2>
    <!-- 文章卡片列表 -->
    <div class="articles-grid">
      <div
        v-for="(article, index) in articles"
        :key="index"
        class="article-card"
        @click="openArticle(article)"
      >
        <img :src="article.image" alt="Article Image" class="card-image" />
        <h3 class="card-title">{{ article.title }}</h3>
      </div>
    </div>

    <!-- 弹出文章阅读容器 -->
    <transition name="fade">
      <div v-if="activeArticle" class="article-modal">
        <div class="modal-content">
          <button class="modal-close" @click="closeArticle">&times;</button>
          <h1 class="modal-title">{{ activeArticle.title }}</h1>
          <data value="time">{{ activeArticle.time }}</data>
          <div class="modal-body" v-html="activeArticle.content"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";

const articles = ref([
    {
      title: "寒假的小聚",
      image: "/articleIMG/img3.jpg",
      time:"2025年1月16日",
      content:
        `<h3>三国杀与五里桥</h3>
        <p>寒假和朋友们的聚会，一定得有三国杀的。仍旧在老地方，玩一天的三国杀 身份场。尔虞我诈，嬉戏打闹，快乐至极。累了，走到附近的五里桥公园，沿着桥一直走，欣赏着夕阳西下 波光粼粼，畅聊着高中琐事 大学生活。</p>
        <h3>芭比Q与泉州之旅</h3>
        <p>在朋友家的楼顶，吹着风 吃烧烤，回忆高中的生活；一起去泉州市区，一条街逛到天黑。这个寒假还是和朋友们玩了很多的。`
        
    },
    {
     title: "芙莉莲 观后感",
     time: "2025年3月15日",
     image: "/articleIMG/img1.jpg",
     content: `
      <h2>主题</h2>
      <p>《葬送的芙莉莲》在“寿命论”这一已经被反复讨论的题材上，展现了独特的视角和内涵。作品通过优良的剧情、细腻的人物刻画和情感描写，一部颇具深度和感染力的神作。</p>

      <p>首先，作品启发我重新关注生活中的点点滴滴，强调过程重于结果。在现实生活中，我们常常陷入追求目标的焦虑——从小学到中学，再到高考、大学、甚至毕业后的各种竞争与内卷中迷失自我。作品中，通过两组截然不同的角色群体——一边是追求强大魔法与权力的精灵老祖赛丽艾、维亚贝鲁等，他们希望直接获得强大的力量、强大的魔法或是权利，另一边则是追求过程、重视细节的芙莉莲及其师徒，她们更关注搜集魔法的过程、更关注魔法对生活的帮助。通过这种对比，作品不仅仅在讲述一个魔法世界的故事，更让我们反思在生活奔波中，如何守住内心的平静与热爱。</p>

      <p>在细节上，诸如“花田盛开”、“雕像清洁”、“葡萄变酸”等看似平凡的魔法，其实暗示着一种生活的艺术：即便没有惊天动地的成就，日常的温馨与坚持同样能带来长久的幸福。这种观念无疑具有强烈的现实共鸣，鼓励我们在纷繁复杂的生活中，发现并珍惜那些平淡而真实的美好瞬间。</p>

      <hr/>

      <h2>主线</h2>
      <p>作品的情感主线同样扣人心弦。勇者辛美尔短暂而闪亮的生命对芙莉莲产生了深远的影响，这段情感不仅改变了她原本平淡如水的人生轨迹，更让她重新找到了对生活和魔法意义的思考。芙莉莲和勇者相识这个节点的前后半生，形成鲜明对比。当有人问起芙莉莲为什么搜集魔法时，她会答出“因为曾经有个笨蛋说我搜集的魔法很有趣”。过去芙莉莲对时间毫不在意，也对同行伙伴的时间毫不关心，而现在她会为身边的人类考虑时间：“如果要花费很久时间的话 菲伦会不高兴的。”</p>

      <p>尤其在勇者离去时，芙莉莲的眼泪和内心的悔恨，不仅是对逝去时光的挽留，也是对生活本质的深刻省思。这段情节提醒我们，每一段相遇、每一次触动，都可能成为我们生活中的转折点。正如那句“如果是勇者辛美尔的话，他会这么做的”，正是这种无声的感召，使得芙莉莲决定踏上重新认识人类、思考生活意义的旅途。</p>

      <h2>人物 剧情</h2>
      <p><strong>菲伦</strong>：最初对芙莉莲及其周遭人物产生的偏见，在逐步深入剧情后得到了改观。菲伦从一个对生活细节漠不关心的女孩，逐渐成长为既聪明又乐于助人的形象。她的成长不仅体现在个人行为上，也体现在与周围人际关系的逐步改善上。菲伦的可爱和认真，无论是在生气时的俏皮，还是战斗时的专注，都为整个故事增添了不少温情与趣味。</p>

      <p>其他角色，如番茄、赞恩以及旅途中遇到的城主、冰水姐妹、邓肯等，每个角色都各具特色。制作团队在设计角色时，没有刻意制造低智或令人反感的情节，而是通过一个个生动的小故事和偶然的CP感，让观众在欣赏主线情感的同时，也能感受到配角们所传递出的温暖与人性光辉。</p>
      
      <hr/>
      
      <h2>制作</h2>
      <ul>
        <li><strong>画风与视觉效果</strong>：虽然在观望时，我对番剧的画风并无好感，但随着剧情深入，我会发现这种画风正好契合了故事的情感基调，平淡中见细腻，简洁中透出层次感。</li>
        <li><strong>音乐与剪辑</strong>：音乐恰到好处地烘托出情节的氛围，既有紧张激烈的战斗场面，也有温馨柔美的回忆时刻。剪辑上张弛有度，使得整个剧情在快节奏与慢叙之间取得了完美平衡，充分展示了制作团队的实力和用心。</li>
      </ul>`
    },
    {
      title: "春暖花开",
      image: "/articleIMG/img2.jpg",
      time:"2025年3月19日",
      content:
        `<p>在接连几日的大风之后，天津迎来了一波回暖。下午上完瑜伽课，走出体育馆，迎面而来的是温暖的阳光、明亮的天空、轻柔的微风，令人心旷神怡。在这种天气，散散步、骑骑车是一大幸事。</p>
        <p>话说那瑜伽课老师，要求我们在动作之间 保持深呼吸，但是有些动作会挤压腹部 胸腔，这种情况只有很短的气息，真让人摸不着头脑。晚饭我去吃麻辣香锅，阿姨问我：“吃什么口味的？”我答道：“麻辣香锅”阿姨又问“吃什么口味？”我仍答道：“麻辣香锅”但阿姨仍旧问“什么口味”我只好回答：“麻辣”真让人摸不着头脑。</p>
        <p>回到宿舍，洗澡、泡茶，然后开黑玩几局游戏，最后坐下来使用vue开发这个网页，结束了这样的一天，美好的一天。这便是美好大学生活一天的典范啊。`
    },

]);

const activeArticle = ref(null);

const openArticle = async (article) => {
  activeArticle.value = article;

  // 禁止页面滚动
  document.body.style.overflow = "hidden";

  await nextTick(); // 确保 DOM 更新后再滚动

  // 获取文章容器和目标组件的位置
  const articleContainer = document.getElementById('article');
  const offset = 50;  // 控制滚动位置的偏移量，可以根据需要调整

  if (articleContainer) {
    // 获取组件相对于文档顶部的位置
    const rect = articleContainer.getBoundingClientRect();
    const targetPosition = rect.top + window.scrollY - offset;

    // 滚动到目标位置
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  }
};

const closeArticle = () => {
    activeArticle.value = null;
    // 恢复页面滚动
    document.body.style.overflow = "";
};

</script>

<style scoped>
/* 整体容器 */
.articles-container {
  padding: 20px;
  max-width: 100%;
  height: 80vh;
}

/* 页面标题 */
.section-title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  color: #333;
}

/* 文章卡格布局 */
.articles-grid {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  gap: 20px;
  justify-content: center;
  max-height: 60vh; /* 限制高度 */
  overflow-y: auto; /* 允许滚动 */
  padding: 10px;
}

/* 文章卡片 */
.article-card {
  width: 350px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
}

.article-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* 卡片图片 */
.card-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

/* 卡片标题 */
.card-title {
  padding: 15px;
  font-size: 20px;
  color: #333;
  text-align: center;
}

/* 弹出容器 */
.article-modal {
  position: fixed;
  width: 90vw;
  height: 90vh;
  top: 5%;
  left: 5%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

/* 弹出内容区域 */
.modal-content {
  background: #fff;
  width: 80%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 8px;
  position: relative;
  padding: 20px;
  animation: zoomIn 0.3s ease-out;
}

/* 关闭按钮 */
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 28px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #333;
}

/* 淡入淡出过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 放大动画 */
@keyframes zoomIn {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}
</style>
