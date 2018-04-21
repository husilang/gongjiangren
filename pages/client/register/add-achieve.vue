<template>
  <div class="regBox">
    <div class="title">
      添加业绩
    </div>
    <el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="140px" class="box">
      <el-form-item label="公司名称">
        <el-row>
          <el-col :span="8">
            <el-input v-model="form.companyName"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item prop="workAge" label="工作年限">
        <el-row>
          <el-col :span="8">
            <el-input placeholder="工作年限" v-model="form.workAge">
              <template slot="append">年及以上</template>
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="工种">
        <el-row>
          <el-col :span="8">
            <el-select style="display: block;width: 100%;" v-model="form.jobTypeId">
              <el-option v-for="item in jobTypes" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-form-item>
      <el-row :gutter="30">
        <el-col :span="11">
          <el-form-item label="工作地点">
            <el-input v-model="form.areaName"  @click.native="showAreaPick"></el-input>
            <area-pick ref="areaPick" @areaChecked="areaChecked" toLevel="2"></area-pick>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="下属人数">
            <el-input v-model="form.subordinateAmount"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="任职时间">
        <el-row>
          <el-col :span="8">
            <el-date-picker type="daterange" v-model="dateRange"></el-date-picker>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="项目业界">
        <el-input type="textarea" v-model="form.workDescription">
        </el-input>
      </el-form-item>
      <el-form-item class="btn-mt" label-width="0">
        <el-row :gutter="16">
          <el-col :span="8" :offset="4">
            <nuxt-link class="el-button block-btn el-button--default" to="/client/register/step5">
              <span>取消</span>
            </nuxt-link>
          </el-col>
          <el-col :span="8">
            <el-button class="block-btn" :loading="btnLoading" type="primary" @click.native="submitRegist">保存</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="less">
  @import "register.less";
  .box{
    margin-top: 30px;
  }
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
  import areaPick from '~/components/areaPick/index.vue';
  export default {
    middleware: 'clientauth',
    mixins: [stepMixins],
    layout: 'clientregister',
    components: {
      Steps,
      areaPick
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
        dateRange: [],
        jobTypes: [],
        skillLevels: [],
        yesOrNo: [],
        btnLoading: false,
        form: {

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
              this.form.beginDate = this.dateRange?this.dateRange[0]:'';
              this.form.endDate = this.dateRange?this.dateRange[1]:'';
              this.$fetch.post('/userWorkexperience/', this.form).then(res => {
                if (res.code == "0") {
                  this.$router.push('/client/register/step5');
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
