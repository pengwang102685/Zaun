<template>
	<div id="contain">
		<elmHead>
			<template v-slot:left>
				<router-link :to="{name:'benefit'}">&lt;</router-link>
			</template>
			<template v-slot:center>兑换红包</template>
		</elmHead>
		<div class="contain">
			<div class="exchange_code">
				<input type="text" placeholder="请输入兑换码" class="exchange_input">
				<div class="input_container captcha_code_container">
					<input type="text" placeholder="验证码" maxlength="4">
					<div class="img_change_img">
						<img :src="Img" style=""> 
						<div class="change_img" @click="btn">
						<p>看不清</p> 
						<p style="color: #3b95e9;">换一张</p>
						</div>	
					</div>
				</div>
			</div>
			<div class="determine">兑换</div>
		</div>
	</div>
</template>
<style scoped>
#contain{
	background: #f5f5f5;
}
.captcha_code_container .img_change_img img {
    width: 1.7rem;
    height: .7rem;
    margin-right: .1rem;
}
.exchange_code .exchange_input {
    width: 100%;
    font-size: .25rem;
    color: #666;
    padding: .3rem .1rem;
	border-radius: .15rem;
	border: none;
	outline: none;
}
.captcha_code_container input {
    font-size: .25rem;
    color: #666;
    padding: .1rem;
    border-radius: .15rem;
	flex: 3;
	border: none;
	outline: none;
}
.change_img p{
	width: 0.6rem;
	font-size: .2rem;
    color: #666;
}
.change_img{
	width: 0.6rem !important;
}
	.captcha_code_container .img_change_img .change_img {
		display: -ms-flexbox;
		/* display: flex; */
		flex-direction: "column";
		flex-wrap: wrap;
		width: 2rem;
		justify-content: center;
	}
	.captcha_code_container .img_change_img {
		display: flex;
		align-items: center;
		flex: 2;
		margin-left: .15rem;
		background-color: #fff;
		padding-left: .1rem;
		border-radius: .15rem;
	}
	.captcha_code_container {
		height: 1.1rem;
		display: flex;
		margin-top: .35rem;
	}
	.exchange_code {
		margin-top: .35rem;
		padding: 0 .25rem;
	}
	.determine {
    background-color: #ccc;
    font-size: .35rem;
    color: #fff;
    text-align: center;
    margin: 0 .35rem;
    line-height: .9rem;
    border-radius: .2rem;
    margin-top: .35rem;
}
</style>
<script>
import elmHead from '../components/head'
export default {
	components:{
		elmHead:elmHead
	},
	data() {
		return {
			Img:''
		}
	},
	created() {
		this.btn()
	},
	methods: {
		btn(){
			this.$axios.post('https://elm.cangdu.org/v1/captchas').then(res=>{
				this.Img=res.data.code
				console.log(res)
			})
		}
	},
}
</script>