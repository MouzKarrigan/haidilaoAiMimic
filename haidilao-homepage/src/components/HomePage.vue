<template>
  <div>
<HeaderComponent />
<VideoHero />
<el-main>
  <CarouselSection />
  <ServiceFeatures />
  <h2>{{ aboutData.title }}</h2>
  <p>{{ aboutData.description }}</p>
  <AppDownloadCTA />
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
