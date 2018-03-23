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
			<el-form-item>
				<router-link class="el-button el-button--primary" to="/firm/register/item">
					<span>新增项目</span>
				</router-link>
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
					<el-button class="block-btn" plain type="default" @click="goPath('/firm/register/step4')">上一步</el-button>
				</el-col>
				<el-col :span="12">
					<router-link class="el-button block-btn el-button--primary" to="/firm/register/step6">
						<span>下一步</span>
					</router-link>
				</el-col>
			</el-row>
		</div>
		<div style="width: 524px; margin: 0 auto;">
			<router-link tag="button" class="el-button block-btn el-button--default" to="/firm/center">
				<span>抢先体验，跳过</span>
			</router-link>
		</div>
	</div>
</template>
<style lang="less">
	@import "register.less";
	.table-content {
		width: 724px;
		margin: 0 auto;
		margin-bottom: 40px;
		margin-top: 30px;
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
						this.$message.error(e.message);
					} finally {
						this.btnLoading = false;
					}
				});
			}
		}
	}
</script>
