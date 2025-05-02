<template>
  <div id="user-info-view">
    <a-card title="个人信息" :bordered="false">
      <!-- Basic Info Display -->
      <a-descriptions :column="1">
        <a-descriptions-item label="用户名">{{ currentUser.username || '未设置' }}</a-descriptions-item>
        <a-descriptions-item label="账号">{{ currentUser.userAccount }}</a-descriptions-item>
        <a-descriptions-item label="性别">
          {{ currentUser.gender === 1 ? '男' : currentUser.gender === 2 ? '女' : '未设置' }}
        </a-descriptions-item>
        <a-descriptions-item label="电话">{{ currentUser.userPhone || '未设置' }}</a-descriptions-item>
        <a-descriptions-item label="邮箱">{{ currentUser.userEmail || '未设置' }}</a-descriptions-item>
        <a-descriptions-item label="用户状态">
          {{ currentUser.userStatus === 0 ? '正常' : '异常' }}
        </a-descriptions-item>
        <a-descriptions-item label="注册时间">
          {{ formatDate(currentUser.createTime) }}
        </a-descriptions-item>
      </a-descriptions>
      <a-space class="action-buttons">
        <!-- <a-button type="primary" @click="startEdit">编辑信息</a-button> -->
        <a-button danger @click="handleLogout">退出登录</a-button>
      </a-space>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { useLoginUserStore } from '@/stores/useLoginUserStore';

import dayjs from 'dayjs';

const router = useRouter();
const loginUserStore = useLoginUserStore();


const currentUser = computed(() => loginUserStore.loginUser);


const handleLogout = async () => {
  try {
    // TODO: Implement logout API call
    await loginUserStore.logout();
    message.success('退出成功');
    router.push('/user/login');
  } catch {
    message.error('退出失败');
  }
};

// Format date
const formatDate = (date: string | undefined) => {
  if (!date) return '未知';
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};
</script>

<style scoped>
#user-info-view {
  padding: 24px;
  background-color: #f0f2f5;
  min-height: 100%;
}

.action-buttons {
  margin-top: 24px;
}
</style>