import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/tengxun',
    },
    
    // 爱奇艺
    {
        path: '/aiqiyi',
        name: 'aiqiyi',
        component: () => import('../views/HomeView.vue'),
        redirect: {
            path: '/aiqiyi/tvnew',
            query: {
                channel_id: 2,
                mode: 24,
                page_id: 1,
                data_type: 1,
                ret_num: 48,
            },
        },
        children: [
            {
                path: 'index',
                component: () => import('../views/Home/Tv1.vue'),
            },
            {
                path: 'animationsynthesis',
                name: 'animationsynthesis',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'animationnewonline',
                name: 'animationnewonline',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'animationhitlist',
                name: 'animationhitlist',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'newmovie',
                name: 'newmovie',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tvnew',
                // name: 'newmovie',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tvsynthesis',
                // name: 'newmovie',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tvhit',
                // name: 'newmovie',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'animation1',
                // name: 'newmovie',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'animation2',
                // name: 'newmovie',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'animation3',
                // name: 'newmovie',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'variety1',
                // name: 'newmovie',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'variety2',
                // name: 'newmovie',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'variety3',
                // name: 'newmovie',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'documentary',
                // name: 'newmovie',
                component: () => import('../components/TengxunListView.vue'),
            },
        ],
    },

    // 优酷
    {
        path: '/youku',
        name: 'youku',
        component: () => import('../views/YoukuView.vue'),
        redirect: {
            path: '/youku/index',
            // query: {},
        },
        children: [
            {
                path: 'index',
                component: () => import('../views/Youku/Tv1.vue'),
            },
            {
                path: 'tv1',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tv2',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tv3',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tv4',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'movie1',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'movie2',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'movie3',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'movie4',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'children',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'comic1',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'comic2',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'comic3',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'comic4',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'comic5',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'documentary',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'knowledge',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'variety1',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'variety2',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'variety3',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'culture',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'entertainment',
                component: () => import('../components/TengxunListView.vue'),
            },
        ],
    },

    //腾讯
    {
        path: '/tengxun',
        name: 'tengxun',
        component: () => import('../views/TengxunView.vue'),
        redirect: {
            path: '/tengxun/index',
            query: {
                
            },
        },
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('../views/Tengxun/Tv.vue'),
            },
            {
                path: 'tv1',
                name: 'tv1',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tv2',
                name: 'tv2',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tv3',
                name: 'tv3',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tv4',
                name: 'tv4',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tv5',
                name: 'tv5',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tv6',
                name: 'tv6',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'movie1',
                name: 'movie1',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'movie2',
                name: 'movie2',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'movie3',
                name: 'movie3',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'movie4',
                name: 'movie4',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'comic1',
                // name: 'movie4',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'comic2',
                // name: 'movie4',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'comic3',
                // name: 'movie4',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'variety',
                // name: 'movie4',
                component: () => import('../components/TengxunListView.vue'),
            },
        ],
    },

    //饭团tv
    {
        path: '/fantuantv',
        name: 'fantuantv',
        component: () => import('../views/FantuantvView.vue'),
        redirect: {
            path: '/fantuantv/movie1',
            query: {
                url: 'https://fantuan.tv/vodtype/1-1.html',
            },
        },
        children: [
            {
                path: 'movie1',
                // name: 'movie1',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'movie2',
                // name: 'movie2',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'movie3',
                // name: 'movie3',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tv1',
                // name: 'tv1',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tv2',
                // name: 'tv2',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tv3',
                // name: 'tv3',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'variety1',
                // name: 'variety1',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'variety2',
                // name: 'variety2',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'variety3',
                // name: 'variety3',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'comic1',
                // name: 'comic1',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'comic2',
                // name: 'comic2',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'comic3',
                // name: 'comic3',
                component: () => import('../components/TengxunListView.vue'),
            },
        ],
    },

    //芒果
    {
        path: '/mangguo',
        name: 'mangguo',
        component: () => import('../views/MangguoView.vue'),
        redirect: {
            path: '/mangguo/tv1',
            query: {
                allowedRC: 1,
                platform: 'pcweb',
                channelId: 2,
                pn: 1,
                pc: 80,
                hudong: 1,
                _support: 10000000,
                kind: 'a1',
                area: 'a1',
                year: 'all',
                chargeInfo: 'a1',
                sort: 'c2',
            },
        },
        children: [
            {
                path: 'tv1',
                // name: 'tv1',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tv2',
                // name: 'tv2',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'tv3',
                // name: 'tv3',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'comic',
                name: 'comic',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'movie1',
                // name: 'movie1',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'movie2',
                // name: 'movie2',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'movie3',
                // name: 'movie3',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'children',
                name: 'children',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'entertainment',
                name: 'entertainment',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'documentary',
                name: 'documentary',
                component: () => import('../components/TengxunListView.vue'),
            },
            {
                path: 'variety',
                name: 'variety',
                component: () => import('../components/MangguoVarietyListView.vue'),
            },
        ],
    },

    {
        path: '/records',
        component: () => import('../components/Records1.vue'),
    },

    // 视频搜索界面
    {
        path: '/videosearchview',
        name: 'videosearchview',
        component: () => import('../views/VideoSearchView.vue'),
        children: [
            {
                path: 'aiqiyisearch',
                name: 'aiqiyisearch',
                component: () => import('../components/TengxunSearchListView.vue'),
            },
            {
                path: 'youkusearch',
                name: 'youkusearch',
                component: () => import('../components/TengxunSearchListView.vue'),
            },
            {
                path: 'mangguosearch',
                name: 'mangguosearch',
                component: () =>
                    import('../components/TengxunSearchListView.vue'),
            },
            {
                path: 'tengxunsearch',
                name: 'tengxunsearch',
                component: () =>
                    import('../components/TengxunSearchListView.vue'),
            },
            {
                path: 'fantuantvsearch',
                name: 'fantuantvsearch',
                component: () =>
                    import('../components/TengxunSearchListView.vue'),
            },
        ],
    },

    //爱奇艺观看界面
    {
        path: '/aiqiyivideoview',
        name: 'aiqiyivideoview',
        component: () => import('../components/VideoView.vue'),
    },
    // 优酷观看界面
    {
        path: '/youkuvideoview',
        name: 'youkuvideoview',
        component: () => import('../components/VideoView.vue'),
    },

    // 腾讯观看界面
    {
        path: '/tengxunvideoview',
        name: 'tengxunvideoview',
        component: () => import('../components/VideoView.vue'),
    },
    // 腾讯观看界面
    {
        path: '/fantuantvvideoview',
        name: 'fantuantvvideoview',
        component: () => import('../views/Fantuantv/FantuantvVideoView.vue'),
    },

    // 芒果TV观看界面
    {
        path: '/mangguovideoview',
        name: 'mangguovideoview',
        component: () => import('../components/VideoView.vue'),
    },
    // {
    //     path: '/mangguosearchvideoview',
    //     name: 'mangguosearchvideoview',
    //     component: () => import('../views/Mangguo/MangguoSearchVideoView.vue'),
    // },
]

const router = new VueRouter({
    routes,
})

export default router
