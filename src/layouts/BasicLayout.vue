<template>
  <div id="basic-layout">
    <a-layout class="layout">
      <a-layout-header class="header">
        <global-header />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="www.baidu.com" target="_blank" rel="noopener noreferrer">
          Ant Design Vue ©2023 Created by Ant UED
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import GlobalHeader from '@/components/GlobalHeader.vue';

</script>
<style scoped lang="css">
#basic-layout {
  height: 100vh;
  width: 100%;
}


#basic-layout .header {
  position: fixed;
  z-index: 1;
  width: 100%;
  text-align: center;
  background-color: white;

}

#basic-layout .content {
  position: absolute;
  top: 64px;
  bottom: 54px;
  left: 0;
  right: 0;
  overflow: auto;
  background-color: #f0f2f5;
}

#basic-layout .footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #efefef;
  padding: 16px;

}
</style>