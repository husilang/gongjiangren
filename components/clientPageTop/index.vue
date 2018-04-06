<style scope>
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
		height: 26px;
		background: url("~/assets/client-logo.png") no-repeat left center;
	}
	.header .info li {
		display: inline-block;
		color: #fff;
		font-size: 12px;
		height: 26px;
		margin-left: 44px;
	}
	.header .info i {
		font-size: 18px;
		vertical-align: middle;
	}
</style>
<template>
	<div class="header">
		<div class="logo fl">
			<router-link tag="p" to="/"></router-link>
		</div>
		<div class="info fr">
			<ul>
				<li><i class="fa fa-phone"></i>&ensp;客服热线：800-8989-6666</li>
				<li><i class="fa fa-mobile"></i>&ensp;手机版</li>
			</ul>
		</div>
	</div>
</template>
