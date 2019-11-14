<template>
  <div class="head">
    <span class="s1">
      <slot name='left'></slot>
    </span>
    <span class="s2">
      <slot name='center'></slot>
    </span>
    <span class="s3">
      <slot name='right'></slot>
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  color: white;
}
.head {
  width: 6.4rem;
  height: 1rem;
  background-color: #3190e8;
  color: white;
  font-size: 0.6rem;
  line-height: 1rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.head span {
  font-size: 0.26rem;
  display: inline-block;
}
.s1 {
  width: 1rem;
  float: left;
}
.s1 a {
  font-size: 0.4rem;
}
.head .s2 {
  width: 3.5rem;
  text-align: center;
  float: left;
  font-size: 0.3rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.head .s2 a {
  font-size: 0.3rem;
  font-weight: 600;
}
.head .s3 {
  width: 1.5rem;
  text-align: right;
  float: right;
}
.head .s3 a {
  font-size: 0.26rem;
}
</style>
