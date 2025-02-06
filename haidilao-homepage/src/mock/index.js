import Mock from 'mockjs';

// 模拟数据接口
Mock.mock('/api/about', 'get', {
  success: true,
  data: {
    title: '关于海底捞',
    description: '海底捞是一家以火锅为主的餐饮企业，致力于为顾客提供优质的服务和美味的食物。',
  },
});
