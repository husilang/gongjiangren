import {fetch} from '~/plugins/fetch'
export async function getGlobalDict(dictName) {
	const data = await fetch.get('/dic/global', {typeName: dictName});
	return data;
}