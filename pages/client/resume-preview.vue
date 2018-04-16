<style lang="less" scoped>
  .resume-preview-page{
    .nav{
      height: 61px;
      overflow: hidden;
      span {
        display: inline-block;
        text-align: center;
        border-radius: 4px;;
        font-size: 15px;
        cursor: pointer;
        line-height: 32px;
        margin-top: 15px;
      }
      span.btn-type1 {
        width: 104px;
        height: 32px;
        background: #ffde41;
        color: #8e1e06;
        margin-left: 14px;
      }
      span.btn-type2{
        font-size: 16px;
        font-weight: bold;
        color: #4eb3ff;
        border: 1px solid #4eb3ff;
        width: 140px;
        height: 33px;
        line-height: 32px;
        text-align: center;
      }
      .icon{
        display: block;
        float: left;
        margin-top: 15px;
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
      padding-top: 16px;
      padding-bottom: 17px;
      .wrap{
        background: #fff;
        border-radius: 4px;
        padding: 15px 14px 0px 14px;

        .person{
          height: 264px;
          background: url("~/assets/resume-preview-bg.jpg");
          color: #fff;
          .oper{
            font-size: 14px;
            padding-top: 24px;
            padding-right: 30px;
            color: #6ba0c9;
            margin-bottom: 40px;
            a{
              color: #fff;
              &:nth-child(1){
                background: url("~/assets/icon/resume-preview-icon.png") no-repeat 0 2px;
                padding-left: 20px;
              }
              &:nth-child(2){
                background: url("~/assets/icon/resume-preview-icon.png") no-repeat 0 -27px;
                padding-left: 20px;
              }
            }
          }

          .portrait{
            text-align: center;
          }
          .portrait img{
            width: 104px;
            height: 104px;
            border-radius: 50%;
            border: 1px solid #71c2ff;
          }
          .r1{
            font-size: 16px;
            margin-bottom: 12px;
            strong{
              font-size: 25px;
              margin-right: 26px;
            }
            .tel{
              background: url("~/assets/icon/resume-preview-icon.png") no-repeat 0 -63px;
              padding-left: 16px;
              margin-right: 24px;
            }
          }
          .r2{
            font-size: 14px;
            line-height: 30px;
            color: #6ba0c9;
            span{
              color: #fff;
              display: inline-block;
              width: 260px;
              &:first-child{
                width: 190px;
              }
            }
            b{
              font-weight: normal;
              color: #fff000;
            }
          }
        }
        .resume-item{
          border-bottom: 1px solid #eaeaea;
          padding-left: 72px;
          padding-top: 32px;
          &:last-child{
            border-bottom: none;
          }
          .title{
            font-size: 18px;
            color: #000000;
            padding-left: 35px;
            margin-bottom: 42px;
          }
          .content{
            padding-left: 34px;
            line-height: 30px;
            font-size: 13px;
            padding-bottom: 42px;
            padding-right: 72px;
            span{
              color: #888e9a;
            }
            b{
              font-weight: normal;
              color: #000;
            }
          }
        }
        .job .title{
          background: url("~/assets/icon/resume-preview-icon.png") no-repeat 0 -109px;
        }
        .achieve .title{
          background: url("~/assets/icon/resume-preview-icon.png") no-repeat 0 -160px;
        }
        .major .title{
          background: url("~/assets/icon/resume-preview-icon.png") no-repeat 0 -209px;
        }
        .evaluation .title{
          background: url("~/assets/icon/resume-preview-icon.png") no-repeat 0 -258px;
        }
        .achieve-item{
          border-bottom: 1px solid #e2e2e2;
          padding-bottom: 28px;
          margin-bottom: 24px;
          &:last-child{
            border-bottom: none;
            margin-bottom: 0;
          }
        }
        .major{
          .img{
            border: 1px solid #e3e3e3;
            border-radius: 4px;
            margin-right: 14px;
            width: 158px;
            height: 112px;
            overflow: hidden;
            display: inline-block;
            text-align: center;
            background: #fff;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>
<template>
  <div class="resume-preview-page">
    <client-page-top></client-page-top>
    <div class="nav">
      <div class="commonWidth clearfix">
        <div class="fl">
          <span class="btn-type2">个人简历预览</span>
        </div>
        <div class="fr">
          <a href="" class="icon icon1"><i></i></a>
          <a href="" class="icon icon2"><i></i></a>
          <nuxt-link tag="span" to="/" class="btn-type1">网站首页</nuxt-link>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="commonWidth">
        <div class="wrap">
          <div class="person">
            <div class="oper clearfix">
              <p class="fr">
                <a href="">修改简历</a>&emsp;|&emsp;
                <a href="">下载简历</a>
              </p>
            </div>
            <el-row class="person-info">
              <el-col class="portrait" :span="3">
                <img src="../../assets/portrait.jpg" alt="">
              </el-col>
              <el-col :span="20">
                <p class="r1">
                  <strong>陈忠志</strong>
                  <span class="tel">15120012168</span>
                  <span>男</span>
                </p>
                <p class="r2">
                  <span>年龄：<b>29</b></span>|&emsp;
                  <span>户籍地点：<b>上海-宝山区</b></span>|&emsp;
                  <span>居住地点：<b>上海-宝山区</b></span>|&emsp;
                  <span>婚姻状况：<b>保密</b></span>
                </p>
                <p class="r2">
                  <span>职业：<b>高级焊工</b></span>|&emsp;
                  <span>工作年限：<b>8年以上</b></span>|&emsp;
                  <span>邮件地址：<b>yaudoo@163.com</b></span>|&emsp;
                  <span>工作状态：<b>在职</b></span>
                </p>
              </el-col>
            </el-row>
          </div>
          <div class="job resume-item">
            <p class="title">职业意向</p>
            <div class="content">
              <el-row>
                <el-col :span="3">
                  <span>期待工种</span>
                </el-col>
                <el-col :span="9">
                  <b>黄埔建工集团</b>
                </el-col>
                <el-col :span="3">
                  <span>期待工作地点</span>
                </el-col>
                <el-col :span="9">
                  <b>上海</b>
                </el-col>
                <el-col :span="3">
                  <span>期待薪水</span>
                </el-col>
                <el-col :span="9">
                  <b>2000 至 30000 元/月</b>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="achieve resume-item">
            <p class="title">主要业绩</p>
            <div class="content">
              <el-row class="achieve-item">
                <el-col :span="3">
                  <span>工种</span>
                </el-col>
                <el-col :span="9">
                  <b>高级电焊技师 </b>
                </el-col>
                <el-col :span="3">
                  <span>企业</span>
                </el-col>
                <el-col :span="9">
                  <b>黄埔建工集团</b>
                </el-col>
                <el-col :span="3">
                  <span>项目</span>
                </el-col>
                <el-col :span="9">
                  <b>新加坡隆坡国际酒店项目</b>
                </el-col>
                <el-col :span="3">
                  <span>就职起止时间</span>
                </el-col>
                <el-col :span="9">
                  <b>2012/3/15 至 2018/3/18</b>
                </el-col>
                <el-col :span="3">
                  <span>工作地点</span>
                </el-col>
                <el-col :span="21">
                  <b>上海</b>
                </el-col>
                <el-col :span="3">
                  <span>月薪</span>
                </el-col>
                <el-col :span="21">
                  <b>20000 元/月 * 12 个月</b>
                </el-col>
                <el-col :span="3">
                  <span>职责业绩</span>
                </el-col>
                <el-col :span="21">
                  <b>负责华东地区的市场拓展工作：完成销售任务， 贯彻执行公司的销售策略；因地制宜，制定和实施区域性的市场发展计划；发展和管理经销商，并与其保持良好合作关系；协助经销商建立运作架构，指导和管理其销售队伍。</b>
                </el-col>
                <el-col :span="3">
                  <span>客户评价</span>
                </el-col>
                <el-col :span="21">
                  <b>恪尽职守，吃苦耐劳，工作积极，态度认真，对事业充满热情！热爱行业。</b>
                </el-col>
              </el-row>
              <el-row class="achieve-item">
                <el-col :span="3">
                  <span>工种</span>
                </el-col>
                <el-col :span="9">
                  <b>高级电焊技师 </b>
                </el-col>
                <el-col :span="3">
                  <span>企业</span>
                </el-col>
                <el-col :span="9">
                  <b>黄埔建工集团</b>
                </el-col>
                <el-col :span="3">
                  <span>项目</span>
                </el-col>
                <el-col :span="9">
                  <b>新加坡隆坡国际酒店项目</b>
                </el-col>
                <el-col :span="3">
                  <span>就职起止时间</span>
                </el-col>
                <el-col :span="9">
                  <b>2012/3/15 至 2018/3/18</b>
                </el-col>
                <el-col :span="3">
                  <span>工作地点</span>
                </el-col>
                <el-col :span="21">
                  <b>上海</b>
                </el-col>
                <el-col :span="3">
                  <span>月薪</span>
                </el-col>
                <el-col :span="21">
                  <b>20000 元/月 * 12 个月</b>
                </el-col>
                <el-col :span="3">
                  <span>职责业绩</span>
                </el-col>
                <el-col :span="21">
                  <b>负责华东地区的市场拓展工作：完成销售任务， 贯彻执行公司的销售策略；因地制宜，制定和实施区域性的市场发展计划；发展和管理经销商，并与其保持良好合作关系；协助经销商建立运作架构，指导和管理其销售队伍。</b>
                </el-col>
                <el-col :span="3">
                  <span>客户评价</span>
                </el-col>
                <el-col :span="21">
                  <b>恪尽职守，吃苦耐劳，工作积极，态度认真，对事业充满热情！热爱行业。</b>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="major resume-item">
            <p class="title">专业信息</p>
            <div class="content">
              <el-row>
                <el-col :span="3">
                  <span>工种</span>
                </el-col>
                <el-col :span="9">
                  <b>高级电焊师</b>
                </el-col>
                <el-col :span="3">
                  <span>工作年限</span>
                </el-col>
                <el-col :span="9">
                  <b>12年以上</b>
                </el-col>
                <el-col :span="3">
                  <span>熟练程度</span>
                </el-col>
                <el-col :span="21">
                  <b>非常熟练</b>
                </el-col>
                <el-col :span="3">
                  <span>是否有证书</span>
                </el-col>
                <el-col :span="21">
                  <b>有</b>
                </el-col>
                <el-col :span="3">
                  <span>从业证书</span>
                </el-col>
                <el-col :span="21">
                  <div class="img">
                    <img src="../../assets/portrait.jpg" alt="">
                  </div>
                  <div class="img">
                    <img src="../../assets/portrait.jpg" alt="">
                  </div>
                  <div class="img">
                    <img src="../../assets/portrait.jpg" alt="">
                  </div>
                </el-col>
                <el-col :span="3">
                  <span>从业证书</span>
                </el-col>
                <el-col :span="21">
                  <div class="img">
                    <img src="../../assets/portrait.jpg" alt="">
                  </div>
                  <div class="img">
                    <img src="../../assets/portrait.jpg" alt="">
                  </div>
                  <div class="img">
                    <img src="../../assets/portrait.jpg" alt="">
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="evaluation resume-item">
            <p class="title">自我评价</p>
            <div class="content">
              <el-row>
                <el-col :span="3">
                  <span>评价内容</span>
                </el-col>
                <el-col :span="21">
                  <b>恪尽职守，吃苦耐劳，工作积极，态度认真，对事业充满热情！热爱行业。</b>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <client-page-footer></client-page-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import clientPageTop from '~/components/clientPageTop'
  import clientPageFooter from '~/components/clientPageFooter'
  export default {
    components: {
      clientPageTop,
      clientPageFooter
    },
  }
</script>
