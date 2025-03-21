<template>
  <div class="message-board">
    <h2 class="board-title">留言</h2>

    <!-- 留言输入区 -->
    <div class="message-form">
      <input v-model="username" placeholder="请输入昵称 (可选)" />
      <textarea v-model="newMessage" placeholder="留下你的留言..." rows="4"></textarea>
      <button @click="submitMessage">提交留言</button>
    </div>

    <!-- 留言列表 -->
    <div class="messages-list">
      <div v-for="(message, index) in messages" :key="index" class="message-item">
        <!-- 左侧头像，取用户名第一个字 -->
        <div class="avatar">
          {{ message.username.charAt(0) }}
        </div>

        <!-- 右侧留言详情 -->
        <div class="message-details">
          <div class="message-header">
            <span class="username">{{ message.username }}</span>
            <span class="message-time">{{ formatTime(message.time) }}</span>
          </div>
          <div class="message-content">
            {{ message.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const username = ref('')
const newMessage = ref('')
const messages = ref([])

// 格式化时间
const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleString()
}

// 加载留言列表
const loadMessages = async () => {
  try {
    const res = await axios.get('http://localhost:3001/api/messages')
    messages.value = res.data
  } catch (err) {
    console.error('加载留言失败：', err)
  }
}

// 提交留言
const submitMessage = async () => {
  const content = newMessage.value.trim()
  if (content !== '') {
    const name = username.value.trim() || '匿名'
    try {
      const res = await axios.post('http://localhost:3001/api/messages', {
        username: name,
        content: content
      })
      messages.value.unshift(res.data) // 将新留言添加到前端列表
      newMessage.value = ''
      username.value = ''
    } catch (err) {
      console.error('提交留言失败：', err)
    }
  }
}

// 组件挂载时加载留言
onMounted(() => {
  loadMessages()
})
</script>

<style scoped>
.message-board {
  background-color: #f5f5f5;
  padding: 20px;
  margin-top: 40px;
  border-top: 1px solid #ddd;
  width: 40%;
}

.board-title {
  font-size: 22px;
  margin-bottom: 15px;
  text-align: center;
}

/* 留言输入区域 */
.message-form {
  margin-bottom: 20px;
}

.message-form input,
.message-form textarea {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.message-form button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.message-form button:hover {
  background-color: #2980b9;
}

/* 留言列表 */
.messages-list {
  max-height: 300px;
  overflow-y: auto;
}

/* 留言项 */
.message-item {
  display: flex;
  align-items: flex-start;
  background: white;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 左侧头像框 */
.avatar {
  width: 40px;
  height: 40px;
  background-color: #3498db;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}

/* 右侧留言详情 */
.message-details {
  flex: 1;
}

.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.username {
  font-weight: bold;
  color: #333;
}

.message-time {
  font-size: 12px;
  color: gray;
}

.message-content {
  font-size: 14px;
  color: #666;
  word-wrap: break-word;
}
</style>
