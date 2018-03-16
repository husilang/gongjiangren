<template>
  <div class="box">
    <el-Card :bordered="false">
      <p slot="title">在这里，拥有大国工匠</p>
      <el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="120px" class="form">
        <el-form-item label="企业账号" prop="loginName">
          <el-input v-model="form.loginName"></el-input>
        </el-form-item>
        <el-form-item label="企业密码" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <el-input v-model="form.captcha"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" :loading="logging">登录</el-button>
          <el-button type="primary" @click="goPath('/firm/register/step1')">注册</el-button>
        </el-form-item>
      </el-form>
    </el-Card>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    middleware: 'firmloginauth',
    data() {
      return {
        logging: false,
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
                this.$Message.error(res.msg);
              }
            })
          } else {
            this.logging = false;
            return false;
          }
        })

      },
      goPath(path) {
        this.$router.push(`${path}`)
      }
    }
  }
</script>
<style>
  .box {
    width: 800px;
    border: 1px solid #dcdcdc;
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 20px;
    transform: translate(-50%, -50%);
  }
  .form {
    margin-top: 38px;
  }
</style>
