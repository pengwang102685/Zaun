<template>
	<div id="contain">
		<elmHead>
			<template v-slot:left>
				<router-link :to="{name:'vip'}">&lt;</router-link>
			</template>
			<template v-slot:center>购买记录</template>
		</elmHead>
		<div class="contain" style="text-align:center">
			<img src="../assets/loding.png" alt="">
			<p>没有购买记录</p>
		</div>
	</div>
</template>
<style scoped>
	img{
		margin-top: 2rem;
	}
	p{
		font-size: .3rem;
		color: #999;
		margin-top: .4rem;
	}
</style>
<script>
import elmHead from '../components/head'
export default {
	components:{
		elmHead:elmHead
	}
}
</script>