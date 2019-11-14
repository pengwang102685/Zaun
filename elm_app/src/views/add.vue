<template >
  <div>
    <router-view></router-view>
    <elmHead>
      <template v-slot:left>
        <span @click="$router.back(-1)">&lt;</span>
      </template>
      <template v-slot:center>编辑地址</template>
      <template v-slot:right>
        <span @click="type=!type">{{type?'完成':'编辑'}}</span>
      </template>
    </elmHead>
    <div class="content">
      <ul>
        <li v-for=" (i,$index) in arr" :key="i">
          <div>
            <p>{{i.name}}</p>
            <p>{{i.phone}}</p>
          </div>
          <div v-show="type" class="cuo">
            <span @click="deletes(i,$index)" style="font-size: 0.3rem;display:block;">X</span>
          </div>
        </li>
      </ul>
      <div class="addsite">
        <router-link to="/about/user/adds" class="r">
          <span>新增地址</span>
          <span class="c">></span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import elmHead from "../components/head";
export default {
  data() {
    return {
      arr: "",
      type: false,
      id: "",
      uid: ""
    };
  },
  components: {
    elmHead
  },
  created() {
    this.lists();
  },
  methods: {
    deletes(a, b) {
      this.$axios
        .delete(
          "https://elm.cangdu.org/v1/users/" +
            localStorage.uid +
            "/addresses/" +
            a.id +
            ""
        )
        .then(data => {
          if (data.data.status == 0) {
            alert(data.data.message);
          } else {
            this.arr.splice(b, 0);
            this.lists();
          }
        });
    },
    lists() {
      this.$axios
        .get(
          "https://elm.cangdu.org/v1/users/" + localStorage.uid + "/addresses"
        )
        .then(data => {
          this.arr = data.data;
        });
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.content {
  width: 100%;
  margin-top: 1rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.content ul li {
  padding: 0.2rem;
  display: flex;
  border-bottom: 1px solid #ccc;
  background: #fff8c3;
  justify-content: space-between;
  margin: 0.2rem 0;
}
.content ul li div p{
  height: 0.4rem;;
  font-size: 0.25rem;
}
.addsite {
  margin-top: 0.2rem;
  background: #fff;
  padding: 0.15rem 0.15rem;
  border-top: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
}
.r {
  width: 100%;
}
.r span {
  font-size: 0.3rem;
}
.c {
  color: #ccc;
  float: right;
}
.cuo{
  height: 0.8rem;
  line-height: 0.8rem;
  color: #999;
}
</style>