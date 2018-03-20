import {fetch} from '~/plugins/fetch'

// 企业中心信息
export async function getFirmCenter() {
  const data = await fetch.getFirm('/companyUser/center');
  return data;
}
// 企业信息
export async function getFirmInfo() {
  const data = await fetch.getFirm('/companyUser/viewInfo');
  return data;
}
// 正在招聘
export async function getJobList(params) {
  const data = await fetch.getFirm('/company/job/list',params);
  return data;
}