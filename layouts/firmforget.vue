<style scoped>
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
</style>
<template>
	<div class="register-layout">
		<firm-page-top></firm-page-top>
		<div class="title">
			<p>企业用户忘记密码</p>
		</div>
		<div class="content"><nuxt/></div>
		<firm-page-footer></firm-page-footer>
	</div>
</template>
<script>
	import firmPageTop from '~/components/firmPageTop/index'
	import firmPageFooter from '~/components/firmPageFooter/index'
	export default {
		components: {
			firmPageTop,
			firmPageFooter
		}
	}
</script>
