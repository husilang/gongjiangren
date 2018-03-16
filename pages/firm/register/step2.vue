<template>
	<div class="regBox">
		<steps :active="1" :stepsArr="stepsArr"></steps>
		<el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="0px" class="form form2">
			<el-form-item prop="loginName">
				<el-input placeholder="输入企业名称" v-model="form.name">
					<template slot="prepend">
						<i class="icon icon5"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="password">
				<!--<el-select placeholder="选择企业性质" v-model="form2.password" type="password" style="display: block;width: 100%;">
					<template slot="prepend">
						<i class="icon icon6"></i>
					</template>
				</el-select>-->
				<el-select placeholder="选择企业性质" v-model="form.nature" type="password" style="display: block;width: 100%;">
					<el-option v-for="item in companyNatures"
					           :key="item.value"
					           :label="item.label"
					           :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item prop="rePassword">
				<!--<el-input placeholder="选择企业规模" v-model="form2.rePassword" type="password">
					<template slot="prepend">
						<i class="icon icon7"></i>
					</template>
				</el-input>-->
				<el-select placeholder="选择企业规模" v-model="form.scale" type="password" style="display: block;width: 100%;">
					<el-option v-for="item in companyScales"
					           :key="item.value"
					           :label="item.label"
					           :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item prop="rePassword">
				<el-input placeholder="选择企业所在(省/市/县)地址" v-model="form.areaId" type="password">
					<template slot="prepend">
						<i class="icon icon8"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="rePassword">
				<el-input placeholder="输入详细地址" v-model="form.address" type="password">
					<template slot="prepend">
						<i class="icon icon9"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="rePassword">
				<el-input placeholder="输入号码" v-model="form.contact" type="password">
					<template slot="prepend">
						<i class="icon icon10"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="rePassword">
				<el-input placeholder="电子邮箱(供找回密码和信息)" v-model="form.adminEmail" type="password">
					<template slot="prepend">
						<i class="icon icon11"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="rePassword">
				<el-input placeholder="管理员姓名(建议填写固定电话号码)" v-model="form.adminName" type="password">
					<template slot="prepend">
						<i class="icon icon12"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="rePassword">
				<el-input placeholder="手机号码(供找回密码和信息推送用途)" v-model="form.tel" type="password">
					<template slot="prepend">
						<i class="icon icon13"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item class="btn-mt">
				<el-row :gutter="16">
					<el-col :span="12">
						<el-button class="block-btn" type="default" @click="current--">上一步</el-button>
					</el-col>
					<el-col :span="12">
						<el-button class="block-btn" :loading="btnLoading" type="primary" @click.native="submitRegist">下一步</el-button>
					</el-col>
				</el-row>
			</el-form-item>
			<el-form-item>
				<el-button type="default" class="block-btn">抢先体验，跳过</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<style>
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
		layout: 'register',
		components: {
			Steps
		},
		data() {
			return {
				companyNatures: [],
				companyScales: [],
				btnLoading: false,
				form: {
					captcha: 8888
				},
				rules: {
					name: [
						{required: true, message: '请输入企业名称', trigger: 'blur'}
					],
				},
				form2: {},
				rules2: {}
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
