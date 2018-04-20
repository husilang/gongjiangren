<template>
  <div class="regBox">
    <steps :active="4" :stepsArr="stepsArr"></steps>
    <div class="form" style="width: 724px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix header">
          <div class="fl">
            <strong class="jobName">高级电焊技师</strong>
          </div>
          <div class="fl main-info">
            <p><span>黄埔建工集团</span><span>新加坡龙婆国际酒店项目</span></p>
            <p><span>就职起止时间</span><strong>2012/3/15 至 2018/2/23</strong></p>
          </div>
          <el-button type="text" style="float: right">编辑主要业绩</el-button>
        </div>
        <div class="box-content">
          <p><span>工作地点</span>上海</p>
          <p><span>月薪</span>20000元/月*12个月</p>
          <p><span>职责业绩</span><span class="desc">负责华东地区的市场拓展工作</span></p>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix header">
          <div class="fl">
            <strong class="jobName">高级电焊技师</strong>
          </div>
          <div class="fl main-info">
            <p><span>黄埔建工集团</span><span>新加坡龙婆国际酒店项目</span></p>
            <p><span>就职起止时间</span><strong>2012/3/15 至 2018/2/23</strong></p>
          </div>
          <el-button type="text" style="float: right">编辑主要业绩</el-button>
        </div>
        <div class="box-content">
          <p><span>工作地点</span>上海</p>
          <p><span>月薪</span>20000元/月*12个月</p>
          <p><span>职责业绩</span><span class="desc">负责华东地区的市场拓展工作</span></p>
        </div>
      </el-card>
      <nuxt-link tag="button" class="el-button el-button--primary is-plain" style="display: block;width: 100%;margin-top: 32px;" to="/client/register/add-achieve">
        <i class="el-icon-plus"></i>
        <span>添加业绩</span>
      </nuxt-link>
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
<style lang="less" scoped>
  .box-card{
    margin-bottom: 28px;
  }
  .box-card .header{
    strong{
      margin-right: 38px;
      font-size: 16px;
      line-height: 30px;
    }
    .main-info{
      color: #888e9a;
      line-height: 30px;
      font-size: 16px;
      strong{
        color: #000;
      }
    }
    span{
      font-size: 16px;
      color: #777d8e;
      margin-right: 14px;
    }
  }
  .box-content {
    span{
      display: inline-block;
      width: 108px;
      line-height: 35px;
      &.desc{
        color: #888e9a;
        width: 548px;
        line-height: 23px;
      }
    }
  }
</style>
<style lang="less">
  @import "register.less";
  .regBox .form {
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
