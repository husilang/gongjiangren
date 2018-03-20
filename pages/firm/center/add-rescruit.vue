<style scoped>
	.form-title {
		font-size: 20px;
		color: #2b3e47;
		text-align: center;
		font-weight:bold;
		margin-top: 26px;
		margin-bottom: 24px;
	}
</style>
<template>
	<div>
		<div class="info-container">
			<h4 class="firm-name"> <span>{{firm.name}}</span>
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
					<p>网站排名  <el-tag type="danger" size="mini">{{info.companyRank}}</el-tag></p>
					<p>企业荣誉：优秀企业奖，2017年最佳雇主奖</p>
				</div>
			</div>
		</div>
		<div class="container">
			<el-tabs v-model="tab" @tab-click="handleClick">
				<el-tab-pane name="1" label="企业招聘">
					<div class="form-title">职位描述</div>
					<el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="120px" >
						<el-form-item label="职位类别">

						</el-form-item>
						<el-form-item label="职位性质">

						</el-form-item>
						<el-form-item label="职位类别（工种）">

						</el-form-item>
						<el-form-item label="招聘人数">

						</el-form-item>
						<el-form-item label="职位月薪">

						</el-form-item>
						<el-form-item label="职位描述">

						</el-form-item>
						<el-form-item label="福利待遇">

						</el-form-item>
						<el-form-item label="项目名称">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="工作时间">
							<el-date-picker
									type="daterange"
									range-separator="至"
									start-placeholder="开始日期"
									end-placeholder="结束日期">
							</el-date-picker>
						</el-form-item>
						<el-form-item label="工作地点">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="劳务代理公司">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="工作年限">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="证书要求">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="证书要求描述">
							<el-input></el-input>
						</el-form-item>
					</el-form>
				</el-tab-pane>
				<el-tab-pane name="2" label="候选人才">候选人才</el-tab-pane>
				<el-tab-pane name="3" label="面试日程">面试日程</el-tab-pane>
				<el-tab-pane name="4" label="人才录用">人才录用</el-tab-pane>
				<el-tab-pane name="5" label="人才库">人才库</el-tab-pane>
			</el-tabs>
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
					firm: firm || {}
				}
			} catch (error) {
				error({statusCode: 404, message: 'Post not found'})
			}
		},
		middleware: 'firmauth',
		layout: 'firmcenter',
		data() {
			return {
				tab: '1',
				info: {},
				firm: {},
				form: {},
				rules: {}
			}
		},
		methods: {
			handleClick() {}
		}
	}
</script>