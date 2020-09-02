import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
// 配置对应的映射关系
const routes = [

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 3.导出路由对象
export default router

