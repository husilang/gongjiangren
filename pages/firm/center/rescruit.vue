<style>
  .container{
    background: #fff;
    width: 100%;
    border-radius: 4px;
    margin-top: 8px;
    padding: 40px 48px 30px 52px;
  }
  .info-container{
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 40px 48px 30px 52px;

  }
  .info-container .info {
    color: #888e9a;
    font-size: 14px;
  }
</style>
<template>
  <div>
    <!--<firm-info></firm-info>-->
    <div class="info-container">
      <h4>上海花旗建筑劳务有限公司 <el-tag type="danger" size="mini">智能优选</el-tag></h4>
      <div class="clearfix info">
        <div class="fl">
          <p>企业综合评价指数：No.123(135) | 网站使用时间： 365天</p>
          <p>
            <span>正在招聘人数 5</span>
            <span>累计招聘人数 5</span>
            <span>正在平台管理人数 5</span>
            <span>累计平台管理人数 5</span>
          </p>
        </div>
        <div class="fr">
          <span class="line"></span>
          <p>网站排名  <el-tag type="danger" size="mini">1</el-tag></p>
          <p>企业荣誉：优秀企业奖，2017年最佳雇主奖</p>
        </div>
      </div>
    </div>
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
<script type="text/ecmascript-6">
  import {getFirmInfo} from '~/API/firm';
  export default  {
    async asyncData({store,params}) {
      let {data: info} = await getFirmInfo();
      return {
        info
      }
    },
    middleware: 'firmauth',
    layout: 'firmcenter',
    data() {
      return {
        tab: '1',
        info: {}
      }
    },
    methods: {
      handleClick() {}
    }
  }
</script>

