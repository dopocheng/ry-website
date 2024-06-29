<script setup>
import HeaderComp from './HeaderComponent.vue'
import FooterComp from './FooterComponent.vue'
</script>

<template>
    <div class="layout">
        <HeaderComp class="header" />
        <router-view class="content" />
        <FooterComp class="footer" />
        <el-backtop :right="100" :bottom="100" />
        <BackTop :right="40" :bottom="160"/>
      </div>
    </template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000; /* 确保header在最上层 */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 添加底部阴影效果 */
}

.content {
    margin-top: 122px; /* 调整为header的高度，以防内容被覆盖 */
    flex: 1 0 auto; /* 占据剩余空间 */
}

.footer {
  flex: 0 0 auto; /* 固定高度 */
}
</style>