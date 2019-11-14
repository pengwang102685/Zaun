<template>
	<div>
		<elmHead>
			<template v-slot:left><router-link :to="{name:'users'}">&lt;</router-link> </template>
			<template v-slot:center>我的优惠</template>
		</elmHead>
		 <div class="contain" v-if="$store.state.user.userName" >
			<div class="yh-btn">
				<div class="yh-item">
					<span style="margin-right:1.5rem" @click="Is=0" :class="{active:Is==0}">优惠</span>
					<span @click="Is=1" :class="{active:Is==1}">商家代金券</span>
				</div>
			</div>
			<div v-if="Is==0" class="con">
				<header>
					<div>
						有 <span style="color:red">3</span> 个红包即将到期
					</div>
                    <div><router-link :to="{name:'red'}">红包说明</router-link> </div>
                </header>
				<!-- 优惠券 -->
				<ul>
					<li>
						<div class="list-item">
							<div  class="item-left">
								<span>¥</span>
								<span style="font-size: .6rem;color: #ff5340;">1</span> 
								<span>.</span>
								<span>0</span> 
								<p>满 20 元可用</p>
							</div> 
							<div class="item-center" style="flex: 2;margin-left: .7rem;">
								<h4>分享红包</h4> 
								<p >2017-05-23到期</p> 
								<p>限收货手机号为 13681711254</p>
							</div>
								<div style="font-size: .35rem;color: #ff5340;">剩3日</div>
						</div> 
					</li>
					<li>
						<div class="list-item">
							<div  class="item-left">
								<span>¥</span>
								<span style="font-size: .6rem;color: #ff5340;">2</span> 
								<span>.</span>
								<span>0</span> 
								<p>满 40 元可用</p>
							</div> 
							<div class="item-center" style="flex: 2;margin-left: .7rem;">
								<h4>分享红包</h4> 
								<p >2017-05-23到期</p> 
								<p>限收货手机号为 13681711254</p>
							</div>
								<div style="font-size: .35rem;color: #ff5340;">剩3日</div>
						</div> 
					</li>
					<li>
						<div class="list-item">
							<div  class="item-left">
								<span>¥</span>
								<span style="font-size: .6rem;color: #ff5340;">4</span> 
								<span>.</span>
								<span>5</span> 
								<p>满 30 元可用</p>
							</div> 
							<div class="item-center" style="flex: 2;margin-left: .7rem;">
								<h4>分享红包</h4> 
								<p >2017-05-23到期</p> 
								<p>限收货手机号为 13681711254</p>
							</div>
								<div style="font-size: .35rem;color: #ff5340;">剩3日</div>
						</div> 
						<footer class="list_item_footer">
							<p >限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
						</footer>
					</li>
				</ul>
				<router-link  class="history_hongbao" :to="{name:'historied'}">
					<span class="check_history">查看历史红包 &gt;</span>
				</router-link>
				<footer class="hongbao_footer">
					<router-link :to="{name:'exchange'}" class="hongbao_style" style="border-right: 1px solid rgb(245, 245, 245);">
                          兑换红包
                    </router-link>
					<router-link :to="{name:'commend'}" class="hongbao_style">推荐有奖 </router-link>
				</footer>
			</div>
			<div v-else class="con">
				<div style="line-height:1rem;text-align:right">
					<router-link :to="{name:'coupon'}">商家代金券说明</router-link>
				</div>
				<div style="text-align:center">
					<img src="../assets/loding.png" alt="">
					<p>无法使用代金券</p>
					<p>非客户端或客户端版本过低</p>
					<router-link :to="{name:'app'}">
					<div style=" background-color: #56d176;font-size: .325rem;color: #fff; padding: .15rem; border-radius: .07rem;"> 下载或更新客户端</div>
					</router-link>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<style scoped>
.hongbao_footer .hongbao_style{
    flex: 1;
    line-height: 1rem;
    text-align: center;
    font-size: .35rem;
    color: #555;
}
.hongbao_footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
}
.check_history{
	font-size: .25rem;
    color: #999;
    margin-right: .1rem;
}
.history_hongbao{
	padding: .25rem 0 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.list_item_footer p{
	list-style-type: disc;
    font-size: .2rem;
    color: #999;
    margin-left: .1rem;
}
.list_item_footer{
	background-color: #f9f9f9;
    padding: .15rem;
    border-bottom-left-radius: .25rem;
	border-bottom-right-radius: .25rem;
}
.item-center p{
	list-style-type: disc;
    margin-left: -.35rem;
	line-height: .4rem;
    font-size: .2rem;
    color: #999;
}
.item-center h4{
	font-size: .35rem;
    color: #666;
    margin-left: -.35rem;
}
	.list-item{
		display: flex;
		justify-content: space-between;
		padding: .5rem .25rem .4rem;
	}
	.item-left p{
		font-size: .1rem;
		color: #999;
	}
	.item-left{
		font-size: .325rem;
		color: #ff5340;
		font-weight: 700;
	}
	.item-left{
		font-size: 0;border-right: .025rem dotted #ccc;flex: 1;
	}
	.con ul li{
		background: #fff url('../assets/top_bg.png') repeat-x;
		background-size: .25rem .1rem;
		margin-bottom: .25rem;
		border-radius: .125rem;
	}
	header a{
		color: #3190e8;
		font-size: .2rem
	}
	header *{
		color: #666;
		font-size: .2rem
	}
	header{
		display: flex;
		justify-content: space-between;
		font-size: .2rem;
		line-height: 1rem;
	}
	.con{
		padding: 0 .2rem;
		margin: 0;
		list-style: none;
		font-style: normal;
		text-decoration: none;
		border: none;
		color: #333;
		font-weight: 400;
		font-family: Microsoft Yahei;
		box-sizing: border-box;
	}
	.yh-btn{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 1rem;
		background-color: #fff;
	}
	.yh-btn span{
		text-align: center;
		font-size: .3rem;
		color: #333;
		padding-bottom: .1rem;
		border-bottom: .01rem solid #fff;
	}
	.yh-btn .active{
		border-bottom-color: #3190e8;
   		color: #3190e8;
	}
</style>>
	
</style>
<script>
import elmHead from '../components/head'
export default {
	components: {
		elmHead:elmHead
	},
	data() {
		return {
			Is:0
		}
	},
}
</script>