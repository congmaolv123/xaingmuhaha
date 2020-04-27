import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import '@/style/index.less'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 控制台提示信息  生产环境 简洁  开发环境详细
Vue.config.productionTip = false

// main.js的职责
// 导入项目中的依赖数据js、css  创建根实例
// 根示例
new Vue({
  router,
  render: h => h(App)
  // 挂载到App上
}).$mount('#app')
