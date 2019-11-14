<template>
	<div id="contain" style="background:rgb(247, 247, 233)">
		<elmHead>
			<template v-slot:left>
				<router-link :to="{name:'shopDetail'}">&lt;</router-link>
			</template>
			<template v-slot:center>食品监督安全公示</template>
		</elmHead>
		<div class="contain">
			<!-- 食品监督安全公示 -->
			<div class="shop_status_container">
				<header>
					食品监督安全公示
				</header>
				<div class="shop_statu_detail">
					<div><i class="iconfont filu" :class="{active:!$route.params.list}" >{{$route.params.list?'&#xe64d;':'&#xe619;'}}</i></div>
            <div class="color-gray"> 
					<div>
						<li>
							<span>监督检查结果：</span>
							<span  class="filu" :class="{active:!$route.params.list}">{{$route.params.list?'良好':'差'}}</span>
						</li>
						<li>
							<span>检查日期：</span>
							<span></span>
						</li>
					</div>
				</div>
			</div>
		</div>
		<!-- 工商登记信息 -->
		<div class="shop_status_container">
			<header>
				工商登记信息
			</header>
			<ul>
				<li>企业名称</li>
				<li>工商执照注册号</li>
				<li>注册资本</li>
				<li>注册地址</li>
				<li>属地监管所</li>
				<li>法定代表人</li>
				<li>经营范围</li>
			</ul>
		</div>
		<!-- 餐饮许可证 -->
		<div class="shop_status_container">
			<header>餐饮许可证</header>
			<ul>
				<li>企业名称</li>
				<li>工商执照注册号</li>
				<li>注册资本</li>
				<li>注册地址</li>
				<li>属地监管所</li>
				<li>法定代表人</li>
				<li>经营范围</li>
			</ul>
		</div>
	</div>
	</div>
</template>
<style scoped>
.iconfont{
  font-size: 1rem;
}
.filu{
  color: rgb(126, 211, 33);
  margin-right: .6rem
}
.active{
  color: rgb(208, 2, 27);
}
	.check_date li span,ul li{
		line-height: .5rem;
		font-size: .4rem;
		color: #666;
		padding-left: .2rem
	}
	.shop_statu_detail {
		display: flex;
		padding: .3rem;
	}
	.shop_status_container header {
		line-height: .9rem;
		padding: 0 .3rem;
		border-bottom: .025rem solid #f1f1f1;
		font-size: .3rem;
		color: #333;
	}
	.shop_status_container ul li{
		line-height: .5rem;
		font-size: .3rem
	}
	.shop_status_container {
		background-color: #fff;
		padding:.2rem 0;
		margin-bottom: .2rem;
	}
</style>
<script>
import elmHead from '../components/head'
export default {
	components:{
		elmHead
	}
}
</script>