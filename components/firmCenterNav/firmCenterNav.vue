<style scoped lang="less">
	.tabs {
		border-bottom: 1px solid #e8e8ec;
		li {
			float: left;
			padding: 0 16px 10px 16px;
			font-size: 16px;
			margin-right: 8px;
			cursor: pointer;
			color:#000;
	        transition: all 0.2s ease-in-out;
	        &:hover {color: #0099e2;}
			&.cur {
				border-bottom: 1px solid #23beeb;
				color: #0099e2;
			}
		}
	}
</style>
<template>
	<div>
		<div class="tabs">
			<ul class="clearfix">
				<li v-for="item in navs" :class="{'cur': item.path == path}" @click="goPath(item.path)">{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
		props: {
			path: {
				type: String,
				default: 'rescruit'
			}
		},
		data() {
			return {
				navs: [
					{name: '企业招聘', path: 'rescruit'},
					{name: '找人才', path: 'find'},
					{name: '候选人才', path: 'personnel'},
					{name: '面试日程', path: 'schedule'},
					{name: '人才录用', path: 'offer'},
					{name: '人才库', path: 'pool'}
				]
			}
		},
		methods: {
			goPath(path) {
				this.$router.push('/firm/center/'+path);
			}
		}
	}
</script>