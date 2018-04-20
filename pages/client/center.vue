<style lang="less" scoped>
@import "center.less";
</style>
<template>
  <div class="client-center">
    <client-page-top></client-page-top>
    <div class="nav">
      <div class="commonWidth clearfix">
        <div class="fl">
          <ul>
            <nuxt-link tag="li" to="/client/center/home" class="cur">个人中心</nuxt-link>
            <nuxt-link tag="li" to="/client/job-search">职位搜索</nuxt-link>
            <nuxt-link tag="li" to="/client/center/firmbase">企业库</nuxt-link>
          </ul>
        </div>
        <div class="fr">
          <a href="" class="icon icon1"><i></i></a>
          <a href="" class="icon icon2"><i></i></a>
          <nuxt-link tag="span" to="/" class="btn-type1">网站首页</nuxt-link>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="commonWidth clearfix">
        <div class="aside fl">
          <div class="person">
            <div class="info">
              <div class="clearfix name-info">
                <div class="fl img">
                  <img src="../../assets/portrait.jpg" alt="" class="portrait">
                </div>
                <div class="fr text">
                  <p class="clearfix name"><strong>李建国</strong><span class="msg-icon fr"><i></i></span></p>
                  <p class="job"><span>高级焊工</span></p>
                  <p class="level"><i class="diamond-icon"></i><span>等级1</span></p>
                </div>
              </div>
              <p class="job-info">上海 | 建筑工程 | 工作大于3年</p>
              <p class="oth-info"><i class="hg-icon"></i>{{info.numOfTalentPool}}家企业人才库成员</p>
            </div>
            <div class="menu clearfix">
              <ul>
                <nuxt-link tag="li" :to="{path: '/client/center/account', query: {tab: 1}}">账号设置</nuxt-link>
                <nuxt-link tag="li" :to="{path: '/client/center/account', query: {tab: 3}}">修改密码</nuxt-link>
                <nuxt-link tag="li" to="/client/center/resume">编辑简历</nuxt-link>
                <nuxt-link tag="li" to="/client/center/firmbase">企业库</nuxt-link>
                <nuxt-link tag="li" :to="{path: '/client/center/account', query: {tab: 2}}">密码问题</nuxt-link>
                <nuxt-link tag="li" to="/">发票中心</nuxt-link>
                <nuxt-link tag="li" to="/">举报中心</nuxt-link>
                <nuxt-link tag="li" :to="{path: '/client/center/account', query: {tab: 4}}">信息认证</nuxt-link>
              </ul>
            </div>
            <div class="resume">
              <div class="clearfix">
                <strong class="fl">简历</strong>
                <p class="fr">
                  <a href="">预览</a>
                  <a href="">编辑</a>
                  <a href="">下载</a>
                </p>
              </div>
              <p class="percent">简历完整度：60%</p>
              <div class="progress">
                <span></span>
              </div>
            </div>
          </div>
          <div class="notice">
            <div class="title">
              通知中心
            </div>
            <div class="notice-item">
              <p class="tit">最新消息</p>
              <p class="desc">最新消息1</p>
            </div>
            <div class="notice-item">
              <p class="tit">最新消息</p>
              <p class="desc">最新消息1</p>
            </div>
            <div class="notice-item">
              <p class="tit">最新消息</p>
              <p class="desc">最新消息1</p>
            </div>
            <nuxt-link class="notice-btn" tag="p" to="/">
              发布消息
            </nuxt-link>
          </div>
          <div class="ad">
            <img src="" alt="">
          </div>
        </div>
        <div class="content fr">
          <nuxt-child />
        </div>
      </div>
    </div>
    <client-page-footer></client-page-footer>
  </div>
</template>
<script>
  import clientPageTop from '~/components/clientPageTop'
  import clientPageFooter from '~/components/clientPageFooter'
  import {getCenter} from "../../API/client";

  export default {
    async asyncData({params, error}) {
      try {
        let {data: info} = await getCenter();
        return {
          info
        }
      } catch (error) {
        error({statusCode: 404, message: 'Post not found'})
      }
    },
    middleware: 'clientauth',
    components: {
      clientPageTop,
      clientPageFooter
    },
    data() {
      return {
        info: {}
      }
    }
  }
</script>
