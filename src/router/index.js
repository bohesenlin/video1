import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/tengxun',
    },


    //腾讯
    {
        path: '/tengxun',
        name: 'tengxun',
        component: () => import('../views/TengxunView.vue'),
        redirect: {
            path: '/tengxun/index',
            query: {},
        },
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('../components/TengxunIndex.vue'),
            },
            {
                path: 'tvplay',
                name: 'tvplay',
                component: () => import('../components/TengxunListView1.vue'),
            },
            {
                path: 'movie',
                name: 'movie',
                component: () => import('../components/TengxunListView1.vue'),
            },
            {
                path: 'comic',
                name: 'comic',
                component: () => import('../components/TengxunListView1.vue'),
            },
            {
                path: 'variety',
                name: 'variety',
                component: () => import('../components/TengxunListView1.vue'),
            },
        ],
    },

    {
        path: '/records',
        component: () => import('../views/RecordsView.vue'),
    },

    // 视频搜索界面
    {
        path: '/videosearchview',
        name: 'videosearchview',
        component: () => import('../views/VideoSearchView.vue'),
        children: [
            {
                path: 'tengxunsearch',
                name: 'tengxunsearch',
                component: () =>
                    import('../views/TengxunSearchListView1.vue'),
            },
            {
                path: 'cupfoxsearch',
                name: 'cupfoxsearch',
                component: () =>
                    import('../views/CupfoxSearchListView.vue'),
            },
        ],
    },

    //cupfox界面
    {
        path: '/cupfoxview',
        name: 'cupfoxview',
        component: () => import('../views/cupfoxView.vue'),
    },
    //爱奇艺观看界面
    {
        path: '/aiqiyivideoview',
        name: 'aiqiyivideoview',
        component: () => import('../views/VideoView.vue'),
    },
    // 优酷观看界面
    {
        path: '/youkuvideoview',
        name: 'youkuvideoview',
        component: () => import('../views/VideoView.vue'),
    },
    // 腾讯观看界面
    {
        path: '/tengxunvideoview',
        name: 'tengxunvideoview',
        component: () => import('../views/VideoView.vue'),
    },
    // 芒果TV观看界面
    {
        path: '/mangguovideoview',
        name: 'mangguovideoview',
        component: () => import('../views/VideoView.vue'),
    },
]

const router = new VueRouter({
    routes,
})

export default router
