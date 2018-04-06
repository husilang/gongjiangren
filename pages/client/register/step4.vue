<template>
  <div class="regBox">
    <steps :active="3" :stepsArr="stepsArr"></steps>
    <div class="form">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <p class="fl">
            <strong>高级电焊技师</strong>
            <span>6年工作经验</span>
            <span>技能熟练</span>
            <span>有证书</span>
          </p>
          <el-button type="text" style="float: right">编辑专业信息</el-button>
        </div>
        <div class="box-content">
          <div class="item">
            <span>从业证书</span>
            <div class="img">
              <img src="" alt="">
            </div>
            <div class="img">
              <img src="" alt="">
            </div>
            <div class="img">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </el-card>
      <el-button style="display: block;width: 100%;">添加专业信息</el-button>
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
<style>

</style>
<style lang="less">
  @import "register.less";
  .regBox .form {
    width: 724px;
    margin: 0 auto;
    margin-top: 38px;
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

      },
      licenceSuccess(res, file) {
        this.form.licenceImg = res.data;
      },
      certImgSuccess(res, file) {
        if (this.form.certImgs === '') {
          this.form.certImgs = res.data;
        } else {
          this.form.certImgs = this.form.certImgs+','+res.data;
        }
      },
      idCardSuccess(res, file) {
        if (this.form.adminIdcardImgs === '') {
          this.form.adminIdcardImgs = res.data;
        } else {
          this.form.adminIdcardImgs = this.form.adminIdcardImgs+','+res.data;
        }
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleIDCardPreview(file) {
        this.idDialogImageUrl = file.url;
        this.idDialogVisible = true;
      }
    }
  }
</script>
