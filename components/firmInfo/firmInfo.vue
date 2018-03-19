<template>
  <div class="container">
    <h4>上海花旗建筑劳务有限公司 <el-tag type="danger" size="mini">智能优选</el-tag></h4>
    {{companyNatures}}
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
</template>
<style>
  .container{
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 40px 48px 30px 52px;

  }
  .container .info {
    color: #888e9a;
    font-size: 14px;
  }
</style>
<script type="text/ecmascript-6">
  import {getGlobalDict} from '~/API/dict';
  export default {
    async fetch({store,params}) {
      let {data: natures} = await getGlobalDict('company_nature');
      let {data: scales} = await getGlobalDict('company_scale');
      console.log(natures);
      return {
        companyNatures: natures,
        companyScales: scales
      }
    },
    data() {
      return {
        companyNatures:[],
        info: {}
      }
    },
    created() {
      //this.getInfo();
    },
    methods: {
      async getInfo() {
        let {data} = await this.$fetch.getFirm('/companyUser/viewInfo');
        console.log(data);
        this.info = data;
      }
    }
  }
</script>
