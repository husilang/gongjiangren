<template>
	<div>
		<div class="container">
			<firm-center-nav path="personnel"></firm-center-nav>
			<div class="inner-container">
				<el-button-group class="btn-menu-group">
					<el-button :type="form.status == 1?'primary':'default'" plain @click="tabClick(1)">新简历(10)</el-button>
					<el-button :type="form.status == 2?'primary':'default'" plain @click="tabClick(2)">待沟通(8)</el-button>
					<el-button :type="form.status == 3?'primary':'default'" plain @click="tabClick(3)">待面试(2)</el-button>
					<el-button :type="form.status == 4?'primary':'default'" plain @click="tabClick(4)">录用(14)</el-button>
				</el-button-group>
				<el-row style="margin-top: 18px;" :gutter="10" type="flex" justify="space-between">
					<el-col :span="2">
						<el-button plain type="default"><i class="fa fa-filter" aria-hidden="true"></i>&nbsp;筛选</el-button>
					</el-col>
					<el-col :span="3">
						<el-select v-model="form.viewType" @change="getList()">
							<el-option v-for="item in viewTypes" :label="item.label" :value="item.value" :key="item.value"></el-option>
						</el-select>
					</el-col>
					<el-col :span="3">
						<el-select v-model="form.sortBy" @change="getList()">
							<el-option v-for="item in sortByTypes" :label="item.label" :value="item.value" :key="item.value"></el-option>
						</el-select>
					</el-col>
					<el-col :span="8">
						<el-input v-model="form.keywords">
							<el-button slot="append" icon="el-icon-search" @click="getList"></el-button>
						</el-input>
					</el-col>
					<el-col :span="3">
						<el-button type="success" v-if="form.status==1" @click="moveToWait">移动到待沟通</el-button>
						<el-button type="success" v-if="form.status==2">安排面试</el-button>
						<el-button type="success" v-if="form.status==3">移动到录用</el-button>
						<el-button type="success" v-if="form.status==4">移动到已入职</el-button>
					</el-col>
					<el-col :span="2">
						<el-button type="danger">淘汰</el-button>
					</el-col>
					<el-col :span="2">
						<router-link tag="button" class="el-button el-button--primary" to="/firm/center/employ/find">
							<span>搜索人才</span>
						</router-link>
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="container personnel-list" v-for="item in list" :key="item.id">
			<el-row>
				<el-col :span="2" class="text-center">
					<p class="img"><img src="http://wx1.sinaimg.cn/orj360/9359621dly1fp8udaub8ej20j60j6q4i.jpg" alt=""></p>
					<p><el-tag type="danger" size="small">7k-1.5w</el-tag></p>
				</el-col>
				<el-col :span="9" class="left-info">
					<p class="row1">
						{{item.name}}&ensp;|&ensp;{{item.sex}}&ensp;|&ensp;{{item.areaName}}
						<span class="icon"></span>
					</p>
					<p class="row2">
						<span>{{item.skills[0].jobTypeName}}</span>
						<span>{{item.skills[0].workAge}}年工作经验</span>
						<span>{{item.skills[0].level}}</span>
						<span>{{item.skills[0].hasCert?'有证书':'无证书'}}</span>
					</p>
					<p class="row3">应聘时间：{{item.applyDate}}</p>
				</el-col>
				<el-col :span="1"><span class="line"></span></el-col>
				<el-col :span="9" class="right-info">
					<p v-for="list in item.workExperiences">{{list.period}}&ensp;{{list.companyName}}&ensp;{{list.projectName}}/{{list.jobTypeName}}</p>
				</el-col>
				<el-col :span="1"><span class="line"></span></el-col>
				<el-col :span="2" class="choose text-center">
					<p style="margin-bottom: 10px;margin-top: 24px;"><span class="checkBox" @click="checkedItem(item.recruitRecordId)" :class="{'checked': checkedStr.indexOf(item.recruitRecordId)>-1}"><b></b></span></p>
					<p>选择</p>
				</el-col>
			</el-row>
		</div>
		<el-pagination
				style="text-align: center;margin-top: 14px;;"
				layout="prev, pager, next"
				:total="10">
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
				let {data: list} = await getRecruitList({pageNo: 1, pageSize: 5, status: 1, viewType:1, sortBy:1});
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
				form: {
					status: '1',
					viewType:'1',
					sortBy:'1',
					pageNo: 1,
					pageSize: 5
				},
				statuses: [],
				sortByTypes: [],
				viewTypes: [],
				list: [],
				checked: [],
				checkedStr: ''
			}
		},
		methods: {
			tabClick(status) {
				this.form.status = status;
				this.getList();
			},
			async getList() {
				let res = await getRecruitList(this.form);
				this.list = res.data;
				this.checked=[];
				this.checkedStr = "";
			},
			checkedItem(id){
				if (this.checkedStr.indexOf(id) > -1) { // 有
					for (let i=0;i<this.checked.length;i++) {
						if (this.checked[i] === id) {
							this.checked.splice(i,1);
							break;
						}
					}
					this.checkedStr = this.checked.join(',');
				} else { // 无
					this.checked.push(id);
					this.checkedStr = this.checked.join(',');
				}
			},
			// 移动到待沟通
			moveToWait() {
				this.$fetch.postFirm('/conpany/recruitRecord/'+this.checkedStr+'/moveToWaiting').then((res) => {
					if (res.code == 0) {
						this.getList();
					} else {
						this.$message.error(res.msg);
					}
				})
			}
		}
	}
</script>

