<template>
  <footer class="footer-section">
    <div class="footer-content">
      <div class="footer-grid">
        <!-- 公司信息 -->
        <div class="footer-column">
          <div class="footer-logo">
            <img src="../assets/haidilao_files/logo_en.d046b51a.svg" alt="海底捞 Logo" />
          </div>
          <p class="company-description">
            海底捞始终致力于为顾客提供优质的用餐体验，用心服务每一位顾客。
          </p>
        </div>

        <!-- 快速链接 -->
        <div class="footer-column">
          <h3>快速链接</h3>
          <ul>
            <li v-for="(link, index) in quickLinks" :key="index">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div class="footer-column">
          <h3>联系我们</h3>
          <ul class="contact-info">
            <li v-for="(contact, index) in contactInfo" :key="index">
              <i :class="contact.icon"></i>
              <span>{{ contact.text }}</span>
            </li>
          </ul>
        </div>

        <!-- 社交媒体 -->
        <div class="footer-column">
          <h3>关注我们</h3>
          <div class="social-links">
            <a v-for="(social, index) in socialMedia" 
               :key="index" 
               :href="social.url" 
               :title="social.name"
               class="social-icon"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
          <div class="qr-codes">
            <div class="qr-code-item">
              <img src="../assets/haidilao_files/contact_qr.458988fc.jpg" alt="微信公众号" />
              <span>微信公众号</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部信息 -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>版权所有 © {{ currentYear }} 海底捞火锅</p>
          <div class="beian">
            <img src="../assets/haidilao_files/beian.093bd141.png" alt="备案信息" />
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
              京ICP备12345678号-1
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      quickLinks: [
        { text: '关于我们', url: '#about' },
        { text: '加入我们', url: '#careers' },
        { text: '新闻资讯', url: '#news' },
        { text: '门店地址', url: '#locations' },
        { text: '投资者关系', url: '#investors' }
      ],
      contactInfo: [
        { icon: 'fas fa-phone', text: '400-8208-400' },
        { icon: 'fas fa-envelope', text: 'service@haidilao.com' },
        { icon: 'fas fa-map-marker-alt', text: '北京市朝阳区望京东路6号' }
      ],
      socialMedia: [
        { name: '微博', icon: 'fab fa-weibo', url: '#' },
        { name: '微信', icon: 'fab fa-weixin', url: '#' },
        { name: '抖音', icon: 'fab fa-tiktok', url: '#' },
        { name: '小红书', icon: 'fas fa-book', url: '#' }
      ]
    };
  }
};
</script>

<style scoped>
.footer-section {
  background-color: var(--background-secondary);
  color: var(--text-primary);
  padding: 60px 0 0;
  position: relative;
  overflow: hidden;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

.footer-column {
  animation: fadeIn 0.6s ease-out;
}

.footer-logo {
  margin-bottom: 20px;
}

.footer-logo img {
  height: 40px;
  width: auto;
}

.company-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-top: 15px;
}

.footer-column h3 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
}

.footer-column h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: var(--haidilao-red);
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 12px;
}

.footer-column ul li a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-column ul li a:hover {
  color: var(--haidilao-red);
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
}

.contact-info i {
  color: var(--haidilao-red);
  width: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--background-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: var(--haidilao-red);
  color: white;
  transform: translateY(-3px);
}

.qr-codes {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.qr-code-item {
  text-align: center;
}

.qr-code-item img {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-bottom: 8px;
}

.qr-code-item span {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.footer-bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  margin-top: 40px;
}

.copyright {
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.beian {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.beian img {
  height: 20px;
  width: auto;
}

.beian a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.beian a:hover {
  color: var(--haidilao-red);
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 40px 0 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-column {
    text-align: center;
  }

  .footer-column h3::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .contact-info li {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .qr-codes {
    justify-content: center;
  }
}
</style>
