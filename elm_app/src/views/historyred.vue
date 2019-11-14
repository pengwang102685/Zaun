<template>
	<div id="contain">
		<elmhead>
			<template v-slot:left>
				<router-link :to="{name:'benefit'}">&lt;</router-link>
			</template>
			<template v-slot:center>历史红包</template>
		</elmhead>
		<div class="contain hongbao_list_ul" style="transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
			<ul>
				<li class="hongbao_list_li">
					<section class="list_item">
						<div class="list_item_left">
							<span >¥</span> 
							<span >5</span> 
							<span >.</span> 
							<span >0</span> 
							<p >满 25 元可用</p>
							</div> 
						<div class="list_item_right"><h4>普通红包</h4> 
						<p>2017-05-13到期</p> 
						<p>限收货手机号为 13681711254</p>
						</div>
					</section> 
					<svg class="expired">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expired">
						</use>
					</svg>
				</li>
				<li class="hongbao_list_li">
					<section class="list_item">
						<div class="list_item_left">
							<span >¥</span> 
							<span >5</span> 
							<span >.</span> 
							<span >0</span> 
							<p >满 25 元可用</p>
							</div> 
						<div class="list_item_right"><h4>普通红包</h4> 
						<p>2017-05-13到期</p> 
						<p>限收货手机号为 13681711254</p>
						</div>
					</section> 
					<svg class="expired">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expired">
						</use>
					</svg>
				</li>
				<li class="hongbao_list_li">
					<section class="list_item">
						<div class="list_item_left">
							<span >¥</span> 
							<span >4</span> 
							<span >.</span> 
							<span >0</span> 
							<p >满 25 元可用</p>
							</div> 
						<div class="list_item_right"><h4>普通红包</h4> 
						<p>2017-05-13到期</p> 
						<p>限收货手机号为 13681711254</p>
						</div>
					</section> 
					<svg class="expired">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expired">
						</use>
					</svg>
				</li>
				<li class="hongbao_list_li">
					<section class="list_item">
						<div class="list_item_left">
							<span >¥</span> 
							<span >4</span> 
							<span >.</span> 
							<span >0</span> 
							<p >满 25 元可用</p>
							</div> 
						<div class="list_item_right"><h4>普通红包</h4> 
						<p>2017-05-13到期</p> 
						<p>限收货手机号为 13681711254</p>
						</div>
					</section> 
					<svg class="expired">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expired">
						</use>
					</svg>
				</li>
			</ul>
		</div>
	</div>
</template>
<style scoped>
.hongbao_list_ul .hongbao_list_li .list_item .list_item_right p{
    list-style-type: disc;
    margin-left: -.35rem;
    font-size: .2rem;
    color: #999;
}
.hongbao_list_ul .hongbao_list_li .list_item .list_item_right h4{
    font-size: .35rem;
    color: #666;
    margin-left: -.35rem;
}
.hongbao_list_ul .hongbao_list_li .list_item .list_item_left p{
    font-size: .2rem;
    color: #999;
}
.hongbao_list_ul .hongbao_list_li .list_item .list_item_left span{
    font-size: .35rem;
    color: #ccc;
    font-weight: 700;
}
.hongbao_list_ul .hongbao_list_li .list_item .list_item_right{
    flex: 2;
    margin-left: .7rem;
}
.hongbao_list_ul .hongbao_list_li .list_item .list_item_left{
    font-size: 0;
    border-right: .025rem dotted #ccc;
    flex: 1;
}
.hongbao_list_ul .hongbao_list_li .list_item{
    display: flex;
    justify-content: space-between;
    padding: .5rem .25rem .4rem;
}
.hongbao_list_ul .hongbao_list_li {
    background: #fff url('../assets/lsimg.png') repeat-x;
    background-size: .5rem .2rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
	height: 2rem;
}
.hongbao_list_ul {
    padding: 1.2rem .25rem;
}
.contain{
	background: rgb(243, 243, 237);
}
*{
	padding: 0;
    margin: 0;
    font-size: .4rem;
    list-style: none;
    box-sizing: border-box;
}
</style>
<script>
import elmhead from '../components/head'
export default {
	components:{
		elmhead
	}
}
</script>