<style scoped>
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
  .firm-center-enter-active, .firm-center-leave-active {
    transition: opacity .3s ease-in-out;
  }
  .firm-center-enter, .firm-center-leave-to{
    opacity: 0;
  }
</style>
<template>
  <div class="register-layout">
    <firm-page-top></firm-page-top>
    <div class="title">
      <div class="common-width clearfix">
        <div class="fl">
          <span style="font-size: 36px;line-height: 80px;cursor: pointer" @click="goPath('/firm/center')">企业中心</span>
          <span class="line"></span>
          <span style="margin-top: 24px;">
            <img src="http://wx1.sinaimg.cn/orj360/9359621dly1fp8udaub8ej20j60j6q4i.jpg" alt="">
          </span>
          <span style="margin-top: 30px;">{{firmUser.loginName}}</span>
          <button class="exit-btn" @click="logout">退出</button>
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
        <transition mode="out-in" name="firm-center">
          <nuxt/>
        </transition>
      </div>
    </div>
    <firm-page-footer></firm-page-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import firmPageTop from '~/components/firmPageTop/index'
  import firmPageFooter from '~/components/firmPageFooter/index'
  export default  {
    computed: mapGetters(['firmUser']),
    methods: {
      goPath(path){
        this.$router.push(path);
      },
      logout() {
        this.$confirm('确定退出?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$fetch.postFirm('/companyUser/logout').then((res) => {
            if (res.code == 0) {
              this.$store.dispatch('firmLogout', res.data).then(() => {
                this.$router.push('/firm/login');
              });
            } else {
              this.$message(res.msg);
            }
          })
        }).catch(() => {
        });

      }
    },
    components: {
      firmPageTop,
      firmPageFooter
    }
  }
</script>
