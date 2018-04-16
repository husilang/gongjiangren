<style lang="less" scoped>
  .recruit-pane{
    background: #fff;
    border-radius: 4px;
    padding-top: 10px;
    padding-left: 11px;
    padding-right: 10px;
    .font-orange{
      color: #fa6a43;
    }
    .font-green{
      color: #43c252;
    }
    .font-blue{
      color: #679adf;
    }
    .recruit-pane-title{
      background: #f4fbff;
      border: 1px solid #add3f7;
      height: 53px;
      line-height: 53px;
      font-size: 16px;
      color: #000000;
      padding-left: 38px;
      border-radius: 4px;
      padding-right: 12px;
      overflow: hidden;
    }

    .recruit-info-item{
      height: 182px;
      border-bottom: 1px solid #e7ebf3;
      padding-top: 25px;
      &:last-child{
        border-bottom: none;
      }
      .portrait{
        text-align: center;
        padding-top: 20px;
      }
      .portrait img{
        width: 65px;
        height: 65px;
        border-radius: 50%;
      }
      .r1{
        font-size: 16px;
        color: #000;
        line-height: 25px;
      }
      .r2{
        font-size: 14px;
        line-height: 25px;
      }
      .r3{
        font-size: 14px;
        color: #888e9a;
        line-height: 25px;
      }
      .btn-row{
        padding-top: 18px;
        margin-bottom: 18px;
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
</style>
<template>
  <div class="mailling-page">
    <div class="recruit-pane">
      <div class="recruit-pane-title clearfix">
        <p class="fl">我投递的职位 <span class="font-orange">3</span> 个</p>
        <p class="fr">
          <el-select placeholder="全部状态" size="mini" style="width: 108px" v-model="status"></el-select>
        </p>
      </div>
      <div class="recruit-info-item">
        <el-row>
          <el-col :span="3" class="portrait">
            <img src="../../../assets/portrait.jpg" alt="">
          </el-col>
          <el-col :span="18">
            <p class="r1">
              高级电焊师 | 技工
            </p>
            <p class="r2">
              <el-tag type="danger" size="mini">7k-1.5w</el-tag>&ensp;&emsp;
              <span class="font-orange">餐贴</span>&emsp;
              <span class="font-green">高温补贴</span>&emsp;
              <span class="font-blue">租房补贴</span>
            </p>
            <p class="r3">
              上海黄埔建工集团 | 民营企业 | 500人以上 | 地点：上海
            </p>
            <p class="r3">
              工作年限：3年以上 | 工作起止时间：2018/03/22 至 2021/03/22
            </p>
            <p class="r3">
              发布于：23分钟前 | 反馈时间：48小时内
            </p>
          </el-col>
          <el-col :span="3" class="text-center">
            <p class="btn-row">
              <el-button type="primary">招聘中&emsp;</el-button>
            </p>
            <p>
              <el-button type="default">取消投递</el-button>
            </p>
          </el-col>
        </el-row>
      </div>
      <div class="recruit-info-item">
        <el-row>
          <el-col :span="3" class="portrait">
            <img src="../../../assets/portrait.jpg" alt="">
          </el-col>
          <el-col :span="18">
            <p class="r1">
              高级电焊师 | 技工
            </p>
            <p class="r2">
              <el-tag type="danger" size="mini">7k-1.5w</el-tag>&ensp;&emsp;
              <span class="font-orange">餐贴</span>&emsp;
              <span class="font-green">高温补贴</span>&emsp;
              <span class="font-blue">租房补贴</span>
            </p>
            <p class="r3">
              上海黄埔建工集团 | 民营企业 | 500人以上 | 地点：上海
            </p>
            <p class="r3">
              工作年限：3年以上 | 工作起止时间：2018/03/22 至 2021/03/22
            </p>
            <p class="r3">
              发布于：23分钟前 | 反馈时间：48小时内
            </p>
          </el-col>
          <el-col :span="3" class="text-center">
            <p class="btn-row">
              <el-button type="primary">招聘中&emsp;</el-button>
            </p>
            <p>
              <el-button type="default">取消投递</el-button>
            </p>
          </el-col>
        </el-row>
      </div>
      <div class="recruit-info-item">
        <el-row>
          <el-col :span="3" class="portrait">
            <img src="../../../assets/portrait.jpg" alt="">
          </el-col>
          <el-col :span="18">
            <p class="r1">
              高级电焊师 | 技工
            </p>
            <p class="r2">
              <el-tag type="danger" size="mini">7k-1.5w</el-tag>&ensp;&emsp;
              <span class="font-orange">餐贴</span>&emsp;
              <span class="font-green">高温补贴</span>&emsp;
              <span class="font-blue">租房补贴</span>
            </p>
            <p class="r3">
              上海黄埔建工集团 | 民营企业 | 500人以上 | 地点：上海
            </p>
            <p class="r3">
              工作年限：3年以上 | 工作起止时间：2018/03/22 至 2021/03/22
            </p>
            <p class="r3">
              发布于：23分钟前 | 反馈时间：48小时内
            </p>
          </el-col>
          <el-col :span="3" class="text-center">
            <p class="btn-row">
              <el-button type="primary">招聘中&emsp;</el-button>
            </p>
            <p>
              <el-button type="default">取消投递</el-button>
            </p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="job-recomend-pane">
      <div class="title">
        <p class="fl">最新职位推荐</p>
        <a href="" class="fr"><i class="exchange-icon"></i>换一换</a>
      </div>
      <div class="job-recomend-item">
        <el-row>
          <el-col :span="3" class="portrait">
            <img src="../../../assets/portrait.jpg" alt="" class="">
          </el-col>
          <el-col :span="18">
            <p class="r1">高级电焊师 | 技工 | 上海黄埔建工集团 | 民营企业 | 500人以上</p>
            <p class="r2"><el-tag type="danger" size="mini">7k-1.5w</el-tag>&ensp;地点：上海 | 工作年限：3年以上</p>
            <p class="r3">工作起止时间：2018/03/22 至 2021/03/22</p>
          </el-col>
          <el-col :span="2" class="text-center">
            <a href="" class="more-icon"><i class="fa fa-angle-right"></i></a>
          </el-col>
        </el-row>
      </div>
      <div class="job-recomend-item">
        <el-row>
          <el-col :span="3" class="portrait">
            <img src="../../../assets/portrait.jpg" alt="" class="">
          </el-col>
          <el-col :span="18">
            <p class="r1">高级电焊师 | 技工 | 上海黄埔建工集团 | 民营企业 | 500人以上</p>
            <p class="r2"><el-tag type="danger" size="mini">7k-1.5w</el-tag>&ensp;地点：上海 | 工作年限：3年以上</p>
            <p class="r3">工作起止时间：2018/03/22 至 2021/03/22</p>
          </el-col>
          <el-col :span="2" class="text-center">
            <a href="" class="more-icon"><i class="fa fa-angle-right"></i></a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
