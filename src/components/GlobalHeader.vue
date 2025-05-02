<template>
  <div id="global-header">
    <a-row :wrap="false">
      <a-col flex="200px">
        <div class="title-bar">
          <img class="logo" src="../assets/48px.png" alt="logo" />
          <div class="title">用户中心</div>
        </div>
      </a-col>
      <a-col flex="auto">
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="navigation" />
      </a-col>
      <a-col flex="450px">
        <div v-if="currentUser.username !== '未登录'">
          <div class="user-login-status" @click="navigation({ key: '/user/info' })">
            <div>
              你好，{{ currentUser.username || '还未取名' }}
            </div>
            <div>
              个人中心
            </div>
          </div>

        </div>
        <div v-else>
          <div class="user-login-status">
            <a-button type="primary" href="/user/login" style="margin-left: 16px">
              登录
            </a-button>
            <a-button type="primary" href="/user/register" style="margin-left: 16px">
              注册
            </a-button>
          </div>
        </div>

      </a-col>
    </a-row>



  </div>
</template>
<script lang="ts" setup>
import { computed, h, ref } from 'vue';
import { useRouter } from 'vue-router';
import { HomeOutlined, CrownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
// stores
import { useLoginUserStore } from '@/stores/useLoginUserStore';
const userStore = useLoginUserStore();

const currentUser = computed(() => {
  return userStore.loginUser;
});

const router = useRouter();
// 路由跳转
const navigation = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
}
const current = ref<string[]>(['mail']);
// 设置当前选中的菜单项
router.afterEach((to) => {
  current.value = [to.path];
});

const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/user/login',
    label: '用户登录',
    title: '用户登录',
  },
  {
    key: '/user/register',
    label: '用户注册',
    title: '用户注册',
  },
  {
    key: '/admin/userManagement',
    icon: () => h(CrownOutlined),
    label: '用户管理',
    title: '用户管理',
  },
  {
    key: 'others',
    label: h(
      'a',
      { href: 'https://www.baidu.com', target: '_blank' },
    ),
    title: '编程导航',
  },

]);


</script>
<style scoped lang="css">
#global-header {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
}

#global-header .title-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  height: 64px;
}

.user-login-status {
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
  gap: 30px;
}

.title {
  color: black;
  font-size: 24px;

}

.logo {
  height: 48px;
}
</style>