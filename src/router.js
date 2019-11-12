import VueRouter from 'vue-router'

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('./components/tabbar/HomeContainer.vue')
        },
        {
            path: '/member',
            component: () => import('./components/tabbar/MemberContainer.vue')
        },
        {
            path: '/shopcar',
            component: () => import('./components/tabbar/ShopcarContainer.vue')
        },
        {
            path: '/search',
            component: () => import('./components/tabbar/SearchContainer.vue')
        },
        {
            path: '/home/newslist',
            component: () => import('./components/news/NewsList.vue')
        },
        {
            path: '/home/newsInfo/:id',
            component: () => import('./components/news/NewsInfo.vue')
        }
    ],
    linkActiveClass: 'mui-active'
    // 设置路由高亮的类
})
// 把路由对象暴露出去
export default router