<template>
	<div>
		<!-- tit -->
		<elmHead>
		<template v-slot:left><router-link :to="{name:'users'}">&lt;</router-link></template>
		<template v-slot:center>我的积分</template>
		<template v-slot:right></template>
		</elmHead>
		<!-- 余额详情 -->
		<userdata>
			<template v-slot:tit-left>当前积分</template>
			<template v-slot:tit-right><router-link :to="{name:'scoreinfo'}" style="float:right;color:blue"><i></i> 积分说明</router-link></template>
			<template v-slot:num>{{score}}</template>
			<template v-slot:units>分</template>
			<template v-slot:btn><p style="background:#fe6d47;height:1rem;line-height:1rem;color:white;font-weight:600">积分兑换商品</p></template>
			<template v-slot:loding-tit>最近30天积分纪录</template>
			<template v-slot:loding-img><img src="" alt=""></template>
			<template v-slot:loding-info><p>最近30天无积分纪录</p></template>
		</userdata>
		<router-view></router-view>
	</div>
</template>
<style scoped>
	@import '../css/balance.css'
</style>
<script>
import elmHead from '../components/head'
import userdata from '../components/user_data'
export default {
	components:{
	elmHead:elmHead,
	userdata:userdata,
    name:'contain'
  },
  data() {
	  return {
		  score:0
	  }
  },
}
</script>