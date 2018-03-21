<template>
	<div class="regBox">
		<steps :active="3" :stepsArr="stepsArr"></steps>
		<el-form :model="form" ref="form" label-position="top" label-width="0px" class="form form2">
			<el-row :gutter="10" v-for="item in 3" :key="item">
				<el-col :span="12">
					<el-form-item :label="'问题'+ item">
						<el-select style="display: block;width: 100%;" size="small" v-model="list[item-1].questionId">
							<el-option v-for="item in questions" :label="item.name" :value="item.id" :key="item.id">
							</el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item :label="'答案' + item">
						<el-input size="small" v-model="list[item-1].answer"></el-input>
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
			this.getQuestions();
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
			async getQuestions() {
				this.$fetch.getFirm('/companyUser/viewQuestionAndAnswer').then(res => {
					this.questions = res.data.questions;
				})
			},
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
