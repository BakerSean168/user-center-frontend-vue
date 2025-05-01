<template>
  <div id="user-register-view">
    <h1 class="title">用户注册</h1>
    <a-form style="max-width: 480px; min-width: 400px;" :model="formState" name="basic" label-align="left"
      :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }" autocomplete="off" @finish="handleSubmit">
      <!-- 账号 -->
      <a-form-item label="账号" name="userAccount" :rules="[
        { required: true, message: '账号不能为空！' },
        { min: 4, message: '账号长度不能小于4位!' },
        { max: 16, message: '账号长度不能大于16位!' },

      ]">
        <a-input v-model:value="formState.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <!-- 密码 -->
      <a-form-item label="密码" name="userPassword" :rules="[
        { required: true, message: '密码不能为空!' },
        { min: 8, message: '密码长度不能小于8位!' },
        { max: 16, message: '密码长度不能大于16位!' },
      ]">
        <a-input-password v-model:value="formState.userPassword" placeholder="请输入密码" />
      </a-form-item>
      <!-- 确认密码 -->
      <a-form-item label="确认密码" name="checkPassword" :rules="[
        { required: true, message: '确认密码不能为空!' },
        { min: 8, message: '确认密码长度不能小于8位!' },
        { max: 16, message: '确认密码长度不能大于16位!' },
      ]">
        <a-input-password v-model:value="formState.checkPassword" placeholder="请确认密码" />
      </a-form-item>
      <!-- 编号 -->
      <a-form-item label="编号" name="planetCode" :rules="[
        { required: true, message: '编号不能为空！' },
        { min: 1, message: '编号长度不能小于1位!' },
        { max: 5, message: '编号长度不能大于5位!' },
      ]">
        <a-input v-model:value="formState.planetCode" placeholder="请输入编号" />
      </a-form-item>
      <!-- 按钮 -->
      <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary" html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { userRegister } from '@/api/user';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
interface FormState {
  userAccount: string;
  userPassword: string;
  checkPassword: string;
  planetCode: string;
}

const formState = reactive<FormState>({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
  planetCode: '',
});
const handleSubmit = async (value: FormState) => {
  // 如果两次输入的密码不一致，则提示错误
  if (value.userPassword !== value.checkPassword) {
    message.error('两次输入的密码不一致');
    return;
  }
  const res = await userRegister(value);
  if (res.data.code === 0 && res.data.data) {
    message.success('注册成功');
    router.push({
      path: '/user/login',
      replace: true,
    })
  } else {
    console.log('注册失败');
  }
}
// // TODO: 处理登录成功后的操作
// const onFinishFailed = (errorInfo: any) => {
//   console.log('Failed:', errorInfo);
// };
</script>

<style scoped lang="css">
#user-register-view {
  height: 100%;
  width: 100%;
  background-color: #f0f2f5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#user-register-view .title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
