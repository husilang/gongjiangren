<style scoped>
	.regBox {
		width: 1180px;
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
	.regBox .img {
		text-align: center;
		padding-top: 32px;
		padding-bottom: 32px;
	}
	.regBox .name {
		font-size: 16px;
		color: #7e919a;
	}
</style>
<template>
	<div>
		<div class="regBox">
			<div class="steps" style="padding: 40px 0 30px;border: 1px solid #ececec;">
				<el-steps :active="0" style="width: 800px;margin:0px auto;">
					<el-step title="验证身份" icon="el-icon-mobile-phone"></el-step>
					<el-step title="设置新密码" icon="el-icon-edit"></el-step>
					<el-step title="完成" icon="el-icon-check"></el-step>
				</el-steps>
			</div>

			<el-tabs tab-position="left" style="height: 600px;padding-left: 40px;">
				<el-tab-pane label="手机验证">
					<div class="check form">
						<div class="img"><img src="~/assets/tel-check.png" alt=""></div>
						<el-form ref="form" :model="form" :rules="rules" label-position="left" label-width="100px">
							<el-form-item label="登录账号" prop="loginName">
								<el-row>
									<el-col :span="18">
										<el-input v-model="form.loginName"></el-input>
									</el-col>
								</el-row>
							</el-form-item>
							<el-form-item label="手机号码" prop="mobile">
								<el-row>
									<el-col :span="18">
										<el-input v-model="form.mobile"></el-input>
									</el-col>
								</el-row>
							</el-form-item>
							<el-form-item label="动态验证码" prop="smsCode">
								<el-row>
									<el-col :span="18">
										<el-input v-model="form.smsCode"></el-input>
									</el-col>
									<el-col :span="4" style="margin-left: 10px;">
										<el-button size="small">获取短信验证码</el-button>
									</el-col>
								</el-row>
							</el-form-item>
							<el-form-item>
								<el-row>
									<el-col :span="18">
										<el-button style="display: block;width: 100%;" type="primary" @click.native="next" :loading="btnLoading1">下一步</el-button>
									</el-col>
								</el-row>
							</el-form-item>
						</el-form>
					</div>
				</el-tab-pane>
				<el-tab-pane label="Email验证">
					<div class="check form">
						<p class="name text-center">登录账户&ensp; <b></b></p>
						<div class="img"><img src="~/assets/email-check.png" alt=""></div>
						<el-form label-position="left" label-width="100px">
							<el-form-item label="Email地址">
								<el-row>
									<el-col :span="18">
										<el-input></el-input>
									</el-col>
								</el-row>
							</el-form-item>
							<el-form-item>
								<el-row>
									<el-col :span="18">
										<el-button style="display: block;width: 100%;" type="primary">发送Email进行验证</el-button>
									</el-col>
								</el-row>
							</el-form-item>
						</el-form>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
		layout: 'firmforget',
		data() {
			return {
				btnLoading1: false,
				btnLoading2: false,
				form: {
					smsCode: 8888
				},
				rules: {
					loginName: [{required: true,trigger: 'blur', message: '请输入登录账号'}],
					mobile: [{required: true,trigger: 'blur', message: '请输入手机号码'}],
					smsCode: [{required: true,trigger: 'blur', message: '请输入验证码'}]
				}
			}
		},
		methods: {
			telCheck() {
				return new Promise((resolve, reject) => {
					this.$refs.form.validate((valid) => {
						if (valid) {
							this.$fetch.postFirm('/companyUser/bindMobile', this.form).then((res) => {
								if (res.code == 0) {
									resolve();
								} else {
									this.$message.error(res.msg);
									reject();
								}
							})
						}else{
							reject();
						}
					})
				})
			},
			quickNext() {
				this.btnLoading1 = true;
				this.telCheck().then(() => {
					this.btnLoading1 = false;
					this.$router.push('/firm/center');
				}).catch(() => {
					this.btnLoading1 = false;
				})
			},
			next() {
				this.btnLoading2 = true;
				this.telCheck().then(() => {
					this.btnLoading2 = false;
					this.$router.push('/firm/register/step2');
				}).catch(() => {
					this.btnLoading2 = false;
				})
			}
		}
	}
</script>