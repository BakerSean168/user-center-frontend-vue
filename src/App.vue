<template>
  <basic-layout />
</template>
<script setup lang="ts">
import BasicLayout from './layouts/BasicLayout.vue';
import { onMounted } from 'vue';
import { useLoginUserStore } from '@/stores/useLoginUserStore';

const loginUserStore = useLoginUserStore();

onMounted(async () => {
  // 应用启动时获取用户信息
  await loginUserStore.fetchLoginUser();
  checkCookie()
});
function checkCookie() {
  const cookies = document.cookie.split(';');
  console.log('All cookies:', cookies);

  // Check specific cookie if you know its name
  const sessionCookie = cookies.find(cookie => cookie.trim().startsWith('JSESSIONID='));
  console.log('Session cookie:', sessionCookie);
}

</script>
<style scoped></style>
