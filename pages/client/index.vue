<template>
	<div>
		<client-page-top></client-page-top>

		<firm-page-footer></firm-page-footer>
	</div>
</template>
<script type="text/ecmascript-6">
	import clientPageTop from '~/components/clientPageTop'
	import firmPageFooter from '~/components/firmPageFooter'
	export default{
		components: {
			clientPageTop,
			firmPageFooter
		}
	}
</script>