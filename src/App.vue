<template>
  <a-config-provider :locale="zhCN">
    <AntdDesignForm />
  </a-config-provider>
</template>
<script setup>
import 'dayjs/locale/zh-cn'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
// import { AntdDesignForm } from 'antd-vue-dynamic-form'
</script>
<style>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  min-height: 100%;
  height: 100%;
}
</style>
