<style scoped>
	.form {
		padding: 0 40px;
	}
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
					<el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="170px" size="small" class="form">
						<el-form-item label="项目名称">
							<el-row>
								<el-col :span="10">
									<el-select style="display: block;width: 100%;">

									</el-select>
								</el-col>
								<el-col :span="2" style="margin-left: 20px;">
									<el-button type="text">新建项目</el-button>
								</el-col>
								<el-col :span="8">
									<el-checkbox>
										需要劳务代理服务
									</el-checkbox>
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label="职位名称">
							<el-row>
								<el-col :span="10">
									<el-input></el-input>
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label="工种">
							<el-row>
								<el-col :span="10">
									<el-select style="display: block;width: 100%"></el-select>
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label="工作年限">
							<el-row>
								<el-col :span="10">
									<el-input></el-input>
								</el-col>
								<el-col :span="4" style="margin-left: 20px;">
									年及以上
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label="年龄要求">
							<el-row>
								<el-col :span="10">
									<el-input></el-input>
								</el-col>
								<el-col :span="1" style="margin-left: 20px;">
									至
								</el-col>
								<el-col :span="10">
									<el-input></el-input>
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label="证书要求">
							<el-row>
								<el-col :span="10">
									<el-select style="display: block;width: 100%"></el-select>
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label="证书要求描述">
							<el-row>
								<el-col :span="10">
									<el-select style="display: block;width: 100%"></el-select>
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label="工作性质">
							<el-row>
								<el-col :span="10">
									<el-radio-group>
										<el-radio :label="3">备选项</el-radio>
										<el-radio :label="6">备选项</el-radio>
										<el-radio :label="9">备选项</el-radio>
									</el-radio-group>
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label="工作起止时间">
							<el-row>
								<el-col :span="10">
									<el-date-picker
											type="daterange"
											range-separator="至"
											start-placeholder="开始日期"
											end-placeholder="结束日期">
									</el-date-picker>
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label="是否商议雇佣终止时间">
							<el-row>
								<el-col :span="10">
									<el-select style="display: block;width: 100%"></el-select>
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label="具体工作内容描述">
							<el-row>
								<el-alert :closable="false" size="mini" title="（请勿输入公司邮箱、联系电话、薪资面议、性别歧视字样及其他外链接，否则将自动删除，不可恢复）" type="warning"></el-alert>
							</el-row>
						</el-form-item>
						<el-form-item label="工作地点">
							<el-row>
								<el-col :span="10">
									<el-input></el-input>
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label="职位月薪">
							<el-row>
								<el-col :span="8">
									<el-input></el-input>
								</el-col>
								<el-col :span="2" style="text-align: center">
									千元至
								</el-col>
								<el-col :span="8">
									<el-input>

									</el-input>
								</el-col>
								<el-col :span="2" style="text-align: center">
									千元
								</el-col>
								<el-col :span="4">
									<el-checkbox>
										显示为面议
									</el-checkbox>
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label="福利待遇">
							<el-checkbox-group>
								<el-checkbox label="复选框 A"></el-checkbox>
								<el-checkbox label="复选框 B"></el-checkbox>
								<el-checkbox label="复选框 C"></el-checkbox>
								<el-checkbox label="禁用" disabled></el-checkbox>
								<el-checkbox label="选中且禁用" disabled></el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="招聘人数">
							<el-row>
								<el-col :span="10">
									<el-input></el-input>
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label="发布时长">
							<el-row>
								<el-col :span="10">
									<el-select style="display: block;width: 100%;"></el-select>
								</el-col>
							</el-row>
						</el-form-item>
						<el-form-item label-width="0">
							<el-row type="flex" justify="center" style="margin-top: 25px;;">
								<el-col :span="10">
									<el-button size="medium" type="primary" style="display: block;width: 100%">企业招聘信息发布</el-button>
								</el-col>
							</el-row>
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