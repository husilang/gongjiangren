<template>
	<div class="regBox">
		<steps :active="2" :stepsArr="stepsArr"></steps>
		<el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="130px" class="form form2">
			<el-form-item prop="uscc" label="企业统一信用代码">
				<el-input placeholder="输入企业名称" v-model="form.uscc">
				</el-input>
			</el-form-item>
			<el-form-item prop="uscc" label="企业营业执照">
				<el-upload
						class="avatar-uploader"
						action="https://jsonplaceholder.typicode.com/posts/"
						:show-file-list="false"
						:on-success="handleAvatarSuccess"
						:before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			<el-form-item prop="uscc" label="资质证书">
				<el-upload
						class="avatar-uploader"
						action="https://jsonplaceholder.typicode.com/posts/"
						:show-file-list="false"
						:on-success="handleAvatarSuccess"
						:before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			<el-form-item prop="uscc" label="管理员身份证号">
				<el-input placeholder="输入企业名称" v-model="form.uscc">
				</el-input>
			</el-form-item>
			<el-form-item prop="uscc" label="资质证书">
				<el-upload
						class="avatar-uploader"
						action="https://jsonplaceholder.typicode.com/posts/"
						:show-file-list="false"
						:on-success="handleAvatarSuccess"
						:before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			<el-form-item class="btn-mt" label-width="0">
				<el-row :gutter="16">
					<el-col :span="12">
						<el-button class="block-btn" type="default" @click="goPath('/firm/register/step1')">上一步</el-button>
					</el-col>
					<el-col :span="12">
						<el-button class="block-btn" :loading="btnLoading" type="primary">下一步</el-button>
					</el-col>
				</el-row>
			</el-form-item>
			<el-form-item label-width="0">
				<el-button type="default" class="block-btn">抢先体验，跳过</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
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

				imageUrl: ''
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
