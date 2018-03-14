<template>
  <div class="container">
    <div class="top-box clearfix">
      <div class="fl">
        <div class="small-btn icon1">
          版本信息
        </div>
      </div>
      <div class="fr">
        <div class="small-btn icon2">
          免责声明
        </div>
      </div>
    </div>
    <div class="btn-box">
      <div class="btn clearfix" @click="toFirm">
        <div class="icon"></div>
        <div class="text">
          <p>企业用户</p>
          <p class="eng">ENTERPRISE CUSTOMERS</p>
        </div>
      </div>
      <div class="btn clearfix" @click="toFirm">
        <div class="icon"></div>
        <div class="text">
          <p>项目用户</p>
          <p class="eng">ENTERPRISE CUSTOMERS</p>
        </div>
      </div>
      <div class="btn clearfix" @click="toFirm">
        <div class="icon"></div>
        <div class="text">
          <p>个人用户</p>
          <p class="eng">ENTERPRISE CUSTOMERS</p>
        </div>
      </div>
    </div>
    <div class="bottom-box clearfix">
      <div class="fl">
        <div class="small-btn icon3">
          友情链接
        </div>
      </div>
      <p class="center">
        Copyright&copy;工匠网&nbsp;|&nbsp;沪ICP证080268号
      </p>
      <div class="fr">
        <div class="small-btn icon4">
          快速指导
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      toFirm() {
        this.$router.push("/firm")
      }
    }
  }
</script>
<style scoped>
  .small-btn {
    display: inline-block;
    font-size: 14px;
    background-color: rgba(228, 228, 228, 0.26);
    padding: 7px 16px 8px 36px;
    border-radius: 4px;
    background-repeat: no-repeat;
    cursor: pointer;
    background-position: 14px 12px;
  }

  .small-btn.icon1 {
    background-image: url("../assets/icon/bg_01.png");
  }

  .small-btn.icon2 {
    background-image: url("../assets/icon/bg_02.png");
  }

  .small-btn.icon3 {
    background-image: url("../assets/icon/bg_03.png");
  }

  .small-btn.icon4 {
    background-image: url("../assets/icon/bg_04.png");
  }

  .container {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    background: url('../assets/bg.jpg') no-repeat center/cover;
    color: #fff;
  }

  .top-box {
    padding: 0 16px;
    position: absolute;
    top: 12px;
    width: 100%;
  }

  .btn-box {
    width: 372px;
    height: 288px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .btn-box .btn {
    display: block;
    margin-bottom: 8px;
    width: 372px;
    height: 88px;
    background: rgba(213, 213, 213, 0.38);
    cursor: pointer;
    border-radius: 4px;
    font-size: 29px;
    box-shadow: 1px 1px 4px #335582c7;
    transition: all 0.28s ease-out;
  }

  .btn-box .btn:hover {
    transition: all 0.25s ease-in;
    background: #ff7c1b;
  }

  .btn-box .btn .icon {
    display: inline-block;
    width: 46px;
    height: 46px;
    background-image: url("../assets/icon/btn.png");
    background-repeat: no-repeat;
    margin-top: 22px;
    margin-left: 82px;
    margin-right: 20px;
    float: left;
  }

  .btn-box .btn:nth-child(1) .icon {
    background-position: 0 0;
  }

  .btn-box .btn:nth-child(2) .icon {
    background-position: -46px 0;
  }

  .btn-box .btn:nth-child(3) .icon {
    background-position: -92px 0;
  }

  .btn-box .text {
    margin-top: 22px;
    line-height: 26px;
    float: left;
  }

  .btn-box p.eng {
    font-size: 8px;
  }

  .bottom-box {
    position: absolute;
    padding: 0 16px;
    bottom: 16px;
    width: 100%;
    height: 36px;
  }

  .bottom-box .center {
    text-align: center;
    position: absolute;
    width: 310px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    line-height: 32px;
  }
</style>
