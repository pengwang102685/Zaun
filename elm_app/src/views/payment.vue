<template>
	<div id="contain">
		<elmHead>
			<template v-slot:left><router-link :to="{name:'vip'}">&lt;</router-link></template>
			<template v-slot:center>在线支付</template>
		</elmHead>
		<div class="contain">
			<div class="date" style="text-align:center;padding:.6rem;background:white">
				<p>支付剩余时间</p>
				<h2 style="font-size:.6rem">
					<span>00</span> : <span>{{minute}}</span> : <span>{{second}}</span>
				</h2>
			</div>
			<p style="padding:.2rem">选择支付方式</p>
			<ul class="payment">
				<li>
					<div class="zf-img"><img src="../assets/zfb.png" alt=""></div>
					<span>支付宝</span>
					<div class="zf-btn" @click="num=0" :class="{active:num==0}">√</div>
				</li>
				<li>
					<div class="zf-img"><img src="../assets/wx.png" alt=""></div>
					<span>微信</span>
					<div class="zf-btn" @click="num=1" :class="{active:num==1}">√</div>
				</li>
			</ul>
			<div class="determine">确定支付</div>
		</div>
	</div>
</template>
<style scoped>
	.determine{
		width: 90%;
		height: 1rem;
		text-align: center;
		color: white;
		background: #4cd964;
		margin: 0 auto;
		line-height: 1rem;
		border-radius: .06rem;
	}
	.payment{
		background: white
	}
	.payment li{
		padding: .2rem;
		box-shadow: .01rem 0 .01rem gainsboro
	}
	.payment .zf-img{
		margin-right:.3rem 
	}
	.payment .zf-img img{
		width: 1rem;
		height: 1rem;
	}
	.payment .active{
		background: #4cd964
	}
	.zf-btn{
		width: .6rem;
		height: .6rem;
		border-radius: 50%;
		background: #ccc;
		color: white;
		text-align: center;
		line-height: .6rem;
		float: right;
		margin-top: .3rem
	}
	.payment span{
		font-size: .4rem;
		font-weight: 400
	}
	.payment li>*{
		display: inline-block;
		vertical-align: middle
	}
</style>
<script>
import elmHead from '../components/head'
export default {
	components:{
		elmHead:elmHead
	},
	data(){
		return{
			num:0,
			minute:15,
			second:'00',
			tid:''
		}
	},
	created() {
		var str = 60
		this.tid=setInterval(()=>{
			str--
			this.$nextTick(()=>{
				if(this.second=='00'){
					this.minute--
					str=59
				}
				this.second=add(str)
			})
		},1000)
		function add(str){
			return str < 10 ? '0'+str:str
		}
	},
	beforeDestroy() {
		clearInterval(this.tid)
	},
}
</script>