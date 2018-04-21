<template>
  <div class="regBox">
    <steps :active="3" :stepsArr="stepsArr"></steps>
    <div class="form" style="width: 724px;">
      {{info}}
      <el-card class="box-card">
        <div slot="header" class="clearfix header">
          <p class="fl">
            <strong>{{info.jobType.name}}</strong>
            <span>{{info.workAge}}年工作经验</span>
            <span>技能{{info.level}}</span>
            <span v-if="info.hasCert">有证书</span>
          </p>
          <el-button type="text" style="float: right">编辑专业信息</el-button>
        </div>
        <div class="box-content">
          <div class="item clearfix">
            <span>从业证书</span>
            <div class="img">
              <img src="../../../assets/portrait.jpg" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/portrait.jpg" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/portrait.jpg" alt="">
            </div>
          </div>
          <div class="item clearfix">
            <span>荣誉证书</span>
            <div class="img">
              <img src="../../../assets/portrait.jpg" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/portrait.jpg" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/portrait.jpg" alt="">
            </div>
          </div>
        </div>
      </el-card>
      <nuxt-link tag="button" class="el-button el-button--primary is-plain" style="display: block;width: 100%;margin-top: 32px;" to="/client/register/add-major">
        <i class="el-icon-plus"></i>
        <span>添加专业信息</span>
      </nuxt-link>
    </div>
    <div class="btn-mt" style="width: 524px;margin: 0 auto;margin-top: 20px;margin-bottom: 10px;">
      <el-row :gutter="16">
        <el-col :span="12">
          <el-button class="block-btn" type="default" @click="goPath('/firm/register/step3')">上一步</el-button>
        </el-col>
        <el-col :span="12">
          <el-button class="block-btn" :loading="btnLoading" type="primary" @click.native="submitRegist">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="width: 524px; margin: 0 auto;">
      <router-link tag="button" class="el-button block-btn el-button--default" to="/firm/center">
        <span>抢先体验，跳过</span>
      </router-link>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .box-card .header{
    line-height: 40px;
    strong{
      margin-right: 42px;
      font-size: 16px;
    }
    span{
      font-size: 16px;
      color: #777d8e;
      margin-right: 14px;
    }
  }
  .box-content {
    .item{
      margin-bottom: 24px;
    }
    span{
      float: left;
      font-size: 16px;
      color: #000000;
      width: 140px;
      display: block;
      line-height: 76px;
    }
    .img{
      width: 106px;
      height: 76px;
      float: left;
      border: 1px solid #ececec;
      border-radius: 2px;
      overflow: hidden;
      text-align: center;
      margin-right: 12px;
      img{
        width: 100%;
      }
    }
  }
</style>
<style lang="less">
  @import "register.less";
  .regBox .form {
    margin: 0 auto;
    margin-top: 38px;
  }
</style>
<script type="text/ecmascript-6">
  import Steps from '~/components/steps/step.vue';
  import stepMixins from './step.mixin.js';
  import {getMajorInfo} from '~/API/client.js';
  export default {
    middleware: 'clientauth',
    mixins: [stepMixins],
    layout: 'clientregister',
    components: {
      Steps
    },
    async asyncData({params, error}) {
      try {
        let {data: info} = await getMajorInfo();
        return {
          info
        }
      } catch (error) {
        error({statusCode: 404, message: 'Post not found'})
      }
    },
    data() {
      return {
        info: {},
        btnLoading: false,
      }
    },
    methods: {
      submitRegist() {
        this.btnLoading = true;
        this.$refs.form.validate((valid) => {
          try {
            if (valid) {
              this.$fetch.postFirm('/companyUser/addRealNameAuth', this.form).then(res => {
                if (res.code == "0") {
                  this.$router.push('/firm/register/step4');
                } else {
                  this.$message.error(res.msg);
                  this.btnLoading = false;
                }
              });
            }
          } catch (e) {
            this.$message.error(e.message);
          } finally {
            this.btnLoading = false;
          }
        });
      }
    }
  }
</script>
