<template>
  <div class="searchtodetail">
    <header>
      <router-link to="/about/search">
        <span class="fl">&lt;返回</span>

      </router-link>
    </header>
    <p>找不到搜索结果！！！去首页看看吧(●ˇ∀ˇ●)</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // my: this.$route.query.name
    }
  },
  created () {
    // this.sorry()
  },
  methods: {
    // sorry () {
    //   alert('找不到搜索结果！！！去首页看看吧(●ˇ∀ˇ●)')
    // }
  }

}
</script>
<style scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix {
  zoom: 1;
}
.clearfix::after,
.clearfix::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
header {
  height: 0.6rem;
  background-color: #3190e8;
  padding-left: 0.2rem;
  font-size: 0.24rem;
}
header span {
  color: #fff;
  font-weight: 500;
}
p {
  font-size: 0.3rem;
  margin-top: 1rem;
}
.searchtodetail {
  height: 10rem;
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567592939478&di=9123bba39793294c1b91199126b1953d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012e605b659ab0a801215c8f04098a.jpg%402o.jpg");
  background-size: 100% 100%;
}
</style>
