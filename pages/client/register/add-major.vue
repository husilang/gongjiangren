<template>
  <div class="regBox">
    <div class="title">
      添加专业信息
    </div>
    <el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="140px" class="form form2">
      <el-form-item label="工种">
        <el-select style="display: block;width: 100%;" v-model="form.jobTypeId">
          <el-option v-for="item in jobTypes" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="workAge" label="工作年限">
        <el-input placeholder="工作年限" v-model="form.workAge">
          <template slot="append">年及以上</template>
        </el-input>
      </el-form-item>
      <el-form-item label="熟练程度">
        <el-select style="display: block;width: 100%;" v-model="form.level">
          <el-option v-for="item in skillLevels" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否有证书">
        <el-select style="display: block;width: 100%;" v-model="form.hasCert">
          <el-option v-for="item in yesOrNo" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="workCertImgs" label="从业证书">
        <el-upload
          :action="uploadUrl"
          list-type="picture-card"
          :on-success="uploadSuccess1">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item prop="honorCertImgs" label="荣誉证书">
        <el-upload
          :action="uploadUrl"
          list-type="picture-card"
          :on-success="uploadSuccess2">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item prop="jobQualificationCertImgs" label="职业资格证">
        <el-upload
          :action="uploadUrl"
          list-type="picture-card"
          :on-success="uploadSuccess3">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item class="btn-mt" label-width="0">
        <el-row :gutter="16">
          <el-col :span="12">
            <nuxt-link class="el-button block-btn el-button--default" to="/client/register/step4">
              <span>取消</span>
            </nuxt-link>
          </el-col>
          <el-col :span="12">
            <el-button class="block-btn" :loading="btnLoading" type="primary" @click.native="submitRegist">保存</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-input-group__append, .el-input-group__prepend {
    padding: 0 12px;
    background-color: #fff;
  }
</style>
<style lang="less">
  @import "register.less";
  .title{
    font-size: 20px;
    text-align: center;
    color: #2b3e47;
    font-weight: bold;
    height: 94px;
    line-height: 94px;
    border-bottom: 1px solid #00b7ee;
  }
  .regBox{
    padding-left: 78px;
    padding-right: 78px;
  }
</style>
<script type="text/ecmascript-6">
  import Steps from '~/components/steps/step.vue';
  import stepMixins from './step.mixin.js';
  import consts from '~/utils/consts';
  import {getGlobalDict, getJobType} from "../../../API/dict";

  export default {
    middleware: 'clientauth',
    mixins: [stepMixins],
    layout: 'clientregister',
    components: {
      Steps
    },
    async asyncData({params, error}){
      try {
        let {data: jobTypes} = await getJobType({pageNo: 1, pageSize: 10});
        let {data: skillLevels} = await getGlobalDict('skill_level');
        let {data: yesOrNo} = await getGlobalDict('yes_no');
        return {
          jobTypes,
          skillLevels,
          yesOrNo
        }
      } catch (error) {
        error({statusCode: 404, message: 'Post not found'})
      }
    },
    computed: {
      uploadUrl() {
        return consts.API_URL+'/common/file/upload'
      }
    },
    data() {
      return {
        jobTypes: [],
        skillLevels: [],
        yesOrNo: [],
        btnLoading: false,
        form: {
          workCertImgs: '',
          honorCertImgs: '',
          jobQualificationCertImgs: ''
        },
        rules: {
          idcard: [
            {required: true, message: '请输入身份证号', trigger: 'blur'}
          ],
        },
        idDialogVisible: false,
        idDialogImageUrl: ''
      }
    },
    methods: {
      uploadSuccess1(res) {
        console.log(res);
        if (this.form.workCertImgs === '') {
          this.form.workCertImgs = res.data;
        } else {
          this.form.workCertImgs = this.form.workCertImgs+','+res.data;
        }
      },
      uploadSuccess2(res) {
        if (this.form.honorCertImgs === '') {
          this.form.honorCertImgs = res.data;
        } else {
          this.form.honorCertImgs = this.form.honorCertImgs+','+res.data;
        }
      },
      uploadSuccess3(res) {
        if (this.form.jobQualificationCertImgs === '') {
          this.form.jobQualificationCertImgs = res.data;
        } else {
          this.form.jobQualificationCertImgs = this.form.jobQualificationCertImgs+','+res.data;
        }
      },
      submitRegist() {
        this.btnLoading = true;
        this.$refs.form.validate((valid) => {
          try {
            if (valid) {
              this.$fetch.post('/userSkill/edit', this.form).then(res => {
                if (res.code == "0") {
                  this.$router.push('/client/register/step4');
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
