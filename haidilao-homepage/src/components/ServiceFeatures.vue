<template>
  <div class="service-features">
    <div class="feature" v-for="(feature, index) in features" :key="index">
      <img :src="feature.image" alt="Feature Image" />
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceFeatures',
  data() {
    return {
      features: [
        {
          image: '../assets/haidilao_files/6acf5867ed844cab859cd9b2f8e53116-600-360.png',
          title: '特色服务1',
          description: '描述1',
        },
        {
          image: '../assets/haidilao_files/4014a49397e0455781021c9a9f6e0736-600-360.png',
          title: '特色服务2',
          description: '描述2',
        },
        {
          image: '../assets/haidilao_files/ed47fa792a92413183769f2f4ef4cbad-600-360.png',
          title: '特色服务3',
          description: '描述3',
        },
      ],
    };
  },
};
</script>

<style scoped>
.service-features {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.feature {
  text-align: center;
  max-width: 200px;
}

.feature img {
  width: 100%;
  height: auto;
}

.feature h3 {
  margin: 10px 0;
  color: #333;
}

.feature p {
  color: #666;
}
</style>
