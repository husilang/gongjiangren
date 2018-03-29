<style scoped>
	.header {
		height: 27px;
		padding: 0 20px 0 15px;
		background: #0694ff;
		color: #fff;
	}
	.header .logo p{
		cursor: pointer;
		display: inline-block;
		width: 119px;
		height: 27px;
		background: url("~/assets/icon/reg_logo.png") no-repeat;
	}
	.header .info li {
		display: inline-block;
		color: #fff;
		font-size: 12px;
		height: 26px;
		margin-left: 44px;
	}
	.header .info li:first-child {
		padding-left: 30px;
		background: url("~/assets/icon/reg-info.png") no-repeat 0 0px;
	}
	.header .info li:last-child {
		padding-left: 22px;
		background: url("~/assets/icon/reg-info.png") no-repeat 0 -25px;
	}
</style>
<template>
	<div class="header">
		<div class="logo fl">
			<router-link tag="p" to="/"></router-link>
		</div>
		<div class="info fr">
			<ul>
				<li>客服热线：800-8989-6666</li>
				<li>手机版</li>
			</ul>
		</div>
	</div>
</template>