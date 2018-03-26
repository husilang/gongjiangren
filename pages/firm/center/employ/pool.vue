<template>
	<div>
		<div class="container">
			<firm-center-nav path="pool"></firm-center-nav>
			<div class="inner-container">
				<el-row style="margin-top: 18px;" :gutter="10" type="flex" justify="space-between">
					<el-col :span="2">
						<el-button plain type="default">筛选</el-button>
					</el-col>
					<el-col :span="3">
						<el-select></el-select>
					</el-col>
					<el-col :span="3">
						<el-select></el-select>
					</el-col>
					<el-col :span="8">
						<el-input>
							<el-button slot="append" icon="el-icon-search"></el-button>
						</el-input>
					</el-col>
					<el-col :span="3">
						<el-button type="success">移动到待沟通</el-button>
					</el-col>
					<el-col :span="2">
						<el-button type="danger">淘汰</el-button>
					</el-col>
					<el-col :span="2">
						<el-button type="primary">搜索人才</el-button>
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="container personnel-list">
			<el-row>
				<el-col :span="2" class="text-center">
					<p class="img"><img src="http://wx1.sinaimg.cn/orj360/9359621dly1fp8udaub8ej20j60j6q4i.jpg" alt=""></p>
					<p><el-tag type="danger" size="small">7k-1.5w</el-tag></p>
				</el-col>
				<el-col :span="9" class="left-info">
					<p class="row1">
						行宁波&ensp;|&ensp;男&ensp;|&ensp;上海
						<span class="icon"></span>
					</p>
					<p class="row2">
						<span>管理</span>
						<span>6年工作经验</span>
						<span>技能熟练</span>
						<span>有证书</span>
					</p>
					<p class="row3">应聘时间：1天前</p>
				</el-col>
				<el-col :span="1"><span class="line"></span></el-col>
				<el-col :span="9" class="right-info">
					<p>2008 09/21 ~ 2012 09/12 云南铝业 质量管理/测试</p>
					<p>2008 09/21 ~ 2012 09/12 云南铝业 质量管理/测试</p>
					<p>2008 09/21 ~ 2012 09/12 云南铝业 质量管理/测试</p>
					<p>2008 09/21 ~ 2012 09/12 云南铝业 质量管理/测试</p>
				</el-col>
				<el-col :span="1"><span class="line"></span></el-col>
				<el-col :span="2" class="choose text-center">
					<p style="margin-bottom: 10px;margin-top: 24px;"><el-checkbox></el-checkbox></p>
					<p>选择</p>
				</el-col>
			</el-row>
		</div>
		<el-pagination
				style="text-align: center;margin-top: 14px;;"
				layout="prev, pager, next"
				:total="1000">
		</el-pagination>
	</div>
</template>
<script type="text/ecmascript-6">
	import {getJobList} from '~/API/firm';
	import firmCenterNav from '~/components/firmCenterNav/firmCenterNav';
	export default  {
		async asyncData({ params, error}) {
			try {
				let {data: list} = await getJobList({pageNo: 1, pageSize: 5});
				return {
					list: list || []
				}
			} catch (error) {
				error({statusCode: 404, message: 'Post not found'})
			}
		},
		components: {
			firmCenterNav
		},
		data() {
			return {
				list: []
			}
		},
		methods: {
		}
	}
</script>

