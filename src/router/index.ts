import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/pc/LoginView.vue')
    }, {
        path: '/register',
        name: 'register',
        component: () => import('../views/pc/RegisterView.vue')
    }, {
        path: '/second-mall',
        name: 'second-mall',
        component: () => import('../views/pc/second/SecondMallView.vue')
    }, {
        path: '/',
        name: 'main',
        redirect: '/home',
        component: () => import('../views/pc/MainView.vue'),
        children: [{
            path: '/home',
            name: 'home',
            component: () => import('../views/pc/main/HomeView.vue')
        }, {
            path: '/recycle',
            name: 'recycle',
            redirect: '/total',
            component: () => import('../views/pc/main/RecycleView.vue'),
            children: [{
                path: '/total',
                name: 'total',
                component: () => import('../views/pc/recycle/TotalView.vue')
            }, {
                path: '/unpay',
                name: 'unpay',
                component: () => import('../views/pc/recycle/UnpayView.vue')
            }, {
                path: '/payed',
                name: 'payed',
                component: () => import('../views/pc/recycle/PayedView.vue')
            }]
        },
            {
                path: '/location',
                name: 'location',
                component: () => import('../views/pc/main/LocationView.vue')
            },
        //     {
        //     path: '/second',
        //     name: 'second',
        //     component: () => import('../views/pc/main/SecondView.vue')
        // },
            {
            path: '/manage',
            name: 'manage',
            component: () => import('../views/pc/main/ManageView.vue'),
            children: [{
                path: '/mine',
                name: 'mine',
                component: () => import('../views/pc/manage/MineView.vue')
            }]
        }, {
            path: '/open',
            name: 'open',
            component: () => import('../views/pc/main/OpenView.vue')
        }, {
            path: '/cooperation',
            name: 'cooperation',
            component: () => import('../views/pc/main/CooperationView.vue')
        }]
    }, {
        path: '/phone-login',
        name: 'phone-login',
        component: () => import('../views/phone/LoginView.vue')
    }, {
        path: '/phone-register',
        name: 'phone-register',
        component: () => import('../views/phone/RegisterView.vue')
    }, {
        path: '/phone-main',
        name: 'phone-main',
        redirect: '/phone-home',
        component: () => import('../views/phone/MainView.vue'),
        children: [{
            path: '/phone-home',
            name: 'phone-home',
            component: () => import('../views/phone/main/HomeView.vue')
        }, {
            path: '/phone-recycle',
            name: 'phone-recycle',
            component: () => import('../views/phone/main/RecycleView.vue')
        }, {
            path: '/phone-second',
            name: 'phone-second',
            component: () => import('../views/phone/main/SecondView.vue')
        }, {
            path: '/phone-open',
            name: 'phone-open',
            component: () => import('../views/phone/main/OpenView.vue')
        }, {
            path: '/phone-cooperation',
            name: 'phone-cooperation',
            component: () => import('../views/phone/main/CooperationView.vue')
        }, {
            path: '/phone-manage',
            name: 'phone-manage',
            component: () => import('../views/phone/main/ManageView.vue')
        }]
    }, {
        path: '/:catchAll(.*)',
        component: () => import('../views/ErrorView.vue')
    }]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
