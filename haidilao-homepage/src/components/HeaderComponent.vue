<template>
  <el-header>
    <div class="logo">
      <img src="../assets/haidilao_files/logo_en.d046b51a.svg" alt="海底捞 Logo" />
    </div>
    <nav>
      <ul>
        <li><a href="#about">关于我们</a></li>
        <li><a href="#services">服务</a></li>
        <li><a href="#download">下载APP</a></li>
      </ul>
    </nav>
  </el-header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style scoped>
.logo {
  float: left;
  margin-right: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
}

nav ul li {
  margin-right: 15px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
}

el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f56c6c;
  color: white;
}
</style>
