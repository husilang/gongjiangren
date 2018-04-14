<style lang="less" scoped>
  .client-center{
    .nav {
      background: #344c68;
      height: 73px;
      color: #fff;
      li {
        display: inline-block;
        margin-right: 10px;
        margin-top: 22px;
        cursor: pointer;
        font-size: 16px;
        line-height: 33px;
        width: 106px;
        height: 33px;
        text-align: center;

        &.cur{
          background: #fff;
          color: #344c68;
          border-radius: 4px;
        }
      }
      span {
        display: inline-block;
        text-align: center;
        border-radius: 4px;;
        font-size: 15px;
        cursor: pointer;
        line-height: 32px;
        margin-top: 22px;
      }
      span.btn-type1 {
        width: 104px;
        height: 32px;
        background: #ffde41;
        color: #8e1e06;
        margin-left: 14px;
      }
      .icon{
        display: block;
        float: left;
        margin-top: 22px;
        width: 31px;
        height: 31px;
        background: #fff;
        border: 1px solid #0694ff;
        border-radius: 50%;
        margin-right: 12px;
        text-align: center;
      }
      .icon1 i{
        display: inline-block;
        width: 17px;
        height: 18px;
        background: url("~/assets/icon/client-icon.png") no-repeat 0 -185px;
        margin-top: 4px;
      }
      .icon2 i{
        display: inline-block;
        width: 14px;
        height: 22px;
        background: url("~/assets/icon/client-icon.png") no-repeat 0 -235px;
        margin-top: 2px;
      }
    }
    .main{
      background: #e7ebf3;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    .aside{
      width: 310px;
      .person{
        background: #fff;
        padding: 12px 25px 14px 14px;
        border-radius: 4px;
      }
    }
    .content{
      width: 856px;
    }
  }
</style>
<template>
  <div class="client-center">
    <client-page-top></client-page-top>
    <div class="nav">
      <div class="commonWidth clearfix">
        <div class="fl">
          <ul>
            <nuxt-link tag="li" to="/client/center" class="cur">个人中心</nuxt-link>
            <nuxt-link tag="li" to="/client/center">职位搜索</nuxt-link>
            <nuxt-link tag="li" to="/client/center">企业库</nuxt-link>
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
              <div class="clearfix">
                <div class="fl img">
                  <img src="http://wx1.sinaimg.cn/orj360/9359621dly1fp8udaub8ej20j60j6q4i.jpg" alt="" class="portrait">
                </div>
                <div class="fr text">
                  <p><strong>李建国</strong></p>
                  <p><span>高级焊工</span></p>
                  <p><i class="diamond"></i><span>等级1</span></p>
                </div>
              </div>
              <p><i class="hg"></i>12家企业人才库成员</p>
            </div>
            <div class="menu"></div>
            <div class="resume">

            </div>
          </div>
        </div>
        <div class="content fr"></div>
      </div>
    </div>
    <client-page-footer></client-page-footer>
  </div>
</template>
<script>
  import clientPageTop from '~/components/clientPageTop'
  import clientPageFooter from '~/components/clientPageFooter'
  export default {
    middleware: 'clientauth',
    components: {
      clientPageTop,
      clientPageFooter
    },
  }
</script>
