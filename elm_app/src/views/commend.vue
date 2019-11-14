<template>
	<div id="contain">
		<elmHead>
			<template v-slot:left> <span @click="$router.back(-1)">&lt;</span></template>
			<template v-slot:center>推荐有奖</template>
		</elmHead>
		<div class="recommend_center"><img src="https://elm.cangdu.org/elm/static/img/activity.png"></div>
		<div class="invite_firend">
			<div>
				<img src='../assets/img/hwx.png' />
				<p>邀请微信好友</p>
			</div>
			<div>
				<img src="../assets/img/hqq.png" />
				<p>邀请QQ好友</p>
			</div>
			<div>
			<img src="../assets/img/hh.png"/>
				<p>面对面邀请</p></div>
		</div>
		<div class="invite_people">
			<div>
				<p>
					累计收益<br><span class="zero">0</span>元
				</p>
			</div>
			<div>
				<p>
					成功邀请<br><span class="zeros">0</span>人
				</p>
			</div>
		</div>
		<p class="income_detail">-收益明细-</p>
		<div class="income_tips">
			<img src="../assets/img/hq.png" class="down_img"/>
			<p>还不赶紧去邀请好友</p>
		</div>
	</div>
</template>
<script>
import elmHead from '../components/head'
export default {
	components:{
		elmHead
	}
}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.down_img{
		width: 0.7rem;
		height: 0.8rem;
		margin-left: 45%;
		margin-bottom: 0.234375rem;
	}
	.income_tips{
		margin-top: 0.1rem;
	}
	.income_tips p{
		text-align: center;
		color: #999;
		font-size: 0.2rem;
	}
	.income_detail{
		margin-top:0.1rem;
		text-align: center;
		font-size: 0.28rem;
		color:#787878;
	}
	.zero{
		font-size: 0.3rem;
		color: #fb4c31;
	}
	.zeros{
		font-size: 0.3rem;
		color: #595959;
	}
	.lyj_box{
		height: 20rem;
		background: #f5f5f5;
	}
	.recommend_center{
		height:5rem ;
		background: red;
		margin-bottom:0.15625rem;
	}
	.recommend_center img{
		width: 100%;
		height: 100%;
	}
	.invite_firend{
		height: 2.5rem;
		background: white;
		display: flex;
	}
	.invite_firend div{
		flex: 1;
	}
	.invite_firend div img{
		width: 1rem;
		height: 1rem;
		margin:0.625rem 0 0 0.5rem;
	} 
	.invite_firend div p{
		text-align: center;
		font-size: 0.24rem;
	}
	.invite_people{
		height: 1.09375rem;
		margin-top: 0.025rem;
		display: flex;
	}
	.invite_people div{
		flex: 1;
		height: 1rem;
	}
	.invite_people div p{
		text-align: center;
		font-size: 0.22rem;
		color:#808080;
	}
	.invite_people div:nth-of-type(1){
		border-right: 2px #e4e4e4 solid;
	}
</style>