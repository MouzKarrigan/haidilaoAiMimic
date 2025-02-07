<template>
  <div class="carousel-section">
    <h2 class="section-title">精彩瞬间</h2>
    <el-carousel 
      :interval="5000" 
      arrow="always" 
      height="500px"
      :autoplay="true"
      indicator-position="none"
      @change="handleSlideChange"
    >
      <el-carousel-item v-for="(slide, index) in slides" :key="index">
        <div class="carousel-item">
          <div class="image-container">
            <img :src="slide.image" :alt="slide.title" />
            <div class="overlay"></div>
          </div>
          <div class="content" :class="{ 'active': currentSlide === index }">
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.description }}</p>
            <button class="learn-more" @click="handleLearnMore(slide)">
              了解更多
            </button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="carousel-indicators">
      <button 
        v-for="(slide, index) in slides" 
        :key="index"
        class="indicator"
        :class="{ 'active': currentSlide === index }"
        @click="setSlide(index)"
      >
        <span class="indicator-dot"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselSection',
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: '../assets/haidilao_files/31c3a5a50b9b424892f74b5a60388e9d-1920-490.jpg',
          title: '传统与创新的完美融合',
          description: '海底捞始终坚持以创新的精神传承传统美食文化，为顾客带来独特的用餐体验。'
        },
        {
          image: '../assets/haidilao_files/23b726523994467bb032da1b8eb2887a-600-360.jpg',
          title: '精选食材 品质保证',
          description: '严选优质食材，确保每一道菜品都能带给您最纯正的美味。'
        },
        {
          image: '../assets/haidilao_files/692d4547ab3b45b19006c05acd1d7c47-750-390.png',
          title: '贴心服务 宾至如归',
          description: '用心服务每一位顾客，让您感受家一般的温暖。'
        }
      ]
    };
  },
  methods: {
    handleSlideChange(index) {
      this.currentSlide = index;
    },
    setSlide(index) {
      const carousel = this.$el.querySelector('.el-carousel');
      carousel.__vue__.setActiveItem(index);
    },
    handleLearnMore(slide) {
      // 可以根据需要添加更多功能
      console.log('Learn more about:', slide.title);
    }
  }
};
</script>

<style scoped>
.carousel-section {
  position: relative;
  margin: 60px 0;
  overflow: hidden;
}

.carousel-item {
  position: relative;
  height: 100%;
}

.image-container {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.carousel-item:hover .image-container img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
}

.content {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  max-width: 500px;
  opacity: 0;
  transition: all 0.6s ease;
}

.content.active {
  opacity: 1;
  transform: translateY(-50%);
}

.content h3 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.learn-more {
  background-color: var(--haidilao-red);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.learn-more:hover {
  background-color: var(--haidilao-dark-red);
  transform: translateY(-2px);
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicator {
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
}

.indicator-dot {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.indicator.active .indicator-dot {
  background-color: var(--haidilao-red);
  transform: scale(1.2);
}

/* Custom Element UI Carousel Arrows */
:deep(.el-carousel__arrow) {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  transition: all 0.3s ease;
}

:deep(.el-carousel__arrow:hover) {
  background-color: var(--haidilao-red);
}

@media (max-width: 768px) {
  .content {
    left: 5%;
    right: 5%;
    text-align: center;
  }

  .content h3 {
    font-size: 2rem;
  }

  .content p {
    font-size: 1rem;
  }

  .learn-more {
    padding: 10px 25px;
    font-size: 1rem;
  }
}
</style>
