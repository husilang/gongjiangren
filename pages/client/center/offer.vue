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
      background: #f4fbff url("~/assets/icon/count-icon.png") no-repeat 14px 17px;
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
      .accept-btn{
        padding-top: 22px;
        font-size: 14px;
        color: #57be5e;
        cursor: pointer;
        width: 96px;
        text-align: center;
        .accept-icon{
          display: block;
          width: 24px;
          height: 24px;
          background: url("~/assets/icon/accept-icon.png");
          margin: 0 auto;
          margin-bottom: 12px;
        }
        .line{
          display: block;
          width: 96px;
          box-shadow: 0 4px 4px 0 #dbf1dd;
          height: 18px;
          border-radius: 48px;
        }
      }
    }
  }
</style>
<template>
  <div class="recruit-pane">
    <div class="recruit-pane-title clearfix">
      <p class="fl">我收到的职位邀请 <span class="font-orange">3</span> 个</p>
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
          <p class="accept-btn">
            <i class="accept-icon"></i>
            接受邀请
            <span class="line"></span>
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
          <p class="accept-btn">
            <i class="accept-icon"></i>
            接受邀请
            <span class="line"></span>
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
          <p class="accept-btn">
            <i class="accept-icon"></i>
            接受邀请
            <span class="line"></span>
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        status:''
      }
    }
  }
</script>
