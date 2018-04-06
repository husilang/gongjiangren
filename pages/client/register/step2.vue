<style scope lang="less">
  .logo {
    font-size: 14px;
    margin-bottom: 8px;
    color: #939393;
    line-height: 90px;
    i {
      display: inline-block;
      width: 21px;
      height: 21px;
      background: url("~/assets/icon/rstep2.png") no-repeat 0 0;
      vertical-align: middle;
      margin-right: 8px;
    }
  }
</style>
<template>
  <div class="regBox">
    <steps :active="1" :stepsArr="stepsArr"></steps>
    <el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="0px" class="form form2">
      <div class="logo clearfix">
        <i></i>添加头像
        <div class="fr">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <img src="~/assets/upload_logo.png" alt="" v-else>
            <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
          </el-upload>
        </div>
      </div>
      <el-form-item prop="name">
        <el-input placeholder="输入名称" v-model="form.name">
          <template slot="prepend">
            <i class="icon icon5"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input placeholder="输入登录密码" v-model="form.name">
          <template slot="prepend">
            <i class="icon icon5"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input placeholder="再次确认密码" v-model="form.name">
          <template slot="prepend">
            <i class="icon icon5"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input placeholder="姓名" v-model="form.name">
          <template slot="prepend">
            <i class="icon icon5"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input placeholder="民族" v-model="form.name">
          <template slot="prepend">
            <i class="icon icon5"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input placeholder="联系方式" v-model="form.name">
          <template slot="prepend">
            <i class="icon icon5"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="areaId">
        <el-input placeholder="选择常住地址" v-model="form.areaName" @click.native="showAreaPick">
          <template slot="prepend">
            <i class="icon icon8"></i>
          </template>
        </el-input>
        <area-pick ref="areaPick" @areaChecked="areaChecked"></area-pick>
      </el-form-item>
      <el-form-item prop="address">
        <el-input placeholder="输入详细地址" v-model="form.address">
          <template slot="prepend">
            <i class="icon icon9"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="btn-mt">
        <el-row :gutter="16">
          <el-col :span="12">
            <router-link tag="button" class="el-button block-btn el-button--default" to="/firm/register/step1">
              <span>快速注册</span>
            </router-link>
          </el-col>
          <el-col :span="12">
            <el-button class="block-btn" :loading="btnLoading" type="primary" @click.native="submitRegist">下一步</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
  .el-input-group__append, .el-input-group__prepend {
    padding: 0 12px;
    background-color: #fff;
  }
</style>
<style scoped>
  .select-icon{
    position:absolute;
    left:0;
    width: 48px;
    height: 40px;
    text-align: center;
    border: 1px solid #dcdfe7;
    border-radius: 4px 0 0 4px;
  }
</style>
<style lang="less">
  @import "./register.less";
</style>
<script type="text/ecmascript-6">
  import Steps from '~/components/steps/step.vue';
  import areaPick from '~/components/areaPick/index.vue';
  import stepMixins from './step.mixin.js';
  import {getGlobalDict} from '~/API/dict';
  export default {
    async asyncData({params, error}) {
      let {data: natures} = await getGlobalDict('company_nature');
      let {data: scales} = await getGlobalDict('company_scale');
      return {
        companyNatures: natures,
        companyScales: scales
      }
    },
    mixins: [stepMixins],
    layout: 'clientregister',
    components: {
      Steps,
      areaPick
    },
    data() {
      return {
        companyNatures: [],
        companyScales: [],
        btnLoading: false,
        select: '',
        form: {
        },
        rules: {
          name: [
            {required: true, message: '请输入企业名称', trigger: 'blur'}
          ],
          nature: [
            {required: true, message: '请选择企业性质', trigger: 'blur'}
          ],
          scale: [
            {required: true, message: '请选择企业规模', trigger: 'blur'}
          ],
          areaId: [
            {required: true, message: '请选择企业地区', trigger: 'change'}
          ],
          address: [
            {required: true, message: '请输入企业详细地址', trigger: 'blur'}
          ],
          contact: [
            {required: true, message: '请输入企业号码', trigger: 'blur'}
          ],
          adminEmail: [
            {required: true, message: '请输入电子邮箱', trigger: 'blur'}
          ],
          adminName: [
            {required: true, message: '请输入管理员姓名', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      showAreaPick() {
        this.$refs.areaPick.open();
      },
      areaChecked({id,name}) {
        this.form.areaName = name;
        this.form.areaId = id;
        this.$nextTick(() => {});
      },
      submitRegist() {
        this.btnLoading = true;
        this.$refs.form.validate((valid) => {
          try {
            if (valid) {
              this.$fetch.postFirm('/companyUser/addInfo', this.form).then(res => {
                if (res.code == "0") {
                  this.$router.push('/firm/register/step3');
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
