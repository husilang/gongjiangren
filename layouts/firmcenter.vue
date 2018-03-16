<style scoped>
  .register-layout {

  }
  .register-layout .header {
    height: 72px;
    padding: 0 34px;
    background: #fff;
  }
  .register-layout .header .logo p{
    display: inline-block;
    width: 119px;
    height: 40px;
    background: url("../assets/icon/reg_logo.png") no-repeat;
    margin-top: 17px;
  }
  .register-layout .header .info li {
    display: inline-block;
    color: #818080;
    font-size: 16px;
    height: 26px;
    margin-left: 44px;
    margin-top: 26px;
  }
  .register-layout .header .info li:first-child {
    padding-left: 30px;
    background: url("../assets/icon/reg-info.png") no-repeat 0 0px;
  }
  .register-layout .header .info li:last-child {
    padding-left: 22px;
    background: url("../assets/icon/reg-info.png") no-repeat 0 -25px;
  }
  .register-layout .title {
    height: 80px;
    background: #349dee;
    font-size: 14px;
    color: #fff;
  }
  .register-layout .title span {
    float: left;
  }
  .register-layout .title .line {
    display: inline-block;
    width: 1px;
    height: 32px;
    background: #8ce3fe;
    margin-left: 26px;
    margin-right: 24px;
    margin-top: 25px;
  }
  .register-layout .title img {
    width: 34px;
    border-radius: 50%;
    height: 34px;
    margin-bottom: -5px;
    margin-right: 8px;
  }
  .register-layout .title .exit-btn {
    border:none;
    width: 56px;
    height: 24px;
    background: #6ad0f0;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    font-size: 12px;
    margin-left: 20px;
    cursor: pointer;
    margin-top: 28px;
  }
  .register-layout .content {
    background: #e7ebf3;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .register-layout .common-width {
    width: 1186px;
    margin: 0 auto;
  }
  .register-layout .footer {
    height: 83px;
    background: url("../assets/reg-footer.jpg") no-repeat center bottom;
    font-size: 12px;
    line-height: 83px;
    color: #7c8797;
  }
  .register-layout .footer p {
    padding-left: 82px;
    margin: 0 auto;
    width: 212px;
    background: url("../assets/icon/reg_logo.png") no-repeat 0 center /64px;
  }


  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<template>
  <div class="register-layout">
    <div class="header">
      <div class="logo fl">
        <p @click="goPath('/')"></p>
      </div>
      <div class="info fr">
        <ul>
          <li>客服热线：800-8989-6666</li>
          <li>手机版</li>
        </ul>
      </div>
    </div>
    <div class="title">
      <div class="common-width clearfix">
        <div class="fl">
          <span style="font-size: 36px;line-height: 80px;">企业中心</span>
          <span class="line"></span>
          <span style="margin-top: 24px;">
            <img src="http://wx1.sinaimg.cn/orj360/9359621dly1fp8udaub8ej20j60j6q4i.jpg" alt="">
          </span>
          <span style="margin-top: 30px;">{{firmUser.loginName}}</span>
          <button class="exit-btn">退出</button>
        </div>
        <div class="fr">
          <el-carousel :interval="4000" type="card" height="70px" indicator-position="none" style="margin-top: 5px;width: 200px;">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="common-width">
        <nuxt/>
      </div>
    </div>
    <div class="footer">
      <p>版权所有 gj163.com&nbsp;&copy;</p>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default  {
    computed: mapState(['firmUser'])
  }
</script>
