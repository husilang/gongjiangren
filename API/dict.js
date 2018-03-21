import {fetch} from '~/plugins/fetch'
export async function getGlobalDict(dictName) {
	const data = await fetch.get('/dic/global', {typeName: dictName});
	return data;
}
export async function getDictArea(type, parentId) {
	const data = await fetch.get('/dic/area', {type, parentId});
	return data;
}
export async function getServices() {
	const data = await fetch.get('/dic/servicePackageList');
	return data;
}
// 行业
export async function getIndustry(params) {
	const data = await fetch.get('/dic/industryList', params);
	return data;
}
// 工种
export async function getJobType(params) {
	const data = await fetch.get('/dic/jobTypeList', params);
	return data;
}