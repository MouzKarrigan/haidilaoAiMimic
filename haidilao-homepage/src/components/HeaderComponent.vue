<template>
  <el-header :class="{ 'header-scrolled': isScrolled }">
    <div class="header-container">
      <div class="logo">
        <img :src="currentLogo" :alt="currentLanguage === 'zh' ? '海底捞 Logo' : 'Haidilao Logo'" />
      </div>

      <div class="mobile-menu-button" @click="toggleMobileMenu">
        <div class="hamburger" :class="{ 'is-active': isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav :class="{ 'mobile-open': isMobileMenuOpen }">
        <ul class="nav-links">
          <li v-for="(item, index) in menuItems" :key="index">
            <a :href="item.link" @click="scrollToSection(item.link)">
              {{ currentLanguage === 'zh' ? item.titleZh : item.titleEn }}
            </a>
          </li>
        </ul>

        <div class="nav-actions">
          <button class="language-switch" @click="toggleLanguage">
            {{ currentLanguage === 'zh' ? 'EN' : '中' }}
          </button>
          <button class="order-button">
            {{ currentLanguage === 'zh' ? '在线预订' : 'Book Now' }}
          </button>
        </div>
      </nav>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
      currentLanguage: 'zh',
      menuItems: [
        { link: '#about', titleZh: '关于我们', titleEn: 'About Us' },
        { link: '#brand-story', titleZh: '品牌故事', titleEn: 'Brand Story' },
        { link: '#services', titleZh: '特色服务', titleEn: 'Services' },
        { link: '#menu', titleZh: '菜单', titleEn: 'Menu' },
        { link: '#locations', titleZh: '门店', titleEn: 'Locations' },
        { link: '#download', titleZh: '下载APP', titleEn: 'Download App' }
      ]
    };
  },
  computed: {
    currentLogo() {
      return '../assets/haidilao_files/logo_en.d046b51a.svg';
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'zh' ? 'en' : 'zh';
    },
    scrollToSection(link) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.isMobileMenuOpen = false;
        document.body.style.overflow = '';
      }
    }
  }
};
</script>

<style scoped>
.el-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: transparent;
  transition: all 0.3s ease;
  padding: 0;
}

.header-scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  height: 70px;
}

.logo {
  height: 40px;
  z-index: 1001;
}

.logo img {
  height: 100%;
  width: auto;
}

nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--haidilao-red);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--haidilao-red);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.language-switch {
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1rem;
  cursor: pointer;
  padding: 5px 10px;
  transition: color 0.3s ease;
}

.language-switch:hover {
  color: var(--haidilao-red);
}

.order-button {
  background-color: var(--haidilao-red);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.order-button:hover {
  background-color: var(--haidilao-dark-red);
}

.mobile-menu-button {
  display: none;
  z-index: 1001;
}

.hamburger {
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: var(--text-primary);
  transition: all 0.3s ease;
}

.hamburger span:first-child {
  top: 0;
}

.hamburger span:nth-child(2) {
  top: 9px;
}

.hamburger span:last-child {
  bottom: 0;
}

.hamburger.is-active span:first-child {
  transform: rotate(45deg);
  top: 9px;
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active span:last-child {
  transform: rotate(-45deg);
  bottom: 9px;
}

@media (max-width: 768px) {
  .mobile-menu-button {
    display: block;
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    padding: 80px 20px;
    transition: right 0.3s ease;
  }

  nav.mobile-open {
    right: 0;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .nav-actions {
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
  }

  .order-button {
    width: 200px;
  }
}
</style>
