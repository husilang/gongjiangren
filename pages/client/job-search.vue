<style lang="less" scoped>
  @import "center.less";
  @import "../personnel.less";
  .main{
    padding-top: 10px;
    padding-bottom: 10px;
    background: #e7ebf3;
    .font-orange{
      color: #fa6a43;
    }
    .wrap {
      background: #fff;
      padding:32px 44px 30px 52px;
      border-radius: 6px;
      margin-bottom: 10px;
    }
    .search {
      .newjob{
        background: #f2f3f6;
        font-weight: bold;
        color: #407c9f;
        font-size: 16px;
        height: 64px;
        line-height: 64px;;
        padding-left: 16px;
        margin-top: 12px;
        border-radius: 6px;
        span {
          display: inline-block;
          width: 40px;
          height: 42px;
          text-align: center;
          color: #ffffff;
          font-weight:bolder;
          font-size: 30px;
          background: #71cbff;
          border: 1px solid #5cbbf2;
          line-height: 42px;;
          vertical-align: sub;
          margin-right: 2px;
          box-shadow: 0 2px 4px #b2b2b2;
        }
      }
      .find-condition{
        .el-row{
          padding-top: 10px;
          padding-bottom: 9px;
          border-bottom: 1px dashed #ccc;
          font-size: 14px;
          color: #424a50;
          line-height: 28px;

          b{
            display: inline-block;
            width: 78px;
            padding-left: 4px;
            font-weight:normal;
            margin-right: 16px;
          }
          span {
            margin-right: 8px;
            padding: 2px 8px;
            border: 1px solid #fff;
            border-radius: 4px;
            cursor: pointer;
            &:hover{
              border: 1px solid rgba(64, 158, 255, .6);
              color: #409EFF;
            }
            &.checked{
              background: #409EFF;
              border-color : #409EFF;
              color: #fff;
            }
          }
        }
      }
    }
    .search-info{
      background: #f4fbff url("~/assets/icon/count-icon.png") no-repeat 23px 17px;
      border: 1px solid #add3f7;
      height: 53px;
      line-height: 53px;
      font-size: 16px;
      color: #000000;
      padding-left: 45px;
      border-radius: 4px;
      padding-right: 20px;
    }
    .job-list{
      .orange-tag{
        color: #ef7c00;
        border: 1px solid #ef7c00;
        border-radius: 10px;
        padding: 2px 12px;
        margin-right: 10px;
      }
      .green-tag{
        color: #43c252;
        border: 1px solid #43c252;
        margin-right: 10px;
        border-radius: 10px;
        padding: 2px 12px;
      }
      .blue-tag{
        color: #679adf;
        border: 1px solid #679adf;
        margin-right: 10px;
        border-radius: 10px;
        padding: 2px 12px;
      }
      .line {
        display: inline-block;
        background: #e8e8ec;
        width: 1px;
        height: 98px;
        margin: 0 auto;
      }
      .portrait{
        text-align: left;
        padding-top: 10px;
      }
      .portrait img{
        width: 65px;
        height: 65px;
        border-radius: 50%;
      }
      .left-info{
        .r1{
          font-size: 16px;
          color: #000;
          line-height: 30px;
        }
        .r2{
          font-size: 16px;
          line-height: 30px;
          color: #888e9a;
        }
        .r3{
          font-size: 14px;
          color: #888e9a;
          line-height: 25px;
        }
      }
      .right-info{
        .r1{
          font-size: 16px;
          color: #000;
          line-height: 25px;
          margin-bottom: 15px;
        }
        .r2{
          font-size: 14px;
        }
      }
      .btn-row{
        margin-bottom: 18px;
      }
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
            <nuxt-link tag="li" to="/client/center/home">个人中心</nuxt-link>
            <nuxt-link tag="li" to="/client/job-search" class="cur">职位搜索</nuxt-link>
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
      <div class="commonWidth">
        <div class="wrap search">
          <el-row type="flex">
            <el-col :span="12">
              <el-input placeholder="请输入企业名称、职位关键字：如架子工">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
            <el-col :span="6" style="margin-left: 30px;">
              <p style="font-size: 14px;color:#0d0d0d;">正在热搜：</p>
              <p style="font-size: 14px;color: #fa6a43;margin-top: 8px;"><i class="fa fa-fire" aria-hidden="true"></i>&ensp;电工&ensp;模板工&ensp;司机</p>
            </el-col>
          </el-row>
          <el-row class="newjob">
            本周新增职位：&emsp;<span>1</span><span>3</span><span>4</span><span>0</span>&ensp;个
          </el-row>
          <el-row style="margin-top: 14px;">
            <el-tag closable>搜索：精英人才/本科/产品经理</el-tag>
          </el-row>
          <div class="find-condition">
            <el-row class="clearfix">
              <b>工种：</b>
              <span v-for="item in jobTypeList">{{item.name}}</span>
              <el-button class="fr" plain type="primary" size="mini">更多...</el-button>
            </el-row>
            <el-row class="clearfix">
              <b>地点：</b>
              <span>北京</span>
              <span>上海</span>
              <span>武汉</span>
              <span>深圳</span>
              <span>广州</span>
              <el-button class="fr" plain type="primary" size="mini">更多...</el-button>
            </el-row>
            <!--<el-row class="clearfix">
              <b>证书：</b>
              <span>职业技能等级证书</span>
              <span>岗位证书</span>
              <span>毕业证书</span>
              <el-button class="fr" plain type="primary" size="mini">更多...</el-button>
            </el-row>-->
            <el-row class="clearfix">
              <b>项目类型：</b>
              <span>公路</span>
              <span>铁路</span>
              <span>水利水运</span>
              <span>城市轨道交通</span>
              <span>城市道路桥梁</span>
              <span>城市供水</span>
              <el-button class="fr" plain type="primary" size="mini">更多...</el-button>
            </el-row>
            <el-row class="clearfix">
              <b>月薪：</b>
              <span>1000-3000</span>
              <span>1000-3000</span>
              <span>1000-3000</span>
              自定义&ensp;
              <el-input size="mini" style="width: 128px"></el-input>
              &ensp;-&ensp;
              <el-input size="mini" style="width: 128px"></el-input>
              &ensp;元/月&emsp;
            </el-row>
            <el-row class="clearfix">
              <b style="width: 134px;">工作最早起始时间：</b>
              <el-input size="mini" style="width: 128px"></el-input>
              &ensp;-&ensp;
              <el-input size="mini" style="width: 128px"></el-input>
            </el-row>
            <el-row class="clearfix">
              <b>其他：</b>
              <el-select size="mini"  style="width: 154px" placeholder="工作年限(不限)"></el-select>&ensp;
              <el-select size="mini"  style="width: 154px" placeholder="年龄(不限)"></el-select>&ensp;
              <el-select size="mini"  style="width: 154px" placeholder="性别(不限)"></el-select>&ensp;
              <el-select size="mini"  style="width: 154px" placeholder="更新时间(不限)"></el-select>&ensp;
              <el-select size="mini"  style="width: 154px" placeholder="求职状态(不限)"></el-select>
            </el-row>
          </div>
        </div>
        <div class="search-info clearfix">
          <p class="fl">共有 <span class="font-orange">{{list.length}}</span> 职位</p>
          <p class="fr">
            <el-select size="mini" placeholder="智能排序"></el-select>
          </p>
        </div>
        <div class="container job-list" v-for="item in list" :key="item.id">
          <el-row>
            <el-col :span="2" class="portrait">
              <img src="../../assets/portrait.jpg" alt="">
            </el-col>
            <el-col :span="9" class="left-info">
              <p class="r1">
                {{item.jobName}} | {{item.jobTypeName}}
              </p>
              <p class="r2">
                <el-tag type="danger" size="mini">{{item.salary}}</el-tag>&ensp;
                地点：{{item.areaName}} | 工作年限：{{item.workAge}}年以上
              </p>
              <p class="r3">工作起止时间：{{item.workDate}}</p>
            </el-col>
            <el-col :span="1"><span class="line"></span></el-col>
            <el-col :span="9" class="right-info">
              <p class="r1">{{item.companyName}} | 民营企业 | 500人以上</p>
              <p class="r2">
                <span class="orange-tag">餐贴</span>
                <span class="green-tag">高温补贴</span>
                <span class="blue-tag">租房补贴</span>
              </p>
            </el-col>
            <el-col :span="1"><span class="line"></span></el-col>
            <el-col :span="2" class="choose text-center">
              <p class="btn-row">
                <el-button type="primary" size="small" @click="deliver(item.jobId)">投递简历</el-button>
              </p>
              <p>
                <el-button type="default" size="small" @click="star(item.jobId)">收藏职位</el-button>
              </p>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <client-page-footer></client-page-footer>
  </div>
</template>
<script>
  import clientPageTop from '~/components/clientPageTop'
  import clientPageFooter from '~/components/clientPageFooter'
  import {searchJob, deliverJob} from "../../API/client";

  export default {
    middleware: 'clientauth',
    components: {
      clientPageTop,
      clientPageFooter
    },
    async asyncData({params, error}) {
      try {
        let {data: list} = await searchJob({pageNo: 1, pageSize: 10});
        return {
          list
        }
      } catch (error) {
        error({statusCode: 404, message: 'Post not found'})
      }
    },
    data() {
      return {
        list: []
      }
    },
    methods: {
      // 投递简历
      deliver(jobId){
        this.$fetch.post('/user/job/'+jobId+'/deliver').then(res => {
          if (res.code == 0){
            this.$message.success(res.msg);
          } else {
            this.$message.error(res.msg);
          }
        })
      },
      // 收藏简历
      star(jobId){
        this.$fetch.post('/userCollect/'+jobId+'/add').then(res => {
          if (res.code == 0){
            this.$message.success(res.msg);
          } else {
            this.$message.error(res.msg);
          }
        })
      }
    }
  }
</script>
