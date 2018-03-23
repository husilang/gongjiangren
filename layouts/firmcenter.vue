<style scoped lang="less">
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
  .register-layout .title img.portrait {
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
    height: 64px;
    opacity: 0.75;
    margin: 0;
    img {width: 100%;}
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #c0ccda;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #c0ccda;
  }
  .firm-center-enter-active, .firm-center-leave-active {
    transition: opacity .2s ease-in-out;
  }
  .firm-center-enter, .firm-center-leave-to{
    opacity: 0.6;
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
            <img class="portrait" src="http://wx1.sinaimg.cn/orj360/9359621dly1fp8udaub8ej20j60j6q4i.jpg" alt="">
          </span>
          <span style="margin-top: 30px;">{{firmUser.loginName}}</span>
          <button class="exit-btn" @click="logout">退出</button>
        </div>
        <div class="fr">
          <el-carousel :interval="4000" type="card" height="64px" indicator-position="none" :autoplay="false" style="margin-top: 8px;width: 200px;">
            <el-carousel-item v-for="item in 3" :key="item">
              <h3><img :src="imgs[item]" alt=""></h3>
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
    data() {
      return{
        imgs: ["",
          "http://pic33.nipic.com/20130909/13125244_122912091315_2.jpg",
          "http://img.zcool.cn/community/0381a1856d79d2732f875520fd7b4c3.jpg",
          "http://img0.imgtn.bdimg.com/it/u=4063375243,1657536129&fm=27&gp=0.jpg"
        ]
      }
    },
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
