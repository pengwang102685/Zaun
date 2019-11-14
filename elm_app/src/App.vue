<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
export default {
created() {
if (sessionStorage.getItem("store")) {
this.$store.replaceState(
Object.assign(
{},
this.$store.state,
JSON.parse(sessionStorage.getItem("store"))
)
);
sessionStorage.removeItem("store");
}
window.addEventListener("beforeunload", () => {
sessionStorage.setItem("store", JSON.stringify(this.$store.state));
});
}
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
