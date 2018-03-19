import {fetch} from '~/plugins/fetch'

// 企业信息
export async function getFirmInfo() {
  const data = await fetch.getFirm('/companyUser/viewInfo');
  return data;
}
