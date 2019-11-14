<template>
<div class="loading"></div>
</template>

<script>
export default {
  name: 'Loading' // 定义的组件名称 使用时写法：loading
}
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  width:100%;
  height:100%;
  background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568470918644&di=79b772398614c306e32328bf1302eb6d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb9dbc34d699a2eb32c54283812cf9d5b4f936d2572f0f-pUsofd_fw658') center center no-repeat transparent;
  background-size: 6rem 5rem;
  z-index: 1000;
  opacity: 0.3;
}
</style>