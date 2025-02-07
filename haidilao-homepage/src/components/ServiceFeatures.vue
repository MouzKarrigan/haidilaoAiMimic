<template>
  <div class="service-features">
    <div 
      class="feature" 
      v-for="(feature, index) in features" 
      :key="index"
      :class="{ 'feature-animate': true }"
      :style="{ animationDelay: `${index * 0.2}s` }"
    >
      <div class="feature-image-wrapper">
        <div class="feature-circle"></div>
        <img :src="feature.image" :alt="feature.title" />
      </div>
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
          title: '优质服务',
          description: '专业的服务团队，为您提供贴心周到的用餐体验，让每位顾客感受宾至如归的温暖。',
        },
        {
          image: '../assets/haidilao_files/4014a49397e0455781021c9a9f6e0736-600-360.png',
          title: '特色美食',
          description: '精选优质食材，独特的调味配方，为您呈现地道美味的火锅盛宴。',
        },
        {
          image: '../assets/haidilao_files/ed47fa792a92413183769f2f4ef4cbad-600-360.png',
          title: '创新体验',
          description: '不断创新的用餐体验，融合传统与现代，带给您独特的美食文化享受。',
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
  flex-wrap: wrap;
  gap: 40px;
  padding: 20px;
  position: relative;
}

.service-features::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, var(--background-primary) 0%, transparent 70%);
  pointer-events: none;
}

.feature {
  text-align: center;
  max-width: 300px;
  padding: 20px;
  background-color: var(--background-secondary);
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.feature-image-wrapper {
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto 20px;
}

.feature-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--haidilao-red) 0%, var(--haidilao-light-red) 100%);
  opacity: 0.1;
  animation: pulse 2s infinite;
}

.feature img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature h3 {
  color: var(--haidilao-red);
  font-size: 1.5rem;
  margin: 15px 0;
  font-weight: 600;
}

.feature p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
}

.feature-animate {
  opacity: 0;
  animation: featureAppear 0.8s ease forwards;
}

@keyframes pulse {
  0% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.05); }
  100% { transform: translate(-50%, -50%) scale(1); }
}

@keyframes featureAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .service-features {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .feature {
    width: 100%;
    max-width: 280px;
  }

  .feature-image-wrapper {
    width: 140px;
    height: 140px;
  }

  .feature-circle {
    width: 120px;
    height: 120px;
  }

  .feature img {
    width: 100px;
    height: 100px;
  }
}
</style>
