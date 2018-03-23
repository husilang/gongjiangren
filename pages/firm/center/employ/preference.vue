<template>
	<div>
		<div class="container">
			<firm-center-nav path="preference"></firm-center-nav>
			<div class="inner-container">

			</div>
		</div>
		<div class="intro container" v-for="item in list" :key="item.jobId">
			<div class="clearfix item">
				<div class="fl left-item">
					<p class="row1">
						<span>{{item.name}}</span>
						<span><i>|</i>龙江核电站2期工程</span>
						<span><i>|</i><b>{{item.totalAmount}}</b>人</span>
					</p>
					<p class="row2">
						<span>管理</span>
						<span><i>|</i>{{item.salary}}k</span>
						<span><i>|</i>{{item.workAge}}年及以上</span>
						<span><i>|</i>{{item.areaName}}</span>
					</p>
					<p class="row3">
						<span>发布时间：2018年2月2日</span>
						<span>搜索人才</span>
					</p>
				</div>
				<div class="fr right-item">
					<p class="row1">
						<span><b>12</b>未阅读</span>
						<span><b>12</b>面试中</span>
						<span><b>12</b>候选人才</span>
						<span><b>12</b>录用人才</span>
						<span v-if="tab==1"><b>{{parseFloat(item.completeRate)*100}}%</b>招聘完成率</span>
					</p>
					<p class="row2" v-if="tab==1"><span>再发布</span> | <span @click="editJob(item.jobId)">编辑职位</span></p>
					<p class="row2" v-if="tab==2"><span @click="editJob(item.jobId)">编辑职位</span> | <span>关闭职位</span></p>
				</div>
			</div>
		</div>
		<el-pagination
				style="text-align: center;margin-top: 14px;"
				layout="prev, pager, next"
				:total="1000">
		</el-pagination>
	</div>
</template>
<script type="text/ecmascript-6">
	import {getJobList, getHistoryJobList} from '~/API/firm';
	import firmCenterNav from '~/components/firmCenterNav/firmCenterNav';
	export default  {
		async asyncData({isClient, params, error}) {
			try {
				let {data: list} = await getJobList({pageNo: 1, pageSize: 5});
				return {
					list: list
				}
			} catch (error) {
				error({statusCode: 404, message: 'Post not found'})
			}
		},
		data() {
			return {
				tab: '1',
				list: []
			}
		},
		components: {
			firmCenterNav
		},
		methods: {
			async getList() {
				let data = {};
				if (this.tab == 1) {
					data = await getJobList({pageNo: 1, pageSize: 5});
				} else if (this.tab == 2) {
					data = await getHistoryJobList({pageNo: 1, pageSize: 5});
				}
				this.list = data.data;
			},
			editJob(id) {
				this.$router.push({path:'/firm/center/employ/add-rescruit', query:{id: id}});
			}
		},
		watch: {
			tab(val) {
				this.getList();
			}
		}
	}
</script>

