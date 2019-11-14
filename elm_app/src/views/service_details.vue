<template>
	<div id="contain">
		<elmHead>
		<template v-slot:left><router-link :to="{name:'service'}">&lt;</router-link></template>
		<template v-slot:center>{{$route.params.tit}}</template>
		<template v-slot:right></template>
		</elmHead>
		<div v-if="datas.img!=''" class="contain">
			<div v-for="(i,$index) in datas.img" :key="$index" >
			<img :src="i" alt="" style="width:100%">
			<p style="padding:.2rem;font-size:.3rem" v-html="datas.info[$index]"></p>
			</div>
		</div>
		<div v-else class="contain">
			<p  style="padding:.2rem;font-size:.3rem" v-html="$route.params.info"></p>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
import elmHead from '../components/head'
export default {
	components:{
		elmHead:elmHead
	},
	data(){
		return{
			datas:{}
		}
	},
	created(){
		var arr=this.$route.params.info.split('![](')
		var Img=[],Info=[]
		arr.forEach(element => {
			Img.push(element.split(') ##')[0])
			Info.push(element.split(') ##')[1])
		});
		this.datas.img=Img.slice(1)
		this.datas.info=Info.slice(1)
	}
}
</script>