<style scoped>
	.register-layout .header {
		height: 72px;
		padding: 0 34px;
		background: #fff;
	}
	.register-layout .header .logo p{
		display: inline-block;
		width: 119px;
		height: 40px;
		background: url("~/assets/icon/reg_logo.png") no-repeat;
		margin-top: 17px;
	}
	.register-layout .header .info li {
		display: inline-block;
		color: #818080;
		font-size: 16px;
		height: 26px;
		margin-left: 44px;
		margin-top: 26px;
	}
	.register-layout .header .info li:first-child {
		padding-left: 30px;
		background: url("~/assets/icon/reg-info.png") no-repeat 0 0px;
	}
	.register-layout .header .info li:last-child {
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