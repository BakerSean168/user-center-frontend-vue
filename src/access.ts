import router from '@/router'
import { useLoginUserStore } from './stores/useLoginUserStore'
import { message } from 'ant-design-vue'

/**
 * 全局权限校验
 */
router.beforeEach((to, from, next) => {
  const loginUserStore = useLoginUserStore()
  const loginUser = loginUserStore.loginUser
  const toUrl = to.fullPath
  console.log('全局路由守卫', toUrl, loginUser.userRole)
  // 如果是登录或注册页面，直接放行
  if (to.path === '/user/login' || to.path === '/user/register') {
    next()
    return
  }

  // 如果用户未登录，跳转到登录页面
  if (!loginUser.id) {
    message.error('请先登录')
    next({ path: '/user/login' })
    return
  }
  // 如果是管理员网站，且用户不是管理员，跳转到首页
  if (toUrl.startsWith('/admin') && loginUser.userRole !== 1) {
    message.error('无权限访问')
    next({ path: '/' })
    return
  }
  // 放行
  next()
})
