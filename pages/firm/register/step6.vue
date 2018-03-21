<template>
	<div class="regBox">
		<steps :active="5" :stepsArr="stepsArr"></steps>
		<div class="text-center" style="margin-top: 48px;font-size: 14px;color:#000;">
			支付状态：<span style="font-size: 18px;color:#ff771c;">未付费</span>
		</div>
		<div class="table-content">
			<table width="100%">
				<thead>
				<tr>
					<th><div>服务</div></th>
					<th v-for="item in tableData"><div>{{item.name}}</div></th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td><div>账号数量</div></td>
					<td v-for="item in tableData"><div>{{item.numOfAccounts}}</div></td>
				</tr>
				<tr>
					<td><div>年费（元）</div></td>
					<td v-for="item in tableData"><div>{{item.annualFee}}</div></td>
				</tr>
				<tr>
					<td><div>操作</div></td>
					<td v-for="item in tableData"><div><span class="el-icon-success" style="color:#ccc;cursor:pointer"></span></div></td>
				</tr>
				</tbody>
			</table>
		</div>
		<div class="btn-mt" style="width: 524px;margin: 0 auto;margin-bottom: 10px;">
			<el-row :gutter="16">
				<el-col :span="12">
					<el-button class="block-btn" type="default" @click="goPath('/firm/register/step1')">上一步</el-button>
				</el-col>
				<el-col :span="12">
					<router-link class="el-button block-btn el-button--primary" to="/firm/register/step6">
						<span>下一步</span>
					</router-link>
				</el-col>
			</el-row>
		</div>
		<div style="width: 524px; margin: 0 auto;">
			<el-button type="default" class="block-btn">我要订购</el-button>
		</div>
	</div>
</template>
<style lang="less">
	@import "register.less";
	.table-content {
		width: 724px;
		position: relative;
		margin: 0 auto;
		margin-bottom: 40px;
		margin-top: 30px;
		&:after {
			content: '';
			position: absolute;
			width: 100%;
			height: 40px;
			background: #fff;
			top: 0;
			left: 0;
			transform: skew(0deg, -2deg);
			transform-origin: 0;
		}

		table {
			border-collapse: collapse;
			border: 1px solid #dfdfdf;
			border-top: none;
		}
		table th{
			padding:0;
			font-size: 15px;
	        color: #fff;
	        div {
		        padding-top: 54px;
		        padding-bottom: 14px;
	        }
			&:nth-child(1){
				div {
					background: #8ab9ff;
				}
			}
			&:nth-child(2){
				div {
					background: #76adff;
				}
			}
			&:nth-child(3){
				div {
					background: #68cd8e;
				}
			}
			&:nth-child(4){
				div {
					background: #a6a4fb;
				}
			}
			&:nth-child(5){
				div {
					background: #ffae5f;
				}
			}
		}
		table tbody tr{
			border-bottom: 1px solid #dfdfdf;
		}
		table td{
			padding:0;
			font-size: 16px;
			color: #000000;
			div{
				padding-left: 24px;
				padding-top: 14px;
				padding-bottom: 14px;
				text-align: center;
				border-right: 1px solid #dfdfdf;
			}
		}
	}
</style>
<script type="text/ecmascript-6">
	import Steps from '~/components/steps/step.vue';
	import stepMixins from './step.mixin.js';
	import {getServices} from '~/API/dict'
	export default {
		middleware: 'firmauth',
		mixins: [stepMixins],
		layout: 'firmregister',
		components: {
			Steps
		},
		async asyncData({params, error}) {
			let {data:tableData} = await getServices();
			return {
				tableData: tableData
			}
		},
		data() {
			return {
				btnLoading: false,
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
