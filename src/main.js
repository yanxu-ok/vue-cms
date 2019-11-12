import Vue from 'vue'
import app from './app.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入现成的router.js模块
import router from './router.js'

// 导入mintui样式
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入tabbarmui组件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 导入axios请求
import axios from './axios/axios.js'
Vue.prototype.$axios = axios

// 导入时间插件moent格式化
import moment from 'moment'
// 定义全局时间过滤器
Vue.filter('dateFormat', function (datearr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(datearr).format(pattern)
})



new Vue({
    el: '#app',
    render: h => h(app),
    router: router
})