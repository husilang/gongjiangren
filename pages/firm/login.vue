<template>
  <div class="box">
    <div class="commonWidth clearfix">
      <div class="login-box fr">
        <p class="text-center title">在这里，拥有大国工匠</p>
        <el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="0px" class="form">
          <el-form-item prop="loginName">
            <el-input v-model="form.loginName" placeholder="请填写用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" type="password" placeholder="密码（6-16位字母、数字、无空格）"></el-input>
          </el-form-item>
          <el-form-item prop="captcha">
            <el-input v-model="form.captcha" placeholder="验证码"></el-input>
          </el-form-item>
          <el-form-item class="text-center" v-if="isRegister">
            <el-checkbox v-model="checked">接受 <router-link tag="button" class="el-button el-button--text" to="/firm/protocol"><span>《用户服务协议》</span></router-link> </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button class="btn-block" type="primary" @click="register" :loading="registing" v-if="isRegister">企业注册</el-button>
            <el-button class="btn-block" type="primary" @click="login" :loading="logging" v-else>企业登录</el-button>
          </el-form-item>
          <div class="clearfix oper">
            <p class="fl" v-if="isRegister">已有账号，马上<el-button type="text" @click.native="isRegister=false">登录</el-button></p>
            <p class="fl" v-else>没有账号，马上<el-button type="text" @click.native="isRegister = true">注册</el-button></p>
            <p class="fr"><el-button type="text">忘记密码？</el-button></p>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    middleware: 'firmloginauth',
    layout: "firmlogin",
    data() {
      return {
        isRegister: true,
        checked: true,
        logging: false,
        registing: false,
        rules: {
          loginName: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          captcha: [
            {required: true, message: '请输入验证码', trigger: 'blur'}
          ]
        },
        form: {
          captcha: '8888',
          loginName:''
        }
      }
    },
    methods: {
      register() {
        this.registing = true;
        this.$refs.form.validate((valid) => {
          try {
            if (valid) {
              this.$fetch.post('/companyUser/register', this.form).then(res => {
                if (res.code == 0) {
                  this.$store.dispatch('firmLogin', res.data).then(() => {
                    this.$router.push('/firm/register/step1');
                  });
                } else {
                  this.registing = false;
                  this.$message.error(res.msg);
                }
              });
            }
          } catch (e) {
            this.$message.error(e.message);
          } finally {
            this.registing = false;
          }
        });
      },
      login() {
        this.logging = true;
        this.$refs.form.validate(valid => {
          if (valid) {
            this.$fetch.post('/companyUser/login', this.form).then(res => {
              this.logging = false;
              if (res.code == 0) {
                this.$store.dispatch('firmLogin', res.data).then(() => {
                  this.$router.push('/firm/center');
                });
              } else {
                this.$message.error(res.msg);
              }
            })
          } else {
            this.logging = false;
            return false;
          }
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .commonWidth{
    width: 1200px;
    margin: 0 auto;
  }
  .box {
    background: #0694ff url('~/assets/login_bg1.jpg') no-repeat center 0;
    padding-top: 114px;
    padding-bottom: 246px;
  }
  .btn-block {
    display: block;
    width: 100%;
  }
  .login-box {
    width: 402px;
    height: 452px;
    background: #fff;
    border-radius: 4px;
    padding-left: 37px;
    padding-right: 37px;
    box-shadow: 2px 2px 20px #0876b4;


    p.title {
      font-size: 24px;
      color: #253e52;
      padding-top: 34px;
      padding-bottom: 30px;
    }
    .oper p {
      font-size: 14px;
      color: #5e5e5e;
    }
  }
</style>
