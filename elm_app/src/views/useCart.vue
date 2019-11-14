<template>
	<div id="contain">
		<elmHead>
			<template v-slot:left>
				<router-link :to="{name:'vip'}">&lt;</router-link>
				</template>
			<template v-slot:center>兑换会员</template>
		</elmHead>
		<div class="contain">
			<p class="buy_for">成功兑换后将关联到当前帐号： <span>{{$store.state.user.name}}</span></p>
			<form class="form_style">
				<input type="text" name="cartNumber" placeholder="请输入10位卡号"> 
				<input type="text" name="passWord" placeholder="请输入6位卡密">
			</form>
			<p class="determine">兑换</p>
			<footer class="Binding">
				<h3 >——温馨提示——</h3> 
				<p >新兑换的会员服务，权益以「会员说明」为准。</p> 
				<p >月卡：
					<b>30次</b>
					减免配送费。
				</p> 
				<p>季卡：
					<b>90次</b>
					减免配送费。
				</p> 
				<p>年卡：
					<b>360</b>
					次减免配送费。
				</p> 
				<p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p></footer>
		</div>
	</div>
</template>
<style scoped>	
	*{
		padding: 0;
		margin: 0;
		list-style: none;
		font-style: normal;
		text-decoration: none;
		border: none;
		color: #333;
		font-weight: 400;
		font-family: Microsoft Yahei;
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
		-webkit-font-smoothing: antialiased;
	}
	.buy_for span {
		font-weight: 700;
	}
	.buy_for {
		font-size: .3rem;
		color: #666;
		line-height: 1rem;
		padding-left: .35rem;
	}
	.form_style input {
		border-bottom: .01rem solid #f5f5f5;
		height: 1rem;
		font-size: .3rem;
		color: #999;
		padding-left: .35rem;
	}
	.form_style {
		display: flex;
		flex-direction: column;
	}
	.determine {
		background-color: #ccc;
		font-size: .35rem;
		color: #fff;
		text-align: center;
		margin: 0 .35rem;
		line-height: .9rem;
		border-radius: .1rem;
		margin-top: .35rem;
		font-weight: 700;
	}
	footer p{
		padding-left: .5rem;
	}
	footer p,footer b{
		font-size: .25rem;
		color: #aaa;
		line-height: .4rem;
	}
	footer h3{
		text-align: center;
		font-weight: 400;
		font-size: .25rem;
		color: #aaa;
		margin-bottom: .3rem;
	}
	footer{
		margin-top: .5rem;
		padding: 0 .2rem;
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