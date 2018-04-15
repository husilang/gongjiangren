<style lang="less" scoped>
  .firm-base-pane{
    background: #fff;
    border-radius: 4px;
    padding-top: 10px;
    padding-left: 11px;
    padding-right: 10px;
    .font-orange{
      color: #fa6a43;
    }
    .firm-base-info{
      background: #f4fbff;
      border: 1px solid #add3f7;
      height: 53px;
      line-height: 53px;
      font-size: 16px;
      color: #000000;
      padding-left: 38px;
      border-radius: 4px;
    }

    .firm-info-item{
      height: 176px;
      border-bottom: 1px solid #e7ebf3;
      padding-top: 44px;
      &:last-child{
        border-bottom: none;
      }
      .portrait{
        text-align: center;
        padding-top: 10px;
      }
      .portrait img{
        width: 65px;
        height: 65px;
        border-radius: 50%;
      }
      .more-icon{
        font-size: 28px;
        display: block;
        margin-top: 16px;
        color: #b9b9b9;
      }
      .r1{
        font-size: 15px;
        color: #888e9a;
        line-height: 44px;
        strong{
          font-size: 20px;
          color: #000;
          font-weight: normal;
        }
      }
      .r2{
        font-size: 15px;
        color: #000000;
        line-height: 42px;
      }
    }
  }
</style>
<template>
  <div class="firm-base">
    <div class="firm-base-pane">
      <div class="firm-base-info">
        我工作过的企业 <span class="font-orange">3</span> 个
      </div>
      <div class="firm-info-item">
        <el-row>
          <el-col :span="3" class="portrait">
            <img src="../../../assets/portrait.jpg" alt="">
          </el-col>
          <el-col :span="18">
            <p class="r1">
              <strong>上海黄浦建工集团</strong>&emsp;&emsp;
              <span>民营企业 | 500人以上</span>
            </p>
            <p class="r2">
              正在进行的招聘 <span class="font-orange">(5)</span>
            </p>
          </el-col>
          <el-col :span="2" class="text-center">
            <a href="" class="more-icon"><i class="fa fa-angle-right"></i></a>
          </el-col>
        </el-row>
      </div>
      <div class="firm-info-item">
        <el-row>
          <el-col :span="3" class="portrait">
            <img src="../../../assets/portrait.jpg" alt="">
          </el-col>
          <el-col :span="18">
            <p class="r1">
              <strong>上海黄浦建工集团</strong>&emsp;&emsp;
              <span>民营企业 | 500人以上</span>
            </p>
            <p class="r2">
              正在进行的招聘 <span class="font-orange">(5)</span>
            </p>
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
  export default {

  }
</script>
