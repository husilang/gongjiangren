<template>
	<div class="regBox">
		<steps :active="1" :stepsArr="stepsArr"></steps>
		<el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="0px" class="form form2">
			<el-form-item prop="name">
				<el-input placeholder="输入企业名称" v-model="form.name">
					<template slot="prepend">
						<i class="icon icon5"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="nature">
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
			<el-form-item prop="scale">
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
			<el-form-item prop="areaId">
				<!--<el-input placeholder="选择企业所在(省/市/县)地址" v-model="form.areaId">
					<template slot="prepend">
						<i class="icon icon8"></i>
					</template>
				</el-input>-->
				<area-select @change="areaChange"></area-select>
			</el-form-item>
			<el-form-item prop="address">
				<el-input placeholder="输入详细地址" v-model="form.address">
					<template slot="prepend">
						<i class="icon icon9"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="contact">
				<el-input placeholder="输入号码" v-model="form.contact">
					<template slot="prepend">
						<i class="icon icon10"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="adminEmail">
				<el-input placeholder="电子邮箱(供找回密码和信息)" v-model="form.adminEmail">
					<template slot="prepend">
						<i class="icon icon11"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="adminName">
				<el-input placeholder="管理员姓名(建议填写固定电话号码)" v-model="form.adminName">
					<template slot="prepend">
						<i class="icon icon12"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="tel">
				<el-input placeholder="手机号码(供找回密码和信息推送用途)" v-model="form.tel">
					<template slot="prepend">
						<i class="icon icon13"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item class="btn-mt">
				<el-row :gutter="16">
					<el-col :span="12">
						<router-link tag="button" class="el-button block-btn el-button--default" to="/firm/register/step1">
							<span>上一步</span>
						</router-link>
					</el-col>
					<el-col :span="12">
						<el-button class="block-btn" :loading="btnLoading" type="primary" @click.native="submitRegist">下一步</el-button>
					</el-col>
				</el-row>
			</el-form-item>
			<el-form-item>
				<router-link tag="button" class="el-button block-btn el-button--default" to="/firm/center">
					<span>抢先体验，跳过</span>
				</router-link>
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
<style lang="less">
	@import "register.less";
</style>
<script type="text/ecmascript-6">
	import Steps from '~/components/steps/step.vue';
	import areaSelect from '~/components/areaSelect/areaSelect.vue';
	import stepMixins from './step.mixin.js';
	import {getGlobalDict} from '~/API/dict';
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
			Steps,
			areaSelect
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
					],
					nature: [
						{required: true, message: '请选择企业性质', trigger: 'blur'}
					],
					scale: [
						{required: true, message: '请选择企业规模', trigger: 'blur'}
					],
					areaId: [
						{required: true, message: '请选择企业地区', trigger: 'change'}
					],
					address: [
						{required: true, message: '请输入企业详细地址', trigger: 'blur'}
					],
					contact: [
						{required: true, message: '请输入企业号码', trigger: 'blur'}
					],
					adminEmail: [
						{required: true, message: '请输入电子邮箱', trigger: 'blur'}
					],
					adminName: [
						{required: true, message: '请输入管理员姓名', trigger: 'blur'}
					]
				}
			}
		},
		methods: {
			areaChange(val) {
				this.form.areaId = val;
			},
			submitRegist() {
				this.btnLoading = true;
				this.$refs.form.validate((valid) => {
					try {
						if (valid) {
							this.$fetch.postFirm('/companyUser/addInfo', this.form).then(res => {
								if (res.code == "0") {
									this.$router.push('/firm/register/step3');
								} else {
									this.$message.error(res.msg);
									this.btnLoading = false;
								}
							});
						}
					} catch (e) {
						this.$message.error(e.message);
					} finally {
						this.btnLoading = false;
					}
				});
			}
		}
	}
</script>
