<template>
	<div class="register-layout">
		<firm-page-top></firm-page-top>
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
