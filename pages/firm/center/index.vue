<style>
  .container{
    background: #fff;
    width: 100%;
    border-radius: 4px;
    margin-top: 8px;
  }
</style>
<template>
  <div>
    <firm-info></firm-info>
    <div class="container">
      <el-tabs v-model="tab" @tab-click="handleClick">
        <el-tab-pane name="1" label="企业招聘">
          <el-button-group size="small">
            <el-button type="primary">正在招聘</el-button>
            <el-button>历史招聘</el-button>
          </el-button-group>
          <el-row type="flex" justify="space-between" style="margin-top: 18px;">
            <el-col :span="12">
              <el-input size="small">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
            <el-col :span="4">
              <el-button size="small">优选人才</el-button>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <el-button size="small">发布新职位</el-button>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane name="2" label="候选人才">候选人才</el-tab-pane>
        <el-tab-pane name="3" label="面试日程">面试日程</el-tab-pane>
        <el-tab-pane name="4" label="人才录用">人才录用</el-tab-pane>
        <el-tab-pane name="5" label="人才库">人才库</el-tab-pane>
      </el-tabs>
    </div>
    <div class="container">
      <div class="clearfix">
        <div class="fl">
          <p>
            <span>项目监理</span>
            <span>|龙江核电站2期工程</span>
            <span>|8人</span>
          </p>
        </div>
        <div class="fr">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import firmInfo from '~/components/firmInfo/firmInfo'
  export default  {
    middleware: 'firmauth',
    layout: 'firmcenter',
    components: {
      firmInfo
    },
    data() {
      return {
        tab: '1'
      }
    },
    methods: {
      handleClick() {}
    }
  }
</script>

