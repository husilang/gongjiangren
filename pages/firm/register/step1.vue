<style>
  .el-input-group__append, .el-input-group__prepend {
    padding: 0 12px;
    background-color: #fff;
  }
</style>
<style>
  .regBox {
    width: 1180px;
    padding-bottom: 120px;
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
    <el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="0px" class="form form1">
      <el-form-item prop="loginName">
        <el-input placeholder="输入企业账户名" v-model="form.loginName">
          <template slot="prepend">
            <i class="icon icon1"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="输入企业登录密码" v-model="form.password" type="password">
          <template slot="prepend">
            <i class="icon icon2"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="rePassword">
        <el-input placeholder="再次确认管理员密码" v-model="form.rePassword" type="password">
          <template slot="prepend">
            <i class="icon icon3"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="btn-mt">
        <el-button type="primary" @click="submitRegist1" :loading="reg1" class="block-btn">下一步</el-button>
      </el-form-item>
      <p class="text-center goLogin"><i class="icon icon4"></i>已有账户，去&nbsp;<span
              @click="goPath('/firm/login')">登录</span>&nbsp;!</p>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
  import stepMixins from './step.mixin.js';
  import Steps from '~/components/steps/step.vue';
  export default {
    layout: 'register',
    mixins: [stepMixins],
    components: {
      Steps
    },
    data() {
      return {
        reg1: false,
        form: {
          captcha: 8888
        },
        rules: {
          loginName: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          rePassword: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        form2: {},
        rules2: {}
      }
    },
    methods: {
      submitRegist1() {
        this.reg1 = true;
        this.$refs.form.validate((valid) => {
          try {
            if (valid) {
              this.$fetch.post('/companyUser/register', this.form).then(res => {
                console.log(res);
                if (res.code == 0) {
                  this.$store.dispatch('firmLogin', res.data).then(() => {
                    this.$router.push('/firm/register/step2');
                  });
                } else {
                  this.reg1 = false;
                  this.$Message.error(res.msg);
                }
              });
            }
          } catch (e) {
            this.$Message.error(e.message);
          } finally {
            this.reg1 = false;
          }

        });

      }
    }
  }
</script>