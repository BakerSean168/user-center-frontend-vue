import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCurrentUser, userLogout } from '@/api/user'
import type { UserInfo } from '@/types/userType'
export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<UserInfo>({
    id: 0,
    username: '未登录',
    userRole: 0,
  })

  // 远程获取登录用户信息
  async function fetchLoginUser() {
    const res = await getCurrentUser()
    if (res.data.code === 0 && res.data.data) {
      loginUser.value = res.data.data
      console.log('获取登录用户信息成功', loginUser.value)
    } else {
      console.log('获取登录用户信息失败', res.data.msg)
      // 这里可以添加一些错误处理逻辑，比如跳转到登录页面
    }
    console.log('当前登录用户信息', loginUser.value)
  }

  // 登出
  async function logout() {
    const res = await userLogout()
    if (res.data.code === 0) {
      loginUser.value = {
        id: 0,
        username: '未登录',
        userRole: 0,
      }
      console.log('登出成功', loginUser.value)
    } else {
      console.log('登出失败', res.data.msg)
    }
  }
  // 单独设置信息
  function setLoginUser(newLoginUser: UserInfo) {
    loginUser.value = newLoginUser
  }

  return { loginUser, fetchLoginUser, setLoginUser, logout }
})
