<template>
	<div class="regBox">
		<steps :active="2" :stepsArr="stepsArr"></steps>
		<el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="140px" class="form form2">
			<el-form-item prop="uscc" label="企业统一信用代码">
				<el-input placeholder="输入企业统一信用代码" v-model="form.uscc">
				</el-input>
			</el-form-item>
			<el-form-item label="企业营业执照">
				<el-upload
						class="avatar-uploader"
						:action="uploadUrl"
						:show-file-list="false"
						:on-success="licenceSuccess"
						:before-upload="beforeAvatarUpload">
					<img v-if="form.licenceImg" :src="form.licenceImg" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			<el-form-item prop="certImgs" label="资质证书">
				<el-upload
						:action="uploadUrl"
						list-type="picture-card"
						:on-success="certImgSuccess"
						:on-preview="handlePictureCardPreview"
						:on-remove="handleRemove">
					<i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible">
					<img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>
			</el-form-item>
			<el-form-item prop="adminIdcard" label="管理员身份证号">
				<el-input placeholder="输入企业名称" v-model="form.adminIdcard">
				</el-input>
			</el-form-item>
			<el-form-item prop="uscc" label="身份证照片">
				<el-upload
						:action="uploadUrl"
						list-type="picture-card"
						:on-success="idCardSuccess"
						:on-preview="handleIDCardPreview"
						:on-remove="handleRemove">
					<i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="idDialogVisible">
					<img width="100%" :src="idDialogImageUrl" alt="">
				</el-dialog>
			</el-form-item>
			<el-form-item class="btn-mt" label-width="0">
				<el-row :gutter="16">
					<el-col :span="12">
						<el-button class="block-btn" type="default" @click="goPath('/firm/register/step2')">上一步</el-button>
					</el-col>
					<el-col :span="12">
						<el-button class="block-btn" :loading="btnLoading" type="primary" @click.native="submitRegist">下一步</el-button>
					</el-col>
				</el-row>
			</el-form-item>
			<el-form-item label-width="0">
				<router-link tag="button" class="el-button block-btn el-button--default" to="/firm/center">
					<span>抢先体验，跳过</span>
				</router-link>
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
<style lang="less">
	@import "register.less";
</style>
<script type="text/ecmascript-6">
	import Steps from '~/components/steps/step.vue';
	import stepMixins from './step.mixin.js';
	import consts from '~/utils/consts';
	export default {
		middleware: 'firmauth',
		mixins: [stepMixins],
		layout: 'firmregister',
		components: {
			Steps
		},
		computed: {
			uploadUrl() {
				return consts.API_URL+'/common/file/upload'
			}
		},
		data() {
			return {
				btnLoading: false,
				form: {
					licenceImg: '',
					certImgs: '',
					adminIdcardImgs: ''
				},
				rules: {
					uscc: [
						{required: true, message: '请输入企业统一信用代码', trigger: 'blur'}
					],
					adminIdcard: [
						{required: true, message: '请输入身份证号', trigger: 'blur'}
					]
				},

				dialogVisible: false,
				dialogImageUrl:'',
				idDialogVisible: false,
				idDialogImageUrl: ''
			}
		},
		methods: {
			submitRegist() {
				this.btnLoading = true;
				this.$refs.form.validate((valid) => {
					try {
						if (valid) {
							this.$fetch.postFirm('/companyUser/addRealNameAuth', this.form).then(res => {
								if (res.code == "0") {
									this.$router.push('/firm/register/step4');
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

			},
			licenceSuccess(res, file) {
				this.form.licenceImg = res.data;
			},
			certImgSuccess(res, file) {
				if (this.form.certImgs === '') {
					this.form.certImgs = res.data;
				} else {
					this.form.certImgs = this.form.certImgs+','+res.data;
				}
			},
			idCardSuccess(res, file) {
				if (this.form.adminIdcardImgs === '') {
					this.form.adminIdcardImgs = res.data;
				} else {
					this.form.adminIdcardImgs = this.form.adminIdcardImgs+','+res.data;
				}
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
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			handleIDCardPreview(file) {
				this.idDialogImageUrl = file.url;
				this.idDialogVisible = true;
			}
		}
	}
</script>
