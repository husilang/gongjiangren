<template>
	<div class="regBox">
		<steps :active="3" :stepsArr="stepsArr"></steps>
		<el-form :model="form" ref="form" :rules="rules" label-position="top" label-width="0px" class="form form2">
			<el-row :gutter="10">
				<el-col :span="12">
					<el-form-item label="问题1">
						<el-select style="display: block;width: 100%;" size="small"></el-select>
					</el-form-item>
					<el-form-item label="问题2">
						<el-select style="display: block;width: 100%;" size="small"></el-select>
					</el-form-item>
					<el-form-item label="问题3">
						<el-select style="display: block;width: 100%;" size="small"></el-select>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="答案1">
						<el-input size="small"></el-input>
					</el-form-item>
					<el-form-item label="答案2">
						<el-input size="small"></el-input>
					</el-form-item>
					<el-form-item label="答案3">
						<el-input size="small"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-form-item class="btn-mt">
				<el-row :gutter="16">
					<el-col :span="12">
						<el-button class="block-btn" type="default" @click="goPath('/firm/register/step1')">上一步</el-button>
					</el-col>
					<el-col :span="12">
						<el-button class="block-btn" :loading="btnLoading" type="primary" @click.native="submitRegist">下一步</el-button>
					</el-col>
				</el-row>
			</el-form-item>
			<el-form-item>
				<el-button type="default" class="block-btn" @click.native="goPath('/firm/center')">抢先体验，跳过</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<style>
	.el-form--label-top .el-form-item__label{
		line-height: 22px;
		padding-bottom: 4px;
	}
	.el-input-group__append, .el-input-group__prepend {
		padding: 0 12px;
		background-color: #fff;
	}
</style>
<style>
	.regBox {
		width: 1180px;
		padding-bottom: 120px;
		margin: 0 auto;
		background: #fff;
		box-shadow: 1px 1px 1px #dee2e9;
		border-radius: 6px;
	}
	.regBox .form {
		width: 724px;
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
	import {getGlobalDict} from '~/API/dict'
	export default {
		async asyncData({params, error}) {
			let {data: natures} = await getGlobalDict('company_nature');
			let {data: scales} = await getGlobalDict('company_scale');
			return {
				companyNatures: natures,
				companyScales: scales
			}
		},
		middleware: 'firmauth',
		mixins: [stepMixins],
		layout: 'firmregister',
		components: {
			Steps
		},
		data() {
			return {
				companyNatures: [],
				companyScales: [],
				btnLoading: false,
				form: {
				},
				rules: {
					name: [
						{required: true, message: '请输入企业名称', trigger: 'blur'}
					]
				}
			}
		},
		methods: {
			submitRegist() {
				this.btnLoading = true;
				this.$refs.form.validate((valid) => {
					try {
						if (valid) {
							this.$fetch.post('/companyUser/addInfo', this.form).then(res => {
								this.$router.push('/firm/register/step3');
							});
						}
					} catch (e) {
						this.$Message.error(e.message);
					} finally {
						this.btnLoading = false;
					}
				});
			}
		}
	}
</script>
