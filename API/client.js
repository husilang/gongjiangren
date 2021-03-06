import {fetch} from '~/plugins/fetch'
// 用户中心
export async function getCenter() {
  const data = await fetch.get('/user/center');
  return data;
}
// 职位推荐
export async function getRecommendList(params) {
  const data = await fetch.get('/user/job/recommendList',params);
  return data;
}
// 收藏的职位
export async function getCollectList(params) {
  const data = await fetch.get('/userCollect/list',params);
  return data;
}
// 投递的职位
export async function getMailJob(params) {
  const data = await fetch.get('/user/job/list',params);
  return data;
}
// 企业库
export async function getCompanyList(params) {
  const data = await fetch.get('/user/company/list',params);
  return data;
}
// 职位搜索
export async function searchJob(params) {
  const data = await fetch.get('/user/job/search', params);
  return data;
}
// 专业信息查看
export async function getMajorInfo() {
  const data = await fetch.get('/userSkill/view');
  return data;
}
// 业绩查看
export async function getAchieve(params) {
  const data = await fetch.get('/userWorkexperience/list', params);
  return data;
}
