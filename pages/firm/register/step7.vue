<template>
	<div class="regBox">
		<steps :active="6" :stepsArr="stepsArr"></steps>
		<el-form :model="form" ref="form" label-position="top" label-width="0px" class="form form2">
			<el-row :gutter="16" :key="item">
				<el-col :span="12">
					<div class="title">
						<i class="fa fa-file-text-o" aria-hidden="true"></i>
						调查问卷
					</div>
					<div>
						<p>如何获知“工匠网”？</p>
						<el-radio>
							网站
						</el-radio>
						<el-radio>
							培训机构
						</el-radio>
						<el-radio>
							电视&报纸
						</el-radio>
						<el-radio>
							朋友推荐
						</el-radio>
						<el-radio>
							政府宣传
						</el-radio>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="title">
						<i class="fa fa-heart-o" aria-hidden="true"></i>
						捐献
					</div>
					<div>
						<p>企业曾获得何种荣誉？</p>
						<el-radio>
							精神支持
						</el-radio>
						<el-radio>
							20元
						</el-radio>
						<el-radio>
							1元
						</el-radio>
						<el-radio>
							50元
						</el-radio>
						<el-radio>
							10元
						</el-radio>
						<el-radio>
							100元
						</el-radio>
					</div>
				</el-col>
			</el-row>
		</el-form>
		<div class="btn-mt" style="width: 524px;margin: 0 auto;margin-top: 20px;margin-bottom: 10px;">
			<el-row :gutter="16">
				<el-col :span="12">
					<el-button class="block-btn" type="default" @click="goPath('/firm/register/step3')">上一步</el-button>
				</el-col>
				<el-col :span="12">
					<el-button class="block-btn" :loading="btnLoading" type="primary" @click.native="submitRegist">下一步</el-button>
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
<style>
	.el-form--label-top .el-form-item__label{
		line-height: 22px;
		padding-bottom: 4px;
	}
</style>
<style lang="less">
	@import "register.less";
	.regBox .form {
		width: 724px;
		margin: 0 auto;
		margin-top: 38px;
	}
</style>
<script type="text/ecmascript-6">
	import Steps from '~/components/steps/step.vue';
	import stepMixins from './step.mixin.js';
	import {getGlobalDict} from '~/API/dict';
	import {mapGetters} from 'vuex';
	import {fetchdata} from '~/plugins/fetch'
	export default {
		middleware: 'firmauth',
		mixins: [stepMixins],
		layout: 'firmregister',
		components: {
			Steps
		},
		computed: mapGetters(['firmUser']),
		created() {

		},
		data() {
			return {
				questions: [],
				btnLoading: false,
				form: {},
				list: [{},{},{}]
			}
		},
		methods: {
			submitRegist() {
				this.btnLoading = true;
				this.$refs.form.validate((valid) => {
					try {
						if (valid) {
							this.$fetch.postFirmJson('/companyUser/addQuestionAndAnswer', this.list).then(res => {
								if (res.code == "0") {
									this.$router.push('/firm/register/step5');
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
