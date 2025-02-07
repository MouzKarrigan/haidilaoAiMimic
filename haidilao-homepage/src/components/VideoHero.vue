<template>
  <div class="video-hero">
    <video ref="videoRef" autoplay muted loop playsinline>
      <source src="../assets/haidilao_files/317115a2dba64668bfb14990001dab04.mp4" type="video/mp4" />
      您的浏览器不支持视频播放。
    </video>
    
    <div class="overlay"></div>
    
    <div class="content">
      <h1 class="title">传承经典 创新美味</h1>
      <p class="subtitle">探索海底捞独特的美食文化，体验无与伦比的服务</p>
      <div class="cta-buttons">
        <button class="cta-button primary" @click="scrollToFeatures">
          了解更多
        </button>
        <button class="cta-button secondary" @click="toggleVideo">
          {{ isPlaying ? '暂停' : '播放' }} 视频
        </button>
      </div>
    </div>

    <div class="video-controls">
      <button class="control-button" @click="toggleMute">
        {{ isMuted ? '取消静音' : '静音' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoHero',
  data() {
    return {
      isPlaying: true,
      isMuted: true
    };
  },
  methods: {
    toggleVideo() {
      if (this.$refs.videoRef.paused) {
        this.$refs.videoRef.play();
        this.isPlaying = true;
      } else {
        this.$refs.videoRef.pause();
        this.isPlaying = false;
      }
    },
    toggleMute() {
      this.$refs.videoRef.muted = !this.$refs.videoRef.muted;
      this.isMuted = this.$refs.videoRef.muted;
    },
    scrollToFeatures() {
      document.querySelector('.features').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
};
</script>

<style scoped>
.video-hero {
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 500px;
  overflow: hidden;
  background-color: var(--background-primary);
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 90%;
  max-width: 800px;
  z-index: 2;
}

.title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: slideDown 1s ease-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  animation: slideUp 1s ease-out 0.3s;
  animation-fill-mode: both;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  animation: fadeIn 1s ease-out 0.6s;
  animation-fill-mode: both;
}

.cta-button {
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.cta-button.primary {
  background-color: var(--haidilao-red);
  color: white;
  border-color: var(--haidilao-red);
}

.cta-button.primary:hover {
  background-color: var(--haidilao-dark-red);
  border-color: var(--haidilao-dark-red);
}

.cta-button.secondary {
  background-color: transparent;
  color: white;
  border-color: white;
}

.cta-button.secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.video-controls {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 2;
}

.control-button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.control-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .video-hero {
    height: 60vh;
  }

  .title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 10px;
  }

  .cta-button {
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
  }
}
</style>
