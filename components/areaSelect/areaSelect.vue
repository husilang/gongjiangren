<template>
	<div class="area-select">
		<el-row :gutter="6">
			<el-col :span="8">
				<el-select v-model="province" placeholder="请选择" size="small">
					<el-option
							v-for="item in provinces"
							:key="item.id"
							:label="item.name"
							:value="item.id">
					</el-option>
				</el-select>
			</el-col>
			<el-col :span="8">
				<el-select v-model="city" placeholder="请选择" size="small">
					<el-option
							v-for="item in cities"
							:key="item.id"
							:label="item.name"
							:value="item.id">
					</el-option>
				</el-select>
			</el-col>
			<el-col :span="8">
				<el-select v-model="country" placeholder="请选择" size="small">
					<el-option
							v-for="item in countries"
							:key="item.id"
							:label="item.name"
							:value="item.id">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
	</div>
</template>
<script type="text/ecmascript-6">
	import {getDictArea} from '~/API/dict'
	export default {
		created() {
			this.getProvinceData();
		},
		data() {
			return {
				provinces: [],
				cities: [],
				countries: [],
				province: '',
				city: '',
				country: ''
			}
		},
		props: {
			value: {
				type: String,
				default: ''
			}
		},
		methods: {
			async getProvinceData() {
				let {data: provinces} = await getDictArea(2,'');
				this.provinces = provinces;
			},
			async getCityData() {
				let {data: cities} = await getDictArea(3,this.province);
				this.cities = cities;
			},
			async getCountryData() {
				let {data: countries} = await getDictArea(4,this.city);
				this.countries = countries;
			}
		},
		watch: {
			province(val,oldVal) {
				if (val !== oldVal) {
					this.city = '';
					this.country = '';
					this.getCityData();
					this.$emit('change', val);
				}
			},
			city(val,oldVal) {
				if (val !== oldVal) {
					this.country = '';
					this.getCountryData();
					this.$emit('change', val);
				}
			},
			country(val, oldVal) {
				if (val !== oldVal) {
					this.$emit('change', val);
				}
			}
		}
	}
</script>