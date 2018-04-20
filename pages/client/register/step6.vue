<template>
  <div class="regBox">
    <steps :active="5" :stepsArr="stepsArr"></steps>
    <div class="form clearfix" style="width: 424px;">
      <div class="fl img">
        <img src="../../../assets/no-info.png" alt="">
      </div>
      <div class="fr check-box-wrap">
        <p><el-checkbox label="有证书"></el-checkbox></p>
        <p><el-checkbox label="具备团队合作精神"></el-checkbox></p>
        <p><el-checkbox label="沟通能力好"></el-checkbox></p>
        <p><el-checkbox label="吃苦耐劳"></el-checkbox></p>
      </div>
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
  </div>
</template>
<style lang="less">
  @import "register.less";
  .form{
    padding-top: 30px;
    padding-bottom: 40px;
  }
  .form .check-box-wrap p{
    margin-bottom: 20px;
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
