<template>
	<div>
		<div class="container">
			<firm-center-nav path="personnel"></firm-center-nav>
			<div class="inner-container">
				<el-button-group class="btn-menu-group">
					<!--<el-button v-for="item in statuses"
					           :key="item.value"
					           :type="tab == item.value?'primary':'default'"
					           plain
					           @click="tab=item.value">
						{{item.label}}
					</el-button>-->
					<el-button :type="tab == 1?'primary':'default'" plain @click="tab=1">新简历(10)</el-button>
					<el-button :type="tab == 2?'primary':'default'" plain @click="tab=2">待沟通(8)</el-button>
					<el-button :type="tab == 3?'primary':'default'" plain @click="tab=3">待面试(2)</el-button>
					<el-button :type="tab == 4?'primary':'default'" plain @click="tab=4">录用(14)</el-button>
				</el-button-group>
				<el-row style="margin-top: 18px;" :gutter="10" type="flex" justify="space-between">
					<el-col :span="2">
						<el-button plain type="default"><i class="fa fa-filter" aria-hidden="true"></i>&nbsp;筛选</el-button>
					</el-col>
					<el-col :span="3">
						<el-select v-model="form.viewType">
							<el-option v-for="item in viewTypes" :label="item.label" :value="item.value" :key="item.value"></el-option>
						</el-select>
					</el-col>
					<el-col :span="3">
						<el-select v-model="form.sortBy">
							<el-option v-for="item in sortByTypes" :label="item.label" :value="item.value" :key="item.value"></el-option>
						</el-select>
					</el-col>
					<el-col :span="8">
						<el-input v-model="form.keywords">
							<el-button slot="append" icon="el-icon-search"></el-button>
						</el-input>
					</el-col>
					<el-col :span="3">
						<el-button type="success" v-if="tab==1">移动到待沟通</el-button>
						<el-button type="success" v-if="tab==2">安排面试</el-button>
						<el-button type="success" v-if="tab==3">移动到录用</el-button>
						<el-button type="success" v-if="tab==4">移动到已入职</el-button>
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
	import {getGlobalDict} from '~/API/dict';
	import {getRecruitList} from '~/API/firm';
	import firmCenterNav from '~/components/firmCenterNav/firmCenterNav';
	export default  {
		async asyncData({isClient, params, error}) {
			try {
				let {data: statuses} = await getGlobalDict('recruit_record_status');
				let {data: sortByTypes} = await getGlobalDict('recruit_record_sort_by');
				let {data: viewTypes} = await getGlobalDict('recruit_record_view_type');
				let {data: list} = await getRecruitList({pageNo: 1, pageSize: 5, status: 1, viewType:0, sortBy:0});
				return {
					statuses,
					sortByTypes,
					viewTypes,
					list
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
				tab: '1',
				form: {},
				statuses: [],
				sortByTypes: [],
				viewTypes: [],
				list: []
			}
		},
		methods: {
		}
	}
</script>

