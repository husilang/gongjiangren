<style lang="less" scoped>
  .client-home{
    .no-info{
      text-align: center;
      padding-top: 150px;
      padding-bottom: 200px;
      font-size: 18px;
      color: #c3c3c3;
      line-height: 38px;
    }
    .search-pane{
      background: #fff;
      border-radius: 4px;
      padding: 10px 0 11px 10px;
    }
    .accept-pane{
      background: #fff;
      border-radius: 4px;
      padding-left: 16px;
      margin-top: 12px;
      padding-right: 18px;
      .title{
        font-size: 18px;
        color: #465362;
        font-weight: bold;
        border-bottom: 1px solid #f1f1f1;
        height: 64px;
        padding-left: 34px;
        line-height: 64px;
        position: relative;

        &:after{
          content: '';
          position: absolute;
          width: 5px;
          height: 17px;
          display: block;
          background: #5fbafe;
          top: 24px;
          left: 20px;
        }
      }

    }
    .job-recomend-pane{
      background: #fff;
      border-radius: 4px;
      padding-left: 16px;
      margin-top: 12px;
      padding-right: 18px;
      padding-bottom: 38px;
      .title{
        font-size: 18px;
        color: #465362;
        font-weight: bold;
        border-bottom: 1px solid #f1f1f1;
        height: 64px;
        padding-left: 34px;
        line-height: 64px;
        position: relative;

        &:after{
          content: '';
          position: absolute;
          width: 5px;
          height: 17px;
          display: block;
          background: #5fbafe;
          top: 24px;
          left: 20px;
        }
        .exchange-icon{
          display: inline-block;
          width: 18px;
          height: 18px;
          background: url("~/assets/icon/client-icon.png") no-repeat 0 -138px;
          vertical-align: middle;
        }
        a{
          font-size: 13px;
          color: #009afe;
          &:hover{
            text-decoration: underline;
          }
        }
      }
      .job-recomend-item{
        background: #f9f9f9;
        margin-top: 20px;
        border-radius: 4px;
        height: 132px;
        padding-top: 12px;
        .portrait{
          text-align: center;
          padding-top: 22px;
        }
        .portrait img{
          width: 65px;
          height: 65px;
          border-radius: 50%;
        }
        .r1{
          font-size: 16px;
          color: #000000;
          line-height: 38px;
        }
        .r2{
          font-size: 16px;
          color: #888e9a;
          line-height: 38px;
        }
        .r3{
          font-size: 14px;
          color: #888e9a;
          line-height: 30px;
        }
        .more-icon{
          font-size: 28px;
          display: block;
          margin-top: 34px;
        }
      }
    }
  }
</style>
<template>
  <div class="client-home">
    <div class="search-pane">
      <el-row type="flex">
        <el-col :span="12">
          <el-input placeholder="请输入企业名称、职位关键字：如架子工">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="6" :offset="1">
          <p style="font-size: 14px;color:#0d0d0d;">正在热搜：</p>
          <p style="font-size: 14px;color: #fa6a43;margin-top: 8px;"><i class="fa fa-fire" aria-hidden="true"></i>&ensp;电工&ensp;模板工&ensp;司机</p>
        </el-col>
      </el-row>
    </div>
    <div class="accept-pane">
      <div class="title">
        我的应聘
      </div>
      <div class="no-info">
        <img src="../../../assets/no-info.png" alt="">
        <p>暂无应聘信息</p>
      </div>
    </div>
    <div class="job-recomend-pane">
      <div class="title">
        <p class="fl">最新职位推荐</p>
        <a href="" class="fr"><i class="exchange-icon"></i>换一换</a>
      </div>
      <div class="job-recomend-item" v-for="item in recommendList" :key="item.id">
        <el-row>
          <el-col :span="3" class="portrait">
            <img src="../../../assets/portrait.jpg" alt="" class="">
          </el-col>
          <el-col :span="18">
            <p class="r1">{{item.jobName}} | {{item.jobTypeName}} | 上海黄埔建工集团 | 民营企业 | 500人以上</p>
            <p class="r2"><el-tag type="danger" size="mini">{{item.salary}}</el-tag>&ensp;地点：{{item.areaName}} | 工作年限：{{item.workAge}}年以上</p>
            <p class="r3">工作起止时间：{{item.workDate}}</p>
          </el-col>
          <el-col :span="2" class="text-center">
            <a href="" class="more-icon"><i class="fa fa-angle-right"></i></a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {getRecommendList} from '~/API/client'
  export default {
    async asyncData({params, error}) {
      try {
        let {data: recommendList} = await getRecommendList({pageNo: 1, pageSize: 10});
        return {
          recommendList
        }
      } catch (error) {
        error({statusCode: 404, message: 'Post not found'})
      }
    },
    data() {
      return {
        recommendList: []
      }
    }
  }
</script>
