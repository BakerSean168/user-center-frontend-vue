import myAxios from '@/request'
import type { UserRegisterRequest, UserLoginRequest } from '@/types/userType'

/**
 * 用户注册
 * @param params
 */
export const userRegister = (params: UserRegisterRequest) => {
  return myAxios({
    url: '/api/user/register',
    method: 'post',
    data: params,
  })
}

/**
 * 用户登录
 * @param params
 */
export const userLogin = (params: UserLoginRequest) => {
  return myAxios({
    url: '/api/user/login',
    method: 'post',
    data: params,
  })
}
/**
 * 获取当前用户
 */
export const getCurrentUser = () => {
  return myAxios({
    url: '/api/user/current',
    method: 'get',
  })
}
/**
 * 获取用户信息
 * @param params
 */
export const getUserInfo = (id: number) => {
  return myAxios({
    url: '/api/user/info',
    method: 'get',
    params: { id },
  })
}
/**
 * 获取用户列表
 * @param params
 */
export const searchUsers = (username: string) => {
  return myAxios({
    url: '/api/user/search',
    method: 'get',
    params: { username },
  })
}
/**
 * 删除用户
 * @param params
 */
export const deleteUser = (id: string) => {
  return myAxios({
    url: '/api/user/delete',
    method: 'post',
    data: id,
    // 要传递 JSON 格式的值
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
