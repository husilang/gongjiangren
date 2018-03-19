import {fetch} from '~/plugins/fetch'
export async function getGlobalDict(dictName) {
	const data = await fetch.get('/dic/global', {typeName: dictName});
	return data;
}
export async function getDictArea(type, parentId) {
	const data = await fetch.get('/dic/area', {type, parentId});
	return data;
}