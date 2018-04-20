<template>
  <div class="regBox">
    <steps :active="7" :stepsArr="stepsArr"></steps>
    <div class="form clearfix" style="width: 424px;">
      <div class="img text-center">
        <img src="../../../assets/no-info.png" alt="">
      </div>
      <p class="text-center">注册完成，<nuxt-link tag="a" to="/client/job-search">快速搜索</nuxt-link> 合适的招聘信息吧！</p>
    </div>
  </div>
</template>
<style lang="less">
  @import "register.less";
  .form{
    padding-top: 30px;
    padding-bottom: 40px;
  }
  .form p{
    margin-top: 20px;
    font-size: 18px;
    color: #606d7e;
    a{
      font-weight: bold;
      color: #429ffe;
    }
  }
</style>
<script type="text/ecmascript-6">
  import Steps from '~/components/steps/step.vue';
  import stepMixins from './step.mixin.js';
  import consts from '~/utils/consts';
  export default {
    middleware: 'clientauth',
    mixins: [stepMixins],
    layout: 'clientregister',
    components: {
      Steps
    },
    computed: {
      uploadUrl() {
        return consts.API_URL+'/common/file/upload'
      }
    },
    data() {
      return {
        btnLoading: false,
        form: {
          licenceImg: '',
          certImgs: '',
          adminIdcardImgs: ''
        },
        rules: {
          uscc: [
            {required: true, message: '请输入企业统一信用代码', trigger: 'blur'}
          ],
          adminIdcard: [
            {required: true, message: '请输入身份证号', trigger: 'blur'}
          ]
        },

        dialogVisible: false,
        dialogImageUrl:'',
        idDialogVisible: false,
        idDialogImageUrl: ''
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
