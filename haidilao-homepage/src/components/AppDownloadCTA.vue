<template>
  <div class="app-download-cta">
    <div class="cta-container">
      <div class="cta-content">
        <div class="text-content">
          <h2 class="section-title">下载海底捞APP</h2>
          <div class="features">
            <div class="feature-item" v-for="(feature, index) in features" :key="index">
              <div class="feature-icon">{{ feature.icon }}</div>
              <div class="feature-text">
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
          <div class="download-buttons">
            <a href="#" class="download-button ios" @mouseover="handleHover('ios')" @mouseleave="handleLeave">
              <i class="fab fa-apple"></i>
              <span>
                <small>下载</small>
                iOS版本
              </span>
            </a>
            <a href="#" class="download-button android" @mouseover="handleHover('android')" @mouseleave="handleLeave">
              <i class="fab fa-android"></i>
              <span>
                <small>下载</small>
                安卓版本
              </span>
            </a>
          </div>
        </div>
        
        <div class="app-preview">
          <div class="phone-frame">
            <img 
              src="../assets/haidilao_files/downapp.4b615984.jpg" 
              alt="海底捞 App 预览" 
              class="app-screenshot"
            />
          </div>
          <div class="qr-code">
            <img 
              src="../assets/haidilao_files/contact_qr.458988fc.jpg" 
              alt="扫码下载" 
              class="qr-image"
            />
            <p>扫码下载APP</p>
          </div>
        </div>
      </div>

      <div class="background-circles">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDownloadCTA',
  data() {
    return {
      features: [
        {
          icon: '🎁',
          title: '专属优惠',
          description: '会员专享优惠，折扣不断'
        },
        {
          icon: '🕒',
          title: '在线预订',
          description: '随时预订，无需等待'
        },
        {
          icon: '🎯',
          title: '积分奖励',
          description: '消费即可获得积分回馈'
        }
      ],
      hoveredButton: null
    };
  },
  methods: {
    handleHover(button) {
      this.hoveredButton = button;
    },
    handleLeave() {
      this.hoveredButton = null;
    }
  }
};
</script>

<style scoped>
.app-download-cta {
  padding: 80px 0;
  background-color: var(--background-primary);
  position: relative;
  overflow: hidden;
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}

.cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  position: relative;
  z-index: 1;
}

.text-content {
  flex: 1;
  max-width: 600px;
}

.features {
  margin: 40px 0;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  animation: slideUp 0.6s ease-out;
  animation-fill-mode: both;
}

.feature-item:nth-child(2) {
  animation-delay: 0.2s;
}

.feature-item:nth-child(3) {
  animation-delay: 0.4s;
}

.feature-icon {
  font-size: 2rem;
  margin-right: 15px;
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-text h4 {
  color: var(--text-primary);
  margin: 0 0 5px 0;
  font-size: 1.2rem;
}

.feature-text p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 1rem;
}

.download-buttons {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

.download-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 25px;
  background-color: var(--haidilao-red);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  max-width: 200px;
}

.download-button i {
  font-size: 1.5rem;
}

.download-button span {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.2;
}

.download-button small {
  font-size: 0.8rem;
  opacity: 0.9;
}

.download-button:hover {
  background-color: var(--haidilao-dark-red);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(204, 27, 27, 0.2);
}

.app-preview {
  position: relative;
  display: flex;
  align-items: center;
  gap: 30px;
}

.phone-frame {
  position: relative;
  width: 280px;
  height: 560px;
  border-radius: 30px;
  background: white;
  padding: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: float 6s ease-in-out infinite;
}

.app-screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.qr-code {
  text-align: center;
}

.qr-image {
  width: 120px;
  height: 120px;
  padding: 10px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.qr-code p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.9rem;
}

.background-circles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--haidilao-red) 0%, var(--haidilao-light-red) 100%);
  opacity: 0.1;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: 10%;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 20%;
  left: 50%;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .cta-content {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }

  .text-content {
    max-width: 100%;
  }

  .feature-item {
    justify-content: center;
  }

  .download-buttons {
    justify-content: center;
  }

  .app-preview {
    flex-direction: column;
  }

  .phone-frame {
    width: 240px;
    height: 480px;
  }
}

@media (max-width: 768px) {
  .app-download-cta {
    padding: 40px 0;
  }

  .feature-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .feature-icon {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .download-buttons {
    flex-direction: column;
    align-items: center;
  }

  .download-button {
    width: 100%;
    max-width: 250px;
  }
}
</style>
