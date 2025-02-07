<template>
  <div class="app-download-cta">
    <img src="../assets/haidilao_files/downapp.4b615984.jpg" alt="Download App" />
    <div class="cta-text">
      <h3>下载海底捞APP</h3>
      <p>享受更多优惠和便捷服务</p>
      <a href="#" class="download-button">立即下载</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDownloadCTA',
};
</script>

<style scoped>
.app-download-cta {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
  background-color: #f2f2f2;
  padding: 20px;
}

.app-download-cta img {
  max-width: 200px;
  height: auto;
}

.cta-text {
  text-align: center;
}

.download-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #f56c6c;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
