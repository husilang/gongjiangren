<style lang="less">
	@import "center.less";
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
				<el-tab-pane name="rescruit" label="企业招聘">
				</el-tab-pane>
				<el-tab-pane name="personnel" label="候选人才">
					<el-button-group size="small">
						<el-button type="primary">新简历</el-button>
						<el-button>待沟通</el-button>
						<el-button>待面试</el-button>
						<el-button>录用</el-button>
					</el-button-group>
					<el-row>
						<el-button>筛选</el-button>
						<el-select></el-select>
						<el-select></el-select>
						<el-input size="small"></el-input>
						<el-button>移动到待沟通</el-button>
						<el-button>淘汰</el-button>
						<el-button>搜索人才</el-button>
					</el-row>
				</el-tab-pane>
				<el-tab-pane name="3" label="面试日程"></el-tab-pane>
				<el-tab-pane name="4" label="人才录用"></el-tab-pane>
				<el-tab-pane name="5" label="人才库"></el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import {getFirmCenter, getFirmInfo, getJobList} from '~/API/firm';
	export default  {
		async asyncData({isClient,params,error}) {
			try{
				let {data: info} = await getFirmCenter();
				let {data: firm} = await getFirmInfo();
				let {data: list} = await getJobList({pageNo:1,pageSize:5});
				return {
					info: info||{},
					firm: firm||{},
					list: list||[]
				}
			} catch (error) {
				error({ statusCode: 404, message: 'Post not found' })
			}
		},
		middleware: 'firmauth',
		layout: 'firmcenter',
		data() {
			return {
				tab: 'personnel',
				info: {},
				firm: {},
				list: []
			}
		},
		methods: {
			async pageInit() {
				let {data: info} = await getFirmCenter();
				let {data: firm} = await getFirmInfo();
				this.info = info;
				this.firm = firm;
			},
			handleClick(vueInstance) {
				this.$router.push('/firm/center/'+vueInstance.name)
			}
		}
	}
</script>

