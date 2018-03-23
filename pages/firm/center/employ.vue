<style lang="less">
	@import "employ.less";
</style>
<template>
	<div>
		<div class="info-container">
			<h4 class="firm-name"><span>{{firm.name}}</span>
				<el-tag type="danger" size="mini">智能优选</el-tag>
			</h4>
			<div class="clearfix info">
				<div class="fl">
					<p>企业综合评价指数：No.123(135)&emsp;|&emsp;网站使用时间： 365天</p>
					<p>
						<span>正在招聘人数 <b>{{info.recruitingAmount}}</b></span> &ensp;
						<span>累计招聘人数 <b>{{info.recruitedAmount}}</b></span> &ensp;
						<span>正在平台管理人数 <b>{{info.nowAdminAmount}}</b></span> &ensp;
						<span>累计平台管理人数 <b>{{info.totalAdminAmount}}</b></span> &ensp;
					</p>
				</div>
				<div class="fr right-info">
					<span class="line"></span>
					<p><i class="fa fa-list-ul" aria-hidden="true"style="font-size: 13px;"></i>&ensp;网站排名
						<el-tag type="danger" size="mini">{{info.companyRank}}</el-tag>
					</p>
					<p><i class="fa fa-trophy" aria-hidden="true"></i>&ensp;企业荣誉：优秀企业奖，2017年最佳雇主奖</p>
				</div>
			</div>
		</div>
		<div>
			<nuxt-child />
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import {getFirmCenter, getFirmInfo} from '~/API/firm';
	export default  {
		async asyncData({isClient, params, error}) {
			try {
				let {data: info} = await getFirmCenter();
				let {data: firm} = await getFirmInfo();
				return {
					info: info || {},
					firm: firm||{}
				}
			} catch (error) {
				error({statusCode: 404, message: 'Post not found'})
			}
		},
		middleware: 'firmauth',
		layout: 'firmcenter',
		data() {
			return {
				info: {},
				firm: {},
			}
		},
		methods: {
		}
	}
</script>