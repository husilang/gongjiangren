<style scoped>
	.form {
		padding: 0 40px;
	}
	.form-title {
		font-size: 20px;
		color: #2b3e47;
		text-align: center;
		font-weight: bold;
		margin-bottom: 30px;
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
			<firm-center-nav path="rescruit"></firm-center-nav>
			<div class="inner-container">
				<el-button-group class="btn-menu-group">
					<el-button :type="tab == 1?'primary':'default'" @click="tab=1" plain>职位发布</el-button>
					<el-button :type="tab == 2?'primary':'default'" @click="tab=2" plain>团队招聘</el-button>
				</el-button-group>
			</div>
		</div>
		<div class="container" v-if="tab==1">
			<div class="form-title">职位描述</div>
			<el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="170px" size="small"
			         class="form">
				<el-form-item label="项目名称">
					<el-row>
						<el-col :span="10">
							<el-select style="display: block;width: 100%;" v-model="form.projectId">
							</el-select>
						</el-col>
						<el-col :span="2" style="margin-left: 20px;">
							<el-button type="text">新建项目</el-button>
						</el-col>
						<el-col :span="8">
							<el-checkbox v-model="form.needProxy" true-label="1" false-label="0">
								需要劳务代理服务
							</el-checkbox>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="职位名称" prop="name">
					<el-row>
						<el-col :span="10">
							<el-input v-model="form.name"></el-input>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="工种" prop="jobTypeId">
					<el-row>
						<el-col :span="10">
							<el-select style="display: block;width: 100%" v-model="form.jobTypeId">
								<el-option v-for="item in jobTypeList" :label="item.name" :value="item.id" :key="item.id">
								</el-option>
							</el-select>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="工作年限" prop="workAge">
					<el-row>
						<el-col :span="10">
							<el-input v-model="form.workAge"></el-input>
						</el-col>
						<el-col :span="4" style="margin-left: 20px;">
							年及以上
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="年龄要求" required>
					<el-row>
						<el-col :span="10">
							<el-form-item prop="ageRequireMin">
								<el-input v-model="form.ageRequireMin"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="1" style="margin-left: 20px;">
							至
						</el-col>
						<el-col :span="10">
							<el-form-item prop="ageRequireMax">
								<el-input v-model="form.ageRequireMax"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="证书要求" prop="certRequire">
					<el-row>
						<el-col :span="10">
							<el-select style="display: block;width: 100%" v-model="form.certRequire">
								<el-option v-for="item in yes_no" :label="item.label" :value="item.value" :key="item.value"></el-option>
							</el-select>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="证书要求描述" prop="certRequireDesc">
					<el-row>
						<el-col :span="10">
							<el-select style="display: block;width: 100%" v-model="form.certRequireDesc"></el-select>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="工作性质" prop="workNature">
					<el-row>
						<el-col :span="24">
							<el-radio-group v-model="form.workNature">
								<el-radio :label="item.value" v-for="item in workNatures">{{item.label}}</el-radio>
							</el-radio-group>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="工作起止时间" required>
					<el-row>
						<el-col :span="10">
							<el-date-picker
									v-model="dateRange1"
									value-format="yyyy-MM-dd"
									type="daterange"
									range-separator="至"
									start-placeholder="开始日期"
									end-placeholder="结束日期">
							</el-date-picker>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="是否商议雇佣终止时间" prop="confirmEndDate">
					<el-row>
						<el-col :span="10">
							<el-select style="display: block;width: 100%" v-model="form.confirmEndDate">
								<el-option v-for="item in confirmEnds" :label="item.label" :value="item.value" :key="item.value"></el-option>
							</el-select>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="具体工作内容描述" prop="description">
					<el-row>
						<el-alert :closable="false" size="mini"
						          title="（请勿输入公司邮箱、联系电话、薪资面议、性别歧视字样及其他外链接，否则将自动删除，不可恢复）"
						          type="warning"></el-alert>
						<el-input type="textarea" v-model="form.description"></el-input>
					</el-row>
				</el-form-item>
				<el-form-item label="工作地点" prop="areaId">
					<el-row>
						<el-col :span="10">
							<el-input v-model="form.areaId"></el-input>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="职位月薪" required>
					<el-row>
						<el-col :span="8">
							<el-form-item prop="salaryMin">
								<el-input v-model="form.salaryMin"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="2" style="text-align: center">
							千元至
						</el-col>
						<el-col :span="8">
							<el-form-item prop="salaryMax">
								<el-input v-model="form.salaryMax"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="2" style="text-align: center">
							千元
						</el-col>
						<el-col :span="4">
							<el-checkbox v-model="form.salaryDiscussPersonally" true-label="1" false-label="0">
								显示为面议
							</el-checkbox>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="福利待遇" prop="workFare">
					<el-checkbox-group v-model="form.workFare">
						<el-checkbox label="提供三餐"></el-checkbox>
						<el-checkbox label="提供住宿"></el-checkbox>
						<el-checkbox label="定期调薪"></el-checkbox>
						<el-checkbox label="加班工资"></el-checkbox>
						<el-checkbox label="项目奖金"></el-checkbox>
						<el-checkbox label="推荐录用"></el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label="招聘人数" prop="totalAmount">
					<el-row>
						<el-col :span="10">
							<el-input v-model="form.totalAmount"></el-input>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="发布时长" prop="period">
					<el-row>
						<el-col :span="10">
							<el-select style="display: block;width: 100%;" v-model="form.period">
								<el-option v-for="item in periods" :label="item.label" :value="item.value" :key="item.value"></el-option>
							</el-select>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label-width="0">
					<el-row type="flex" justify="center" style="margin-top: 25px;;">
						<el-col :span="10">
							<el-button size="medium" :loading="btnLoading1" type="primary" style="display: block;width: 100%" @click.native="submit1">企业招聘信息发布
							</el-button>
						</el-col>
					</el-row>
				</el-form-item>
			</el-form>
		</div>
		<div class="container" v-if="tab==2">
			<div class="form-title">团队招聘职位描述</div>
			<el-form :model="form2" ref="form2" :rules="rules2" label-position="left" label-width="170px" size="small"
			         class="form">
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
				<el-form-item label="团队名称">
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
						<el-alert :closable="false" size="mini"
						          title="（请勿输入公司邮箱、联系电话、薪资面议、性别歧视字样及其他外链接，否则将自动删除，不可恢复）"
						          type="warning"></el-alert>
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
							<el-button size="medium" type="primary" style="display: block;width: 100%">企业招聘信息发布
							</el-button>
						</el-col>
					</el-row>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import {getFirmCenter, getFirmInfo, getJobInfo} from '~/API/firm';
	import {getJobType, getGlobalDict} from '~/API/dict';
	import firmCenterNav from '~/components/firmCenterNav/firmCenterNav';
	export default  {
		async asyncData({isClient, query, error}) {
			console.log(query);
			try {
				let {data: info} = await getFirmCenter();
				let {data: firm} = await getFirmInfo();
				let {data: jobTypeList} = await getJobType({pageNo: 1, pageSize: 50});
				let {data: yes_no} = await getGlobalDict('yes_no');
				let {data: workNatures} = await getGlobalDict('work_nature');
				let {data: confirmEnds} = await getGlobalDict('job_confirm_enddate');
				let {data: periods} = await getGlobalDict('job_period');
				let form = {
					areaId: '973113731419959298',
					needProxy: 0,
					salaryDiscussPersonally: 0
				};
				if (query.id) {
					({data: form} = await getJobInfo(query.id));
				}
				return {
					info: info || {},
					firm: firm || {},
					jobTypeList: jobTypeList,
					yes_no,
					workNatures,
					confirmEnds,
					periods,
					form
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

				tab: '1',
				jobTypeList: [],
				workNatures: [],
				yes_no: [],
				confirmEnds:[],
				periods: [],
				dateRange1: [],
				btnLoading1:false,
				form: {
					areaId: '973113731419959298',
					needProxy: 0,
					salaryDiscussPersonally: 0
				},
				rules: {
					name: [{required: true, message: '请输入职位名称', trigger:'blur'}],
					jobTypeId: [{required: true, message: '请选择工种', trigger:'blur'}],
					workAge: [{required: true, message: '请输入工作年限', trigger:'blur'}],
					ageRequireMin: [{required: true, message: '请输入最小年龄', trigger:'blur'}],
					ageRequireMax: [{required: true, message: '请输入最大年龄', trigger:'blur'}],
					certRequire: [{required: true, message: '请选择证书要求', trigger:'blur'}],
					workNature: [{required: true, message: '请选择工作性质', trigger:'blur'}],
					confirmEndDate: [{required: true, message: '请选择', trigger:'blur'}],
					description: [{required: true, message: '请输入', trigger:'blur'}],
					areaId: [{required: true, message: '请选择', trigger:'blur'}],
					salaryMin: [{required: true, message: '请输入', trigger:'blur'}],
					salaryMax: [{required: true, message: '请输入', trigger:'blur'}],
					totalAmount: [{required: true, message: '请输入', trigger:'blur'}],
					period: [{required: true, message: '请选择', trigger:'blur'}]
				},
				form2: {},
				rules2: {}
			}
		},
		methods: {
			submit1() {
				this.btnLoading1 = true;
				this.form.workBeginDate = this.dateRange1 ? this.dateRange1[0] : '';
				this.form.workEndDate = this.dateRange1 ? this.dateRange1[1] : '';
				this.$refs.form.validate(valid => {
					if (valid) {
						this.$fetch.postFirm('/company/job/', this.form).then((res) => {
							this.btnLoading1 = false;
							if (res.code == 0) {
								this.$message.success(res.msg);
								this.$router.push('/firm/center/employ/rescruit');
							} else {
								this.$message.error(res.msg);
							}
						})
					}
				})
			}
		}
	}
</script>