<style scoped>
	.register-layout {

	}
	.register-layout .header {
		height: 72px;
		padding: 0 34px;
		background: #fff;
	}
	.register-layout .header .logo p{
		display: inline-block;
		width: 119px;
		height: 40px;
		background: url("../assets/icon/reg_logo.png") no-repeat;
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
		background: url("../assets/icon/reg-info.png") no-repeat 0 0px;
	}
	.register-layout .header .info li:last-child {
		padding-left: 22px;
		background: url("../assets/icon/reg-info.png") no-repeat 0 -25px;
	}
	.register-layout .title {
		text-align: center;
		height: 80px;
		background: url("../assets/reg-title.jpg") no-repeat 0 0 /cover;
		font-size: 36px;
		line-height: 80px;
		color: #fff;
	}
	.register-layout .content {
		background: #e7ebf3;
		padding-top: 29px;
		padding-bottom: 38px;
	}
	.register-layout .footer {
		height: 83px;
		background: url("../assets/reg-footer.jpg") no-repeat center bottom;
		font-size: 12px;
		line-height: 83px;
		color: #7c8797;
	}
	.register-layout .footer p {
		padding-left: 82px;
		margin: 0 auto;
		width: 212px;
		background: url("../assets/icon/reg_logo.png") no-repeat 0 center /64px;
	}
</style>
<template>
	<div class="register-layout">
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
		<div class="title">
			<p>企业用户忘记密码</p>
		</div>
		<div class="content"><nuxt/></div>
		<div class="footer">
			<p>版权所有 gj163.com&nbsp;&copy;</p>
		</div>
	</div>
</template>
