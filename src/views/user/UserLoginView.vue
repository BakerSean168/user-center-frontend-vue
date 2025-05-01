<template>
  <div id="user-login-view">
    <h1 class="title">用户登录</h1>
    <a-form style="max-width: 480px; min-width: 400px;" :model="formState" name="basic" label-align="left"
      :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }" autocomplete="off" @finish="handleSubmit">
      <a-form-item label="账号" name="userAccount" :rules="[{ required: true, message: '账号不能为空！' }]">
        <a-input v-model:value="formState.userAccount" placeholder="请输入账号 (管理员 root)" />
      </a-form-item>

      <a-form-item label="密码" name="userPassword" :rules="[
        { required: true, message: '密码不能为空!' },
        { min: 6, message: '密码长度不能小于6位!' },
        { max: 16, message: '密码长度不能大于16位!' },
      ]">
        <a-input-password v-model:value="formState.userPassword" placeholder="请输入密码（管理员 1-8)" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { userLogin } from '@/api/user';
import { reactive } from 'vue';
import { useLoginUserStore } from '@/stores/useLoginUserStore';
import { useRouter } from 'vue-router';
const router = useRouter();
const loginUserStore = useLoginUserStore();
interface FormState {
  userAccount: string;
  userPassword: string;
}

const formState = reactive<FormState>({
  userAccount: '',
  userPassword: '',
});
const handleSubmit = async (value: FormState) => {
  const res = await userLogin(value);
  if (res.data.code === 0 && res.data.data) {
    await loginUserStore.fetchLoginUser();
    message.success('登录成功');
    router.push({
      path: '/',
      replace: true,
    })
  } else {
    console.log('登录失败');
  }
}
</script>

<style scoped lang="css">
#user-login-view {
  height: 100%;
  width: 100%;
  background-color: #f0f2f5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#user-login-view .title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
