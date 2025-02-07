<template>
  <div class="video-hero">
    <video autoplay muted loop>
      <source src="../assets/haidilao_files/317115a2dba64668bfb14990001dab04.mp4" type="video/mp4" />
      您的浏览器不支持视频播放。
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoHero',
};
</script>

<style scoped>
.video-hero {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
