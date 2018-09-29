import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Navi from './components/Navi/Navi.vue'
import router from './router/index'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(Navi)
})

