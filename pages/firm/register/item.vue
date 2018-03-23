<template>
	<div class="regBox">
		<router-link tag="div" class="back-tip" to="/firm/register/step5">返回</router-link>
		<el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="0px" class="form form2">
			<el-form-item prop="loginName">
				<el-input placeholder="输入项目名称" v-model="form.name">
					<template slot="prepend">
						<i class="icon icon14"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="nature"style="position:relative">
				<span class="select-icon"><i class="icon icon15"></i></span>
				<el-select placeholder="选择项目类型" v-model="form.nature" type="password" style="display: block;width: 100%;padding-left: 46px;">
					<el-option v-for="item in companyNatures"
					           :key="item.value"
					           :label="item.label"
					           :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item prop="areaId">
				<el-input placeholder="项目管理员账号" v-model="form.areaId" type="password">
					<template slot="prepend">
						<i class="icon icon16"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="address">
				<el-input placeholder="项目管理员密码，建议填写固定电话" v-model="form.address" type="password">
					<template slot="prepend">
						<i class="icon icon17"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="contact">
				<el-input placeholder="管理员手机号码，供找回密码和信息推送" v-model="form.contact" type="password">
					<template slot="prepend">
						<i class="icon icon13"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="adminEmail">
				<el-input placeholder="电子邮箱(供找回密码和信息)" v-model="form.adminEmail" type="password">
					<template slot="prepend">
						<i class="icon icon11"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="adminName">
				<el-input placeholder="选择项目地址（省/市/区县）" v-model="form.adminName" type="password">
					<template slot="prepend">
						<i class="icon icon8"></i>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="tel">
				<el-input placeholder="输入详细地址" v-model="form.tel" type="password">
					<template slot="prepend">
						<i class="icon icon9"></i>
					</template>
				</el-input>
			</el-form-item>
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
	.el-input-group__append, .el-input-group__prepend {
		padding: 0 12px;
		background-color: #fff;
	}
</style>
<style scoped lang="less">
	.regBox{
		position: relative;
		overflow: hidden;
	}
	.back-tip{
		position: absolute;
		top: 0;
		width: 96px;
		background: #fda11b;
		color: #fff;
		height: 96px;
		border-radius: 50%;
		line-height: 134px;
		text-align: center;
		left: 50%;
		transform: translate(-50%,-50%);
		transition: all 0.2s ease-in-out;
		cursor: pointer;

		&:hover{
			background: #fdb63c;
		 }
	}
	.form{
		padding-top: 60px;
	}
	.select-icon{
		position:absolute;
		left:0;
		width: 48px;
		height: 40px;
		text-align: center;
		border: 1px solid #dcdfe7;
		border-radius: 4px 0 0 4px;
	}
</style>
<style lang="less">
	@import "register.less";
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
						this.$message.error(e.message);
					} finally {
						this.btnLoading = false;
					}
				});
			}
		}
	}
</script>
