<style lang="less" scoped>
	.area-pick{
		&.hide{
		    .mask{
			    opacity: 0;
		        z-index: -1;
		    }
			.area-wrap{
				transition: transform 0.3s ease-in-out;
				transform: translate(-50%, 200%);
			}

		}
		.mask {
			transition: all 0.5s ease-in-out;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(0,0,0,.4);
			z-index: 1000;;
		}
	    .area-wrap {
		    transition: transform 0.3s ease-in-out;
		    position: fixed;
		    width: 680px;
		    height: 400px;
		    background: #fff;;
		    left: 50%;
		    top: 50%;
		    border-radius: 4px;
		    transform: translate(-50%, -50%);
		    z-index: 1001;

		    .title {
			    font-size: 14px;
			    height: 34px;
			    line-height: 34px;
			    padding: 0 12px;
			    border-bottom: 1px solid #ececec;
			    span {
				    font-size: 18px;
				    transition: all 0.2s ease-in-out;
				    cursor: pointer;
				    &:hover {color: red;}
			    }
		    }
			.btn-footer{
				position: absolute;
				bottom: 0;
				border-top: 1px solid #ececec;
				text-align: center;
				width: 100%;
				padding: 10px 0;
			}
			.content {
				padding: 10px 30px;
			}
	        .res {
		        color: cornflowerblue;
	            font-size: 14px;
		        span {
			        margin-right: 18px;
			        &:last-child {padding: 2px 10px;background: cornflowerblue;color:#fff;border-radius:6px;}
		        }
	        }
			.tabs ul.tabs-ul{
				height: 30px;
				margin-top: 10px;
			}
			.tabs li {border: 1px solid #e7e7e7;display: inline-block;padding: 0 16px;
				font-size: 12px;line-height: 29px;cursor:pointer;
				height: 30px;
	            /*&:last-child{border-left: none;}*/
				&.cur{border-bottom: 1px solid #fff;}
			}
	        .tab-text{border: 1px solid #e7e7e7;padding: 12px 10px;
	            p {
		            font-weight:bold;
		            margin-bottom: 8px;
		            padding-left: 12px;
	            }
	            li {
		            display: inline-block;
		            width: 130px;
		            height: 26px;
		            margin-right:10px;
		            padding: 0;
		            margin-bottom: 4px;
	                border: none;
		            span {
			            border-radius: 4px;
			            padding: 4px 12px;
			            &:hover{background: #a5c0f0;color:#fff;}
		            }
	            }
	        }
	    }
	}
</style>
<template>
	<div class="area-pick" :class="{'hide': hide}">
		<div class="mask"></div>
		<div class="area-wrap">
			<div class="title clearfix">
				选择城市信息
				<span class="fr" @click="close">
					<i class="el-icon-close"></i>
				</span>
			</div>
			<div class="content">
				<div class="res">
					<span>最多选项1项</span>
					<span>北京</span>
				</div>
				<div class="tabs">
					<ul class="tabs-ul">
						<li class="cur">全部&emsp;<i class="fa fa-angle-down" aria-hidden="true"></i></li>
						<li v-if="level==2">{{provinceName}}&emsp;<i class="fa fa-angle-down" aria-hidden="true"></i></li>
					</ul>
					<div class="tab-text">
						<div v-if="level==1">
							<p>全部省份</p>
							<ul class="clearfix">
								<li v-for="item in provinces" :key="item.id"><span @click="checkedPro(item)">{{item.name}}</span></li>
							</ul>
						</div>
						<div v-if="level==2">
							<p>{{provinceName}}</p>
							<ul class="clearfix">
								<li v-for="item in cities" :key="item.id"><span>{{item.name}}</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="btn-footer">
				<el-button type="primary" size="mini">确定</el-button>
				<el-button size="mini" @click.native="close()">取消</el-button>
			</div>
		</div>

	</div>
</template>
<script type="text/ecmascript-6">
	import {getDictArea} from '~/API/dict'
	export default {
		created() {
			this.getProvince();
		},
		data() {
			return {
				hide: true,
				level: 1,
				provinces: [],
				cities: [],
				countries: [],
				provinceName: '',
			}
		},
		methods: {
			close() {
				this.hide = true;
			},
			open() {
				this.hide = false;
			},
			async getProvince() {
				let {data: provinces} = await getDictArea(2,'');
				this.provinces = provinces;
			},
			async getCities(id) {
				let {data: cities} = await getDictArea(3,id);
				this.cities = cities;
			},
			checkedPro(item) {
				this.level = 2;
				this.provinceName = item.name;
				this.getCities(item.id);
			}
		}
	}
</script>