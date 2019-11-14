<template>
	<div class="contain">
		<div class="nav">
			<div class="price">
				<span style="font-size:.2rem"><slot name="tit-left"></slot></span>
				
				<slot name="tit-right"></slot>
				<p>
					<span style="font-size:.6rem;line-height:1.2rem"><slot name="num"></slot></span>
					<span style="font-size:.3rem"><slot name="units"></slot></span>
				</p>
				<router-link to="/">
					<div class="btns">
						<slot name="btn"></slot>
					</div>
				</router-link>
			</div>
		</div>
		<p class="jy"><slot name="loding-tit"></slot></p>
		<div class="no_log">
			<img src="../assets/loding.png" alt="">
			<slot name="loding-info"></slot>
		</div>
	</div>
</template>
<script>
import balance from '../css/balance.css'
export default {
	
}
</script>