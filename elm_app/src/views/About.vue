<template>
  <div class="about">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isbtnlogin:false,
    }
  },
}
</script>
<style scoped>
.about{
  padding-bottom: 1rem;
}
  .login{
    color: #fff;
    text-decoration: none;
  }
  .contain{
    position: absolute !important;
  }
  #contain{
    position: absolute !important;
  }
</style>