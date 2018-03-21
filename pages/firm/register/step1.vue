<style>
  .el-input-group__append, .el-input-group__prepend {
    padding: 0 12px;
    background-color: #fff;
  }
</style>
<style scoped>
  .regBox {
    width: 1180px;
    margin: 0 auto;
    background: #fff;
    box-shadow: 1px 1px 1px #dee2e9;
    border-radius: 6px;
  }

  .regBox .form {
    width: 524px;
    margin: 0 auto;
    margin-top: 38px;
  }
  .regBox .img {
    text-align: center;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .regBox .name {
    font-size: 16px;
    color: #7e919a;
  }

  .block-btn {
    width: 100%;
  }

  .btn-mt {
    margin-top: 25px;
  }

  i.icon {
    display: inline-block;
  }

  i.icon1 {
    width: 17px;
    height: 17px;
    background: url("../../../assets/icon/reg-icon.png") no-repeat 0 0;
  }

  i.icon2 {
    width: 17px;
    height: 17px;
    background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -20px;
  }

  i.icon3 {
    width: 17px;
    height: 18px;
    background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -40px;
  }

  i.icon4 {
    width: 22px;
    height: 16px;
    background: url("../../../assets/icon/reg-icon.png") no-repeat 0 bottom;
  }

  i.icon5 {
    width: 22px;
    height: 22px;
    background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -60px;
  }

  i.icon6 {
    width: 22px;
    height: 18px;
    background: url("../../../assets/icon/reg-icon.png") no-repeat 4px -80px;
  }

  i.icon7 {
    width: 22px;
    height: 18px;
    background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -99px;
  }

  i.icon8 {
    width: 22px;
    height: 20px;
    background: url("../../../assets/icon/reg-icon.png") no-repeat 2px -118px;
  }

  i.icon9 {
    width: 22px;
    height: 18px;
    background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -139px;
  }

  i.icon10 {
    width: 22px;
    height: 18px;
    background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -158px;
  }

  i.icon11 {
    width: 22px;
    height: 18px;
    background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -176px;
  }

  i.icon12 {
    width: 22px;
    height: 18px;
    background: url("../../../assets/icon/reg-icon.png") no-repeat 0 -195px;
  }

  i.icon13 {
    width: 22px;
    height: 22px;
    background: url("../../../assets/icon/reg-icon.png") no-repeat 2px -214px;
  }

  /*form1*/
  .regBox .form1 {
    margin-top: 104px;
  }

  .regBox .goLogin {
    margin-top: 116px;
  }

  .regBox .goLogin i {
    margin-bottom: -3px;
    margin-right: 18px;
  }

  .regBox .goLogin span {
    color: #429ffe;
    cursor: pointer;
  }
</style>
<template>
  <div class="regBox">
    <steps :active="0" :stepsArr="stepsArr"></steps>
    <el-tabs tab-position="left" style="height: 600px;padding-left: 40px;">
      <el-tab-pane label="手机验证">
        <div class="check form">
          <p class="name text-center">登录账户&ensp; <b>{{firmUser.loginName}}</b></p>
          <div class="img"><img src="~/assets/tel-check.png" alt=""></div>
          <el-form ref="form" :model="form" :rules="rules" label-position="left" label-width="100px">
            <el-form-item label="手机号码" prop="mobile">
              <el-row>
                <el-col :span="18">
                  <el-input v-model="form.mobile"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="动态验证码" prop="smsCode">
              <el-row>
                <el-col :span="18">
                  <el-input v-model="form.smsCode"></el-input>
                </el-col>
                <el-col :span="4" style="margin-left: 10px;">
                  <el-button size="small">获取短信验证码</el-button>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :span="18">
                  <el-button style="display: block;width: 100%;" type="primary" @click.native="quickNext" :loading="btnLoading1">快速体验</el-button>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :span="18">
                  <el-button style="display: block;width: 100%;" @click.native="next" :loading="btnLoading2">完善企业信息</el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Email验证">
        <div class="check form">
          <p class="name text-center">登录账户&ensp; <b>{{firmUser.loginName}}</b></p>
          <div class="img"><img src="~/assets/email-check.png" alt=""></div>
          <el-form label-position="left" label-width="100px">
            <el-form-item label="Email地址">
              <el-row>
                <el-col :span="18">
                  <el-input></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :span="18">
                  <el-button style="display: block;width: 100%;" type="primary">发送Email进行验证</el-button>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :span="18">
                  <el-button style="display: block;width: 100%;">完善企业信息</el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
  import stepMixins from './step.mixin.js';
  import Steps from '~/components/steps/step.vue';
  import {mapGetters} from 'vuex';
  export default {
    layout: 'firmregister',
    mixins: [stepMixins],
    components: {
      Steps
    },
    computed: mapGetters(['firmUser']),
    data() {
      return {
        btnLoading1: false,
        btnLoading2: false,
        form: {
          smsCode: 8888
        },
        rules: {
          mobile: [{required: true,trigger: 'blur', message: '请输入手机号码'}],
          smsCode: [{required: true,trigger: 'blur', message: '请输入验证码'}]
        }
      }
    },
    methods: {
      telCheck() {
        return new Promise((resolve, reject) => {
          this.$refs.form.validate((valid) => {
            if (valid) {
              this.$fetch.postFirm('/companyUser/bindMobile', this.form).then((res) => {
                if (res.code == 0) {
                  resolve();
                } else {
                  this.$message.error(res.msg);
                  reject();
                }
              })
            }else{
              reject();
            }
          })
        })
      },
      quickNext() {
        this.btnLoading1 = true;
        this.telCheck().then(() => {
          this.btnLoading1 = false;
          this.$router.push('/firm/center');
        }).catch(() => {
          this.btnLoading1 = false;
        })
      },
      next() {
        this.btnLoading2 = true;
        this.telCheck().then(() => {
          this.btnLoading2 = false;
          this.$router.push('/firm/register/step2');
        }).catch(() => {
          this.btnLoading2 = false;
        })
      }
    }
  }
</script>
