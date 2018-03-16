<template>
	<div class="regBox">
		<steps :active="4" :stepsArr="stepsArr"></steps>
		<el-form :model="form" ref="form" label-position="left" label-width="80px" class="form form2" :inline="true">
			<el-form-item prop="uscc" label="项目名称">
				<el-input placeholder="输入内容" v-model="form.uscc">
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary">搜索</el-button>
			</el-form-item>
		</el-form>
		<div class="table-content">
			<el-table
					:data="tableData"
					border
					style="width: 100%">
				<el-table-column
						prop="date"
						label="项目名称"
						align="center">
				</el-table-column>
				<el-table-column
						prop="name"
						label="项目类型"
						align="center">
				</el-table-column>
				<el-table-column
						prop="address"
						align="center"
						label="项目管理账号">
				</el-table-column>
				<el-table-column
						prop="address"
						align="center"
						label="管理员密码">
				</el-table-column>
				<el-table-column
						prop="address"
						align="center"
						label="联系方式">
				</el-table-column>
				<el-table-column
						prop="address"
						align="center"
						label="操作">
				</el-table-column>
			</el-table>
		</div>

		<div class="btn-mt" style="width: 524px;margin: 0 auto;margin-bottom: 10px;">
			<el-row :gutter="16">
				<el-col :span="12">
					<el-button class="block-btn" type="default" @click="goPath('/firm/register/step1')">上一步</el-button>
				</el-col>
				<el-col :span="12">
					<el-button class="block-btn" :loading="btnLoading" type="primary">下一步</el-button>
				</el-col>
			</el-row>
		</div>
		<div style="width: 524px; margin: 0 auto;">
			<el-button type="default" class="block-btn">抢先体验，跳过</el-button>
		</div>
	</div>
</template>
<style>
	.el-input-group__append, .el-input-group__prepend {
		padding: 0 12px;
		background-color: #fff;
	}
</style>
<style>
	.table-content {
		width: 724px;
		margin: 0 auto;
		margin-bottom: 40px;
		margin-top: 30px;
	}
	.regBox {
		width: 1180px;
		padding-bottom: 120px;
		margin: 0 auto;
		background: #fff;
		box-shadow: 1px 1px 1px #dee2e9;
		border-radius: 6px;
	}
	.regBox .form {
		width: 524px;
		margin: 0 auto;
		margin-top: 38px;
	}
	.block-btn{
		width: 100%;
	}
	.btn-mt {
		margin-top: 25px;
	}
	i.icon{
		display: inline-block;
	}
	i.icon1{
		width: 17px;
		height: 17px;
		background: url("../../../assets/icon/reg-icon.png") no-repeat 0 0;
	}
	i.icon2{
		width: 17px;
		height: 17px;
		background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -20px;
	}
	i.icon3{
		width: 17px;
		height: 18px;
		background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -40px;
	}
	i.icon4{
		width: 22px;
		height: 16px;
		background: url("../../../assets/icon/reg-icon.png") no-repeat 0 bottom;
	}
	i.icon5{
		width: 22px;
		height: 22px;
		background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -60px;
	}
	i.icon6{
		width: 22px;
		height: 18px;
		background: url("../../../assets/icon/reg-icon.png") no-repeat 4px -80px;
	}
	i.icon7{
		width: 22px;
		height: 18px;
		background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -99px;
	}
	i.icon8{
		width: 22px;
		height: 20px;
		background: url("../../../assets/icon/reg-icon.png") no-repeat 2px -118px;
	}
	i.icon9{
		width: 22px;
		height: 18px;
		background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -139px;
	}
	i.icon10{
		width: 22px;
		height: 18px;
		background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -158px;
	}
	i.icon11{
		width: 22px;
		height: 18px;
		background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -176px;
	}
	i.icon12{
		width: 22px;
		height: 18px;
		background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -195px;
	}
	i.icon13{
		width: 22px;
		height: 22px;
		background: url("../../../assets/icon/reg-icon.png") no-repeat 2px -214px;
	}
	/*form1*/
	.regBox .form1 {
		margin-top: 104px;
	}
	.regBox .goLogin {
		margin-top: 116px;
	}
	.regBox .goLogin i{
		margin-bottom:  -3px;
		margin-right: 18px;
	}
	.regBox .goLogin span {
		color: #429ffe;
		cursor: pointer;
	}
</style>
<script type="text/ecmascript-6">
	import Steps from '~/components/steps/step.vue';
	import stepMixins from './step.mixin.js';
	export default {
		middleware: 'firmauth',
		mixins: [stepMixins],
		layout: 'firmregister',
		components: {
			Steps
		},
		data() {
			return {
				btnLoading: false,
				form: {
				},
				rules: {
					loginName: [
						{required: true, message: '请输入用户名', trigger: 'blur'}
					],
					password: [
						{required: true, message: '请输入密码', trigger: 'blur'}
					],
					rePassword: [
						{required: true, message: '请输入密码', trigger: 'blur'}
					]
				},

				tableData: []
			}
		},
		methods: {
			submitRegist() {
				this.btnLoading = true;
				this.$refs.form.validate((valid) => {
					try {
						if (valid) {
							this.$fetch.post('/companyUser/register', this.form).then(res => {
								console.log(res);
							});
						}
					} catch (e) {
						this.$Message.error(e.message);
					} finally {
						this.btnLoading = false;
					}
				});

			},

			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}
		}
	}
</script>
