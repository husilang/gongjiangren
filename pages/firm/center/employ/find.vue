<style lang="less">
	@import "employ.less";
</style>
<style scoped lang="less">
	.find-condition{
		.el-row{
			padding-top: 10px;
			padding-bottom: 9px;
			border-bottom: 1px dashed #ccc;
			font-size: 14px;
			color: #424a50;
			line-height: 28px;

			b{
				display: inline-block;
				width: 78px;
				padding-left: 4px;
				font-weight:normal;
				margin-right: 16px;
			}
	        span {
		        margin-right: 18px;
	        }
		}
	}
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
			<firm-center-nav path="find"></firm-center-nav>
			<div class="inner-container">
				<el-row type="flex">
					<el-col :span="12">
						<el-input>
							<el-button slot="append" icon="el-icon-search"></el-button>
						</el-input>
					</el-col>
					<el-col :span="3" style="margin-left: 20px;">
						<el-button type="success">优选人才</el-button>
					</el-col>
					<el-col :span="6">
						<p style="font-size: 14px;color:#0d0d0d;">正在热搜：</p>
						<p style="font-size: 14px;color: #fa6a43;margin-top: 8px;">电工&ensp;模板工&ensp;司机</p>
					</el-col>
				</el-row>
				<el-row style="margin-top: 14px;">
					<el-tag closable>搜索：精英人才/本科/产品经理</el-tag>
				</el-row>
				<div class="find-condition">
					<el-row class="clearfix">
						<b>工种：</b>
						<span>驾驶员</span>
						<span>工程机械操作修理工</span>
						<span>土建专业</span>
						<span>市政专业</span>
						<span>安装专业</span>
						<span>机械化施工专业</span>
						<span>盾构施工专业</span>
						<span>水利专业</span>
						<el-button class="fr" plain type="primary" size="mini">更多...</el-button>
					</el-row>
					<el-row class="clearfix">
						<b>地点：</b>
						<span>北京</span>
						<span>上海</span>
						<span>武汉</span>
						<span>深圳</span>
						<span>广州</span>
						<el-button class="fr" plain type="primary" size="mini">更多...</el-button>
					</el-row>
					<el-row class="clearfix">
						<b>证书：</b>
						<span>职业技能等级证书</span>
						<span>岗位证书</span>
						<span>毕业证书</span>
						<el-button class="fr" plain type="primary" size="mini">更多...</el-button>
					</el-row>
					<el-row class="clearfix">
						<b>项目类型：</b>
						<span>公路</span>
						<span>铁路</span>
						<span>水利水运</span>
						<span>城市轨道交通</span>
						<span>城市道路桥梁</span>
						<span>城市供水</span>
						<el-button class="fr" plain type="primary" size="mini">更多...</el-button>
					</el-row>
					<el-row class="clearfix">
						<b>薪资：</b>
						目前薪资&ensp;
						<el-input size="mini" style="width: 128px"></el-input>
						&ensp;-&ensp;
						<el-input size="mini" style="width: 128px"></el-input>
						&ensp;元/月&emsp;
						期待薪资&ensp;
						<el-input size="mini" style="width: 128px"></el-input>
						&ensp;-&ensp;
						<el-input size="mini" style="width: 128px"></el-input>
						&ensp;元/月
					</el-row>
					<el-row class="clearfix">
						<b>其他：</b>
						<el-select size="mini"  style="width: 154px" placeholder="工作年限(不限)"></el-select>&ensp;
						<el-select size="mini"  style="width: 154px" placeholder="年龄(不限)"></el-select>&ensp;
						<el-select size="mini"  style="width: 154px" placeholder="性别(不限)"></el-select>&ensp;
						<el-select size="mini"  style="width: 154px" placeholder="更新时间(不限)"></el-select>&ensp;
						<el-select size="mini"  style="width: 154px" placeholder="求职状态(不限)"></el-select>
					</el-row>
				</div>
			</div>
		</div>
		<div class="container personnel-list">
			<el-row>
				<el-col :span="2" class="text-center">
					<p class="img"><img src="http://wx1.sinaimg.cn/orj360/9359621dly1fp8udaub8ej20j60j6q4i.jpg" alt=""></p>
					<p><el-tag type="danger" size="small">7k-1.5w</el-tag></p>
				</el-col>
				<el-col :span="9" class="left-info">
					<p class="row1">
						行宁波&ensp;|&ensp;男&ensp;|&ensp;上海
						<span class="icon"></span>
					</p>
					<p class="row2">
						<span>管理</span>
						<span>6年工作经验</span>
						<span>技能熟练</span>
						<span>有证书</span>
					</p>
					<p class="row3">应聘时间：1天前</p>
				</el-col>
				<el-col :span="1"><span class="line"></span></el-col>
				<el-col :span="9" class="right-info">
					<p>2008 09/21 ~ 2012 09/12 云南铝业 质量管理/测试</p>
					<p>2008 09/21 ~ 2012 09/12 云南铝业 质量管理/测试</p>
					<p>2008 09/21 ~ 2012 09/12 云南铝业 质量管理/测试</p>
					<p>2008 09/21 ~ 2012 09/12 云南铝业 质量管理/测试</p>
				</el-col>
				<el-col :span="1"><span class="line"></span></el-col>
				<el-col :span="2" class="choose text-center">
					<p style="margin-bottom: 10px;margin-top: 24px;"><el-checkbox></el-checkbox></p>
					<p>选择</p>
				</el-col>
			</el-row>
		</div>
		<el-pagination
				style="text-align: center;margin-top: 14px;;"
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
		components: {
			firmCenterNav
		},
		data() {
			return {
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
			}
		}
	}
</script>

