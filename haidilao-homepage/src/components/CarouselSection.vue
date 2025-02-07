<template>
  <div class="carousel-section">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Carousel Image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselSection',
  data() {
    return {
      images: [
        '../assets/haidilao_files/31c3a5a50b9b424892f74b5a60388e9d-1920-490.jpg',
        '../assets/haidilao_files/23b726523994467bb032da1b8eb2887a-600-360.jpg',
        '../assets/haidilao_files/692d4547ab3b45b19006c05acd1d7c47-750-390.png',
      ],
    };
  },
};
</script>

<style scoped>
.carousel-section {
  margin: 20px 0;
}

.carousel-section img {
  width: 100%;
  height: auto;
}
</style>
