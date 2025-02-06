<template>
  <div>
    <el-header>
      <h1>海底捞</h1>
    </el-header>
    <el-main>
      <h2>{{ aboutData.title }}</h2>
      <p>{{ aboutData.description }}</p>
    </el-main>
    <el-footer>
      <p>版权所有 © 2025 海底捞</p>
    </el-footer>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'HomePage',
  setup() {
    const aboutData = ref({ title: '', description: '' });

    onMounted(async () => {
      const response = await axios.get('/api/about');
      aboutData.value = response.data.data;
    });

    return {
      aboutData,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 0;
  padding: 20px;
  background-color: #f56c6c;
  color: white;
}

h2 {
  margin-top: 20px;
  color: #333;
}

p {
  color: #666;
}

el-footer {
  text-align: center;
  padding: 10px;
  background-color: #f2f2f2;
}
</style>
