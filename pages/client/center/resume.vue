<style lang="less" scoped>
  .resume-pane{
    background: #fff;
    border-radius: 4px;
    padding: 18px 15px 0 15px;

    .oper{
      background: #fafafa;
      height: 60px;
      padding-left: 12px;
      padding-right: 24px;
      margin-bottom: 16px;
      span.choose{
        display: block;
        width: 166px;
        height: 33px;
        background: #fff;
        text-align: center;
        border: 1px solid #93d1ff;
        line-height: 32px;
        margin-top: 15px;
        font-size: 18px;
        color: #303538;
      }
      .progress{
        width: 122px;
        height: 20px;
        background: #d7d7d7;
        border-radius: 2px;
        margin-top: 21px;
        margin-left: 22px;

        span{
          border-radius: 2px;
          display: block;
          width: 60%;
          height: 20px;
          background: #2aca5b;
          color: #fff;
          font-size: 12px;
          text-align: center;
          line-height: 20px;
        }
      }
      a{
        font-size: 14px;
        color: #626262;
        margin-right: 12px;
        line-height: 60px;
      }
      .line{

      }
      .resume-add-icon{

      }
    }
    .tabs{
      background: #fafafa;
      padding-top: 14px;
      margin-bottom: 45px;
      ul{
        padding-left: 38px;
        border-bottom: 1px solid #93d1ff;
        height: 40px;
      }
      li{
        display: block;
        float: left;
        width: 122px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #000;
        cursor: pointer;
        &.cur{
          font-weight: bold;
          color: #009afe;
          background: #fff;
          border: 1px solid #93d1ff;
          border-bottom-color: #fff;
        }
      }
    }
    .tab-content{
      min-height: 836px;
    }
    .tab{
      background: #fcfcfc;
      border: 1px solid #93d1ff;

      .title{
        padding-left: 28px;
        padding-right: 26px;
        font-size: 18px;
        color: #000;
        height: 78px;
        line-height: 78px;
        a.save{
          font-size: 14px;
          color: #009afe;
        }
      }
      .content{
        padding-left: 56px;
        padding-right: 54px;
      }
      .el-form-item__label{
        color: #000 !important;
        font-size: 16px !important;
      }
    }
  }
</style>
<template>
  <div class="resume-pane">
    <div class="oper clearfix">
      <div class="fl">
        <span class="fl choose">简历20180210</span>
        <p class="progress fl">
          <span>完成度60%</span>
        </p>
      </div>
      <div class="fr">
        <a href="">预览</a>
        <a href="">编辑</a>
        <a href="">下载</a>
        <a href="">刷新</a>
        <span class="line"></span>
        <a href=""><i class="resume-add-icon"></i></a>
      </div>
    </div>
    <div class="tabs">
      <ul class="clearfix">
        <li :class="{'cur': active == 1}" @click="tabClick(1)">基本资料</li>
        <li :class="{'cur': active == 2}" @click="tabClick(2)">职业意向</li>
        <li :class="{'cur': active == 3}" @click="tabClick(3)">主要业绩</li>
        <li :class="{'cur': active == 4}" @click="tabClick(4)">专业信息</li>
        <li :class="{'cur': active == 5}" @click="tabClick(5)">自我评价</li>
      </ul>
    </div>
    <div class="tab-content">
      <div class="tab tab1" v-show="active == 1">
        <div class="title clearfix">
          <p class="fl">基本资料</p>
          <p class="fr">
            <a href="" class="edit"></a>
            <a href="" class="save">保存</a>
          </p>
        </div>
        <div class="content">
          <el-form label-width="100px" label-position="left" size="small">
            <el-row :gutter="50">
              <el-col :span="12">
                <el-form-item label="姓名">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="性别">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="出生年份">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="手机号">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="户籍地点">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="居住地点">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="婚姻状态">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="职业">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="工作年限">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="邮件地址">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="工作状态">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <div class="tab tab2" v-show="active == 2">
        <div class="title clearfix">
          <p class="fl">职业意向</p>
          <p class="fr">
            <a href="" class="edit"></a>
            <a href="" class="save">保存</a>
          </p>
        </div>
        <div class="content">
          <el-form label-width="140px" label-position="left" size="small">
            <el-row>
                <el-form-item label="期待工种">
                  <el-col :span="8">
                    <el-input></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="期待工作地点">
                  <el-col :span="8">
                  <el-input></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="期待薪水">
                  <el-col :span="4">
                    <el-input></el-input>
                  </el-col>
                  <el-col :span="2" class="text-center">至</el-col>
                  <el-col :span="4">
                    <el-input></el-input>
                  </el-col>
                  <el-col :span="2" class="text-center">元/月</el-col>
                </el-form-item>
            </el-row>
          </el-form>
        </div>
      </div>
      <div class="tab tab3" v-show="active == 3">
        <div class="title clearfix">
          <p class="fl">主要业绩</p>
          <p class="fr">
            <a href="" class="edit"></a>
            <a href="" class="save">保存</a>
          </p>
        </div>
        <div class="content">
          <el-form label-width="140px" label-position="left" size="small">
            <el-row>
              <el-form-item label="工种">
                <el-col :span="8">
                  <el-input></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="企业">
                <el-col :span="8">
                  <el-input></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="项目">
                <el-col :span="8">
                  <el-input></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="就职起止时间">
                <el-col :span="4">
                  <el-input></el-input>
                </el-col>
                <el-col :span="2" class="text-center">至</el-col>
                <el-col :span="4">
                  <el-input></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="工作地点">
                <el-col :span="8">
                  <el-input></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="月薪">
                <el-col :span="4">
                  <el-input></el-input>
                </el-col>
                <el-col :span="2" class="text-center">元/月 * </el-col>
                <el-col :span="4">
                  <el-input></el-input>
                </el-col>
                <el-col :span="2" class="text-center">个月</el-col>
              </el-form-item>
              <el-form-item label="职责业绩">
                <el-col :span="20">
                  <el-input type="textarea"></el-input>
                </el-col>
              </el-form-item>
            </el-row>
          </el-form>
        </div>
      </div>
      <div class="tab tab4" v-show="active == 4">
        <div class="title clearfix">
          <p class="fl">专业信息</p>
          <p class="fr">
            <a href="" class="edit"></a>
            <a href="" class="save">保存</a>
          </p>
        </div>
        <div class="content">
          <el-form label-width="140px" label-position="left" size="small">
            <el-row>
              <el-form-item label="工种">
                <el-col :span="8">
                  <el-input></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="工作年限">
                <el-col :span="8">
                  <el-input></el-input>
                </el-col>
                <el-col :span="3" class="text-center">
                  年及以上
                </el-col>
              </el-form-item>
              <el-form-item label="熟练程度">
                <el-col :span="8">
                  <el-input></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="是否有证书">
                <el-col :span="8">
                  <el-input></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="从业证书">
                <el-col :span="24">

                </el-col>
              </el-form-item>
            </el-row>
          </el-form>
        </div>
      </div>
      <div class="tab tab5" v-show="active == 5">
        <div class="title clearfix">
          <p class="fl">自我评价</p>
          <p class="fr">
            <a href="" class="edit"></a>
            <a href="" class="save">保存</a>
          </p>
        </div>
        <div class="content">
          <el-form label-width="140px" label-position="left" size="small">
            <el-row>
                <el-form-item label="评价内容">
                  <el-col :span="20">
                    <el-input type="textarea"></el-input>
                  </el-col>
                </el-form-item>

            </el-row>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        active: 5,
      }
    },
    methods: {
      tabClick(num) {
        this.active = num;
      }
    }
  }
</script>
