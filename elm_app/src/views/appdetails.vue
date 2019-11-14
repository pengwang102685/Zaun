<template>
	<div class="app">
		<elmHead>
			<template v-slot:left><router-link to="/about/user">&lt;</router-link></template>
			<template v-slot:center>下载</template>
		</elmHead>
		<div class="contain">
			<div class="app-img">
				<img src="../assets/elmapp.jpg" alt="">
			</div>
			<p>下载饿了么APP</p>
			<div class="xz-btn">下载</div>
		</div>
	</div>
</template>
<style scoped>
	.app-img{
		margin-top: .4rem;
		border-radius: .4rem;
		display: inline-block;
		overflow: hidden;
	}
	.app-img img{
		width: 100%;
		height: 100%;
	}
	.contain{
		text-align: center;
		background: #fff;
	}
	.xz-btn{
		    background-color: #4cd964;
    font-size: .3rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: .8rem;
    border-radius: .2rem;
    margin-top: .25rem;
	}
</style>
<script>
import elmHead from '../components/head.vue'
export default {
	components:{
		elmHead:elmHead,
		name:'app'
	}
}
</script>