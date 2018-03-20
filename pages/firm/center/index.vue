<style scoped lang="less">
  .container{
    background: #fff;
    width: 100%;
    border-radius: 4px;
    margin-top: 8px;
    padding: 32px 33px 30px 28px;
  }
  .nav-item {
    height: 132px;
    padding-top: 24px;
    padding-left: 27px;
    border-bottom: 1px solid #fff;

    .m-box{
      cursor: pointer;
      width: 142px;
      height: 86px;
      border-radius: 8px;
      font-size: 14px;
      color: #fff;
      position: relative;
      margin-right: 4px;
      text-align: center;

      &:after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-width: 8px;
        border-style: solid;
        position: absolute;
        right: -16px;
        top: 34px;
      }
      i {
        display: block;
        width: 40px;
        height: 56px;
        margin: 0 auto;
      }
    }

    &:nth-child(1) {
      background: #fff5eb;
      .m-box {
        background: #f77f68;
        i{
          background:  url('~/assets/icon/firm_center.png') no-repeat 0 12px;
        }
        &:after {
          border-color: transparent transparent transparent #f77f68;
         }
      }
      .n-box li {
        border-color: #f0d9c2;
        color: #c36c5b;
        box-shadow: -1px 1px 10px #efe6dc;
      }
    }
    &:nth-child(2) {
       background: #dbeefd;
      .m-box {
        background: #5fb7fa;
        i{
          background:  url('~/assets/icon/firm_center.png') no-repeat 0 -40px;
          width: 46px;
          height: 54px;
          margin-top: 2px;
        }
        &:after {
           border-color: transparent transparent transparent #5fb7fa;
         }
      }
      .n-box li {
        border-color: #bdddf6;
        color: #477ba3;
        box-shadow: -1px 1px 10px #cddfed;
      }
     }
    &:nth-child(3) {
       background: #d3f4da;
      .m-box {
        background: #60c675;
        i{
          background:  url('~/assets/icon/firm_center.png') no-repeat 0 -86px;
          width: 44px;
        }
        &:after {
           border-color: transparent transparent transparent #60c675;
         }
      }
      .n-box li {
        border-color: #a4dfb0;
        color: #499e5b;
        box-shadow: -1px 1px 10px #c6e5cc;
      }
     }
    &:nth-child(4) {
       background: #ede3fe;
      .m-box {
        background: #ab85f1;
        i{
          background:  url('~/assets/icon/firm_center.png') no-repeat 0 -142px;
          width: 45px;
        }
        &:after {
           border-color: transparent transparent transparent #ab85f1;
         }
      }
      .n-box li {
        border-color: #d6c3f8;
        color: #695492;
        box-shadow: -1px 1px 10px #ded5ee;
      }
     }
    &:nth-child(5) {
       background: #f4ebe3;
      .m-box {
        background: #e39e60;
        i{
          background:  url('~/assets/icon/firm_center.png') no-repeat 0 -197px;
        }
        &:after {
           border-color: transparent transparent transparent #e39e60;
         }
      }
      .n-box li {
        border-color: #fdcfa6;
        color: #aa784b;
        box-shadow: -1px 1px 10px #e5dcd5;
      }
     }

    .n-box {
      li {
        cursor: pointer;
        display: block;
        float: left;
        width: 86px;
        height: 86px;
        background: #fff;
        margin-left: 15px;
        border-radius:8px;
        font-size: 14px;
        border-width: 1px;
        border-style: solid;
        text-align: center;
        padding-top: 22px;
      }
    }
  }
  .right-wrap{
    border: 1px solid #bee3ff;
    padding-left: 9px !important;
    padding-right: 9px !important;
    padding-bottom: 14px;
  }
  .notice{
    .notice-title {
      font-size: 25px;
      color: #349dee;
      text-align: center;
      padding-top: 18px;
      padding-bottom: 12px;
      line-height: 36px;

      i {
        display: inline-block;
        width: 40px;
        height: 40px;
        vertical-align: middle;
        background: url("~/assets/icon/firm_center.png") no-repeat 0 -260px;
      }
    }
    .notice-item{
      padding: 16px 9px 10px;
      margin-bottom: 4px;
      background: #ebf6ff;

      p{
        font-size: 14px;
        color: #1b1d1f;
        background: url("~/assets/icon/firm_center.png") no-repeat 0 -306px;
        padding-left: 26px;
        margin-bottom: 12px;
      }

      .notice-content{
        border: 1px solid #bee3ff;
        background: #fff;
        line-height: 23px;
        padding: 9px 18px;
        font-size:16px;
        color: #787878;
        border-radius: 4px;
      }
    }
  }
