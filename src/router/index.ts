import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'
// import { RouterLinkStub } from '@vue/test-utils'

Vue.use(VueRouter)

/*
  Note: sub-menu only appear when children.length>=1
  Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
*/

/*
  name:'router-name'             the name field is required when using <keep-alive>, it should also match its component's name property
                                 detail see : https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    roles: ['admin', 'editor']   will control the page roles (allow setting multiple roles)
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    hidden: true                 if true, this route will not show in the sidebar (default is false)
    alwaysShow: true             if true, will always show the root menu (default is false)
                                 if false, hide the root menu when has less or equal than one children route
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    noCache: true                if true, the page will not be cached (default is false)
    affix: true                  if true, the tag will affix in the tags-view
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
*/

/**
  ConstantRoutes
  a base page that does not have permission requirements
  all roles can be accessed
*/
export const constantRoutes: RouteConfig[] = [
  // 주석
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/auth-redirect',
    component: () => import(/* webpackChunkName: "auth-redirect" */ '@/views/login/auth-redirect.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/notice/noticeList/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/notice',
    component: Layout,
    redirect: '/notice/noticeList',
    meta: {
      title: 'notice',
      icon: 'clipboard',
      roles: ['admin', 'editor'], // you can set roles in root nav
      alwaysShow: true // will always show the root menu
    },
    children: [
      {
        path: 'writeNotice',
        component: () => import(/* webpackChunkName: "permission-page" */ '@/views/notice/writeNotice/index.vue'),
        name: 'WriteNotice',
        meta: {
          title: 'writeNotice',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'writeNotice',
        name: 'BoardRegisterPage',
        component: () => import('@/views/notice/pages/BoardRegisterPage.vue')
      },
      {
        path: 'noticeList',
        component: () => import(/* webpackChunkName: "permission-directive" */ '@/views/notice/noticeList/index.vue'),
        name: 'NoticeList',
        meta: {
          title: 'noticeList'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'noticeList',
        name: 'BoardListPage',
        component: () => import('@/views/notice/pages/BoardListPage.vue')
      }
    ]
  },
  {
    path: 'noticeList/:boardNo',
    name: 'BoardReadPage',
    component: () => import('@/views/notice/pages/BoardReadPage.vue'),
    props: {
      default: true
    }
  },
  {
    path: 'writeNotice/edit',
    name: 'BoardModifyPage',
    component: () => import('@/views/notice/pages/BoardModifyPage.vue'),
    props: {
      default: true
    }
  },

  // 주석
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import(/* webpackChunkName: "guide" */ '@/views/guide/index.vue'),
  //       name: 'Guide',
  //       meta: {
  //         title: 'guide',
  //         icon: 'guide',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    meta: { hidden: true },
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "profile" */ '@/views/profile/index.vue'),
        name: 'Profile',
        meta: {
          title: 'profile',
          icon: 'user',
          noCache: true
        }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
*/
export const asyncRoutes: RouteConfig[] = [

  {
    path: '/push',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "icons" */ '@/views/push/index.vue'),
        name: 'Push',
        meta: {
          title: 'push',
          icon: 'guide',
          noCache: true
        }
      }
    ]
  }
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/icons/index.vue'),
  //       name: 'Icons',
  //       meta: {
  //         title: 'icons',
  //         icon: 'clipboard',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/BoardListPage',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'BoardListPage',
  //       component: () => import('@/views/notice/pages/BoardListPage.vue'),
  //       name: 'BoardListPage',
  //       meta: {
  //         title: 'BoardListPage',
  //         icon: 'guide',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },

]

const createRouter = () => new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
