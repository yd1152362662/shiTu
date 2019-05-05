<template>
	
	<div class="tips-box">
		<router-link :to="'/cook_book?menuId='+info.m_id" class='underline_none'>
		<img :src="info.m_img" alt="" />
		<div class="tips-title">{{info.m_name}}</div>
		<div class="tips-expansion-plate">
			点击查看详情
		</div>
		</router-link>
	</div>
	
</template>

<script>
	export default {
		name:'SearchTips',
		props:{
			info:Object
		}
	}
	
</script>

<style >
	.tips-box {
		width: 20%;
		height: 250px;
		background-color: antiquewhite;
		margin: 4%  2.3% 0 2.3%;
		position: relative;
		border: 1px solid burlywood;
	}
	.tips-box:hover {
		box-shadow: 0 0 20px #BC8F8F;
	}
	.tips-box img {
		width: 100%;
		height: 200px;
	}
	a {
		text-decoration: none;
		color: rgb(139,69,19);
	}
	.tips-title {
		text-align:center;
		line-height: 40px;
		vertical-align: middle;
	}
	.tips-expansion-plate {
		width: 100%;
		height: 30px;
		background-color:rgba(0,0,0,0.3);
		color: #FFFFFF;
		text-align: center;
		position: absolute;
		top: 68%;
		left: 0;
		font-size: 13px;
		line-height: 30px;
		vertical-align: middle;
	}
</style>