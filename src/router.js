import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import FAQ from './pages/FAQ.vue'
import SystemMenu from './pages/system/Menu.vue'
import SystemRoleAuthorizate from './pages/system/RoleAuthorizate.vue'

Vue.use(VueRouter)

const routes = [
    // 主页
    { path: '/', name: 'home', component: Home },
    // faq
    { path: '/faq', name: 'faq', component: FAQ },
    // 系统管理/菜单
    { path: '/system/menu', name: 'systemMenu', component: SystemMenu },
    // 系统管理/角色授权
    { path: '/system/role/authorizate', name: 'systemRoleAuthorizate', component: SystemRoleAuthorizate }
]

const router = new VueRouter({ routes })

export default router