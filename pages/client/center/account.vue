<style lang="less" scoped>
  .account-pane{
    background: #fff;
    border-radius: 4px;
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
    .pane-content{
      padding-top: 46px;
      padding-left: 44px;
      padding-right: 46px;
    }
    .steps{
      ul{
        border-bottom: 1px solid #23c4f9;
        height: 48px;
        padding-left: 26px;
      }
      li{
        display: block;
        float: left;
        height: 48px;
        line-height: 48px;
        border: 1px solid #e0e0e0;
        width: 166px;
        text-align: center;
        border-bottom-color: #23c4f9;
        border-radius: 20px 20px 0 0;
        font-size: 16px;
        color: #797979;
        cursor: pointer;
        &.cur{
          border-color: #23c4f9;
          border-bottom-color: #fff;
          color: #00bcf8;
        }
      }
    }
    .steps-tab{
      width: 502px;
      margin: 50px auto;
    }
    .tab1{
      padding-bottom: 170px;
    }
    .tab2{
      padding-bottom: 90px;
      .el-form-item{
        margin-bottom: 8px;
      }
      .el-form--label-top .el-form-item__label{
        padding: 0;
        line-height: 30px;
        font-size: 16px;
        color: #000;
      }
    }
    .tab4{
      padding-bottom: 340px;
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
    .form{
      .logo {
        font-size: 14px;
        margin-bottom: 8px;
        color: #939393;
        line-height: 90px;
        i {
          display: inline-block;
          width: 21px;
          height: 21px;
          background: url("~/assets/icon/rstep2.png") no-repeat 0 0;
          vertical-align: middle;
          margin-right: 8px;
        }
      }
      .block-btn{
        width: 100%;
        margin-top: 60px;
      }
    }
  }
</style>
<template>
  <div class="account-pane">
    <div class="title">
      账号管理
    </div>
    <div class="pane-content">
      <div class="steps">
        <ul class="clearfix">
          <li :class="{'cur': active == 1}">账号信息</li>
          <li :class="{'cur': active == 2}">密码问题</li>
          <li :class="{'cur': active == 3}">密码修改</li>
          <li :class="{'cur': active == 4}">信息认证</li>
        </ul>
      </div>
      <div class="steps-tab">
        <div class="tab tab1" v-show="active == 1">
          <el-form :model="form1" ref="form1" :rules="rules1" label-position="left" label-width="120px" class="form">
            <div class="logo clearfix">
              <i></i>添加头像
              <div class="fr">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <img src="~/assets/upload_logo.png" alt="" v-else>
                  <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                </el-upload>
              </div>
            </div>
            <el-form-item prop="name" label="登录账号">
              <el-input placeholder="输入名称" v-model="form1.name">
              </el-input>
            </el-form-item>
            <el-form-item prop="name" label="密码">
              <el-input placeholder="输入名称" type="password" v-model="form1.name">
              </el-input>
            </el-form-item>
            <el-form-item prop="name" label="姓名">
              <el-input placeholder="输入名称" v-model="form1.name">
              </el-input>
            </el-form-item>
            <el-form-item prop="name" label="联系方式">
              <el-input placeholder="联系方式" v-model="form1.name">
              </el-input>
            </el-form-item>
            <el-form-item prop="areaId" label="常住地市">
              <el-input placeholder="选择常住地址" v-model="form1.areaName" @click.native="showAreaPick">
              </el-input>
              <area-pick ref="areaPick" @areaChecked="areaChecked"></area-pick>
            </el-form-item>
            <el-form-item class="btn-mt" label-width="0px">
              <router-link tag="button" class="el-button block-btn el-button--primary" to="/firm/register/step1">
                <span>提交</span>
              </router-link>
            </el-form-item>
          </el-form>
        </div>
        <div class="tab tab2" v-show="active == 2">
          <el-form :model="form2" ref="form2" :rules="rules2" label-position="top" label-width="120px" class="form">
            <el-form-item prop="name" label="问题1">
              <el-input placeholder="输入名称" v-model="form2.name">
              </el-input>
            </el-form-item>
            <el-form-item prop="name" label="答案1">
              <el-input placeholder="输入名称" type="password" v-model="form2.name">
              </el-input>
            </el-form-item>
            <el-form-item prop="name" label="问题2" style="margin-top: 30px;">
              <el-input placeholder="输入名称" v-model="form2.name">
              </el-input>
            </el-form-item>
            <el-form-item prop="name" label="答案2">
              <el-input placeholder="联系方式" v-model="form2.name">
              </el-input>
            </el-form-item>
            <el-form-item prop="areaId" label="问题3" style="margin-top: 30px;">
              <el-input placeholder="选择常住地址" v-model="form2.areaName">
              </el-input>
            </el-form-item>
            <el-form-item prop="name" label="答案3">
              <el-input placeholder="联系方式" v-model="form2.name">
              </el-input>
            </el-form-item>
            <el-form-item class="btn-mt" label-width="0px">
              <router-link tag="button" class="el-button block-btn el-button--primary" to="/firm/register/step1">
                <span>提交</span>
              </router-link>
            </el-form-item>
          </el-form>
        </div>
        <div class="tab tab3" v-show="active == 3"></div>
        <div class="tab tab4" v-show="active == 4">
          <el-form :model="form4" ref="form4" :rules="rules4" label-position="left" label-width="140px" class="form">
            <el-form-item label="证件类型">
              <el-select style="display: block;width: 100%;">
              </el-select>
            </el-form-item>
            <el-form-item prop="uscc" label="证件号">
              <el-input placeholder="证件号" v-model="form4.uscc">
              </el-input>
            </el-form-item>
            <el-form-item prop="uscc" label="身份证照片">
              <el-upload
                :action="uploadUrl"
                list-type="picture-card"
                :on-success="idCardSuccess"
                :on-preview="handleIDCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="idDialogVisible">
                <img width="100%" :src="idDialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
            <el-form-item class="btn-mt" label-width="0px">
              <router-link tag="button" class="el-button block-btn el-button--primary" to="/firm/register/step1">
                <span>提交</span>
              </router-link>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import areaPick from '~/components/areaPick/index.vue';
  export default {
    components: {
      areaPick
    },
    data() {
      return {
        active: 4,
        form1: {

        },
        rules1: {

        },
        form2:{},
        rules2:{},
        form3:{},
        rules3:{},
        form4:{},
        rules4:{},
      }
    },
    methods: {
      showAreaPick() {
        this.$refs.areaPick.open();
      },
      areaChecked({id,name}) {
        this.form.areaName = name;
        this.form.areaId = id;
        this.$nextTick(() => {});
      },
    }
  }
</script>