</style>
<template>
  <div>
    <div class="container">
      <el-row :gutter="12">
        <el-col :span="18" class="left-wrap">
          <div>
            <div class="nav-item clearfix">
              <div class="fl m-box">
                <i></i>
                <p>企业注册信息管理</p>
              </div>
              <div class="fl n-box">
                <ul class="clearfix">
                  <li>企业登录<br>密码修改</li>
                  <li>企业档案<br>查询修改</li>
                  <li>企业<br>实名认证</li>
                  <li>登录密码<br>找回问题</li>
                  <li>项目<br>授权管理</li>
                  <li>。。。</li>
                </ul>
              </div>
            </div>
            <div class="nav-item clearfix">
              <div class="fl m-box">
                <i></i>
                <p>企业云端管理平台</p>
              </div>
              <div class="fl n-box">
                <ul class="clearfix">
                  <li>企业用工<br>管理查询</li>
                  <li>项目用工<br>管理入口</li>
                  <li>企业<br>大数据查询</li>
                  <li>企业用工<br>智能监控</li>
                  <li>企业<br>人才库</li>
                  <li>。。。</li>
                </ul>
              </div>
            </div>
            <div class="nav-item clearfix">
              <div class="fl m-box" @click="goPath('/firm/center/rescruit')">
                <i></i>
                <p>企业招聘管理</p>
              </div>
              <div class="fl n-box">
                <ul class="clearfix">
                  <li>企业招聘<br>信息发布</li>
                  <li>招聘信息<br>查询</li>
                  <li>应聘信息<br>管理</li>
                  <li>招聘进度<br>管理</li>
                  <li>个人应聘<br>信息浏览</li>
                  <li>。。。</li>
                </ul>
              </div>
            </div>
            <div class="nav-item clearfix">
              <div class="fl m-box">
                <i></i>
                <p>服务中心</p>
              </div>
              <div class="fl n-box">
                <ul class="clearfix">
                  <li>企业服务<br>订购</li>
                  <li>发票中心</li>
                  <li>举报中心</li>
                  <li>智能客服<br>中心</li>
                  <li>人工客服<br>中心</li>
                  <li>。。。</li>
                </ul>
              </div>
            </div>
            <div class="nav-item clearfix">
              <div class="fl m-box">
                <i></i>
                <p>专业化解决方案</p>
              </div>
              <div class="fl n-box">
                <ul class="clearfix">
                  <li style="padding-top:10px;">一站式<br>劳务用工<br>解决方案</li>
                  <li>劳动合同<br>服务</li>
                  <li>工资代发<br>服务</li>
                  <li>专业培训<br>服务</li>
                  <li style="padding-top:10px;">短期<br>大量用工<br>解决方案</li>
                  <li>。。。</li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6" class="right-wrap">
          <div class="notice">
            <p class="notice-title"><i></i>通知中心</p>
            <div class="notice-item" v-for="item in 4" :key="item">
              <p>
                <el-badge :value="1" class="item">
                  <span style="padding-right:8px;">最新消息</span>
                </el-badge>
              </p>
              <div class="notice-content">
                <ul>
                  <li>最新消息</li>
                  <li>最新消息</li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default  {
    middleware: 'firmauth',
    layout: 'firmcenter',
    data() {
      return {
        tab: '1',
        info: {}
      }
    },
    methods: {
      goPath(path){
        this.$router.push(path);
      },
    }
  }
</script>

