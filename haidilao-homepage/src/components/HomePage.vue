<template>
  <div class="home-container">
    <HeaderComponent />
    <VideoHero />
    <el-main>

      <!-- Brand Story Section -->
      <section class="section brand-story">
        <h2 class="section-title">品牌故事</h2>
        <div class="brand-story-content">
          <div class="story-text">
            <h3>{{ aboutData.title }}</h3>
            <p>{{ aboutData.description }}</p>
          </div>
          <div class="story-image">
            <img src="../assets/haidilao_files/692d4547ab3b45b19006c05acd1d7c47-750-390.png" alt="海底捞品牌故事" />
          </div>
        </div>
      </section>

      <!-- Carousel Section -->
      <section class="section carousel">
        <CarouselSection />
      </section>

      <!-- Service Features with New Design -->
      <section class="section features">
        <h2 class="section-title">特色服务</h2>
        <ServiceFeatures />
      </section>

      <!-- App Download Section
      <section class="section app-download">
        <AppDownloadCTA />
      </section> -->
    </el-main>
    <FooterSection />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import HeaderComponent from './HeaderComponent.vue';
import VideoHero from './VideoHero.vue';
import CarouselSection from './CarouselSection.vue';
import ServiceFeatures from './ServiceFeatures.vue';
import AppDownloadCTA from './AppDownloadCTA.vue';
import FooterSection from './FooterSection.vue';
import axios from 'axios';

export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    VideoHero,
    CarouselSection,
    ServiceFeatures,
    AppDownloadCTA,
    FooterSection,
  },
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
.home-container {
  background-color: var(--background-primary);
}

.brand-story-content {
  display: flex;
  gap: 40px;
  align-items: center;
  margin-top: 30px;
  animation: slideUp 0.8s ease-out;
}

.story-text {
  flex: 1;
}

.story-text h3 {
  color: var(--haidilao-red);
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.story-text p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
}

.story-image {
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.story-image img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.story-image img:hover {
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  .brand-story-content {
    flex-direction: column;
    gap: 20px;
  }

  .story-text, .story-image {
    width: 100%;
  }
}

.features, .carousel, .app-download {
  margin-top: 60px;
}
</style>
