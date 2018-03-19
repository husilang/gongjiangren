<template>
	<div class="regBox">
		<steps :active="5" :stepsArr="stepsArr"></steps>
		<div class="text-center" style="margin-top: 48px;">
			支付状态：<span>未付费</span>
		</div>
		<div class="table-content">
			<table>
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
					<td v-for="item in tableData"><div></div></td>
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
<style>
	.el-input-group__append, .el-input-group__prepend {
		padding: 0 12px;
		background-color: #fff;
	}
</style>
<style>
	.table-content {
		width: 724px;
		margin: 0 auto;
		margin-bottom: 40px;
		margin-top: 30px;
	}
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
