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
					<p>网站排名
						<el-tag type="danger" size="mini">{{info.companyRank}}</el-tag>
					</p>
					<p>企业荣誉：优秀企业奖，2017年最佳雇主奖</p>
				</div>
			</div>
		</div>
		<div class="container">
			<firm-center-nav path="rescruit"></firm-center-nav>
			<div class="inner-container">
				<el-button-group class="btn-menu-group">
					<el-button :type="tab == 1?'primary':'default'" plain @click="tab=1">正在招聘</el-button>
					<el-button :type="tab == 2?'primary':'default'" plain @click="tab=2">历史招聘</el-button>
				</el-button-group>
				<el-row type="flex" justify="space-between" style="margin-top: 18px;">
					<el-col :span="12">
						<el-input>
							<el-button slot="append" icon="el-icon-search"></el-button>
						</el-input>
					</el-col>
					<el-col :span="4">
						<el-button type="success">优选人才</el-button>
					</el-col>
					<el-col :span="6" style="text-align: right">
						<router-link class="el-button el-button--primary" tag="button"
						             to="/firm/center/employ/add-rescruit">
							<span>发布新职位</span>
						</router-link>
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="intro container">
			<div class="clearfix item">
				<div class="fl left-item">
					<p class="row1">
						<span>项目监理</span>
						<span><i>|</i>龙江核电站2期工程</span>
						<span><i>|</i><b>8</b>人</span>
					</p>
					<p class="row2">
						<span>管理</span>
						<span><i>|</i>1.8w-2.5w</span>
						<span><i>|</i>3-5年</span>
						<span><i>|</i>怒江</span>
					</p>
					<p class="row3">
						<span>发布时间：2018年2月2日</span>
						<span>搜索人才</span>
					</p>
				</div>
				<div class="fr right-item">
					<p class="row1">
			            <span><b>12</b>未阅读</span>
			            <span><b>12</b>面试中</span>
			            <span><b>12</b>候选人才</span>
			            <span><b>12</b>录用人才</span>
						<span v-if="tab==1"><b>70%</b>招聘完成率</span>
					</p>
					<p class="row2" v-if="tab==1"><span>再发布</span> | <span>编辑职位</span></p>
					<p class="row2" v-if="tab==2"><span>编辑职位</span> | <span>关闭职位</span></p>
				</div>
			</div>
		</div>
		<el-pagination
				style="text-align: center;margin-top: 14px;"
				layout="prev, pager, next"
				:total="1000">
		</el-pagination>
	</div>
</template>
<script type="text/ecmascript-6">
	import {getFirmCenter, getFirmInfo, getJobList} from '~/API/firm';
	import firmCenterNav from '~/components/firmCenterNav/firmCenterNav';
	export default  {
		async asyncData({isClient, params, error}) {
			try {
				let {data: info} = await getFirmCenter();
				let {data: firm} = await getFirmInfo();
				let {data: list} = await getJobList({pageNo: 1, pageSize: 5});
				return {
					info: info || {},
					firm: firm || {},
					list: list || []
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
				list: []
			}
		},
		components: {
			firmCenterNav
		},
		methods: {
			async pageInit() {
				let {data: info} = await getFirmCenter();
				let {data: firm} = await getFirmInfo();
				this.info = info;
				this.firm = firm;
			}
		}
	}
</script>

