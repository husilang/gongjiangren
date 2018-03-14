<template>
  <div class="firm-index">
    <div class="banner">
      <div class="commonWidth banner-box">
        <div class="nav clearfix">
          <div class="logo fl">
            <p @click="goPath('/')"></p>
          </div>
          <div class="menu fr">
            <ul class="clearfix">
              <li class="cur">
                <span @click="goPath('firm/index')">企业首页</span>
              </li>
              <li>
                <span @click="goPath('firm/center')">企业中心</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="left-box">
          <h3>企业用户登录</h3>
          <p class="btn" @click="goPath('firm/login')">
            企业账号登录
          </p>
          <p class="btn">
            免费发布招聘
          </p>
          <p class="tel"><i></i>客户服务热线</p>
          <p class="telnum">400-400-0000</p>
        </div>
        <div class="right-box">
          <h3>产品与服务</h3>
          <h4>此处为标题介绍</h4>
          <div class="clearfix">
            <div class="btn-group fl">
              <button>Android版下载</button>
              <button>IOS版下载</button>
            </div>
            <div class="fr">
              <img src="../../assets/code.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-module">
      <div class="search-box clearfix">
        <input type="text" placeholder="用关键词搜索人才简历">
        <button><i></i></button>
      </div>
    </div>
    <div class="search-item-module commonWidth">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-col :span="6" class="center">
            <span>工种</span>
          </el-col>
          <el-col :span="16">
            <el-select v-model="searchForm.s1" size="small"></el-select>
          </el-col>
        </el-col>
        <el-col :span="6">
          <el-col :span="6" class="center">
            <span>工作年限</span>
          </el-col>
          <el-col :span="16">
            <el-select v-model="searchForm.s2" size="small"></el-select>
          </el-col>
        </el-col>
        <el-col :span="8">
          <el-col :span="3" class="center">
            <span>年龄</span>
          </el-col>
          <el-col :span="9">
            <el-input size="small"></el-input>
          </el-col>
          <el-col :span="2" class="center">
            <span>至</span>
          </el-col>
          <el-col :span="9">
            <el-input size="small"></el-input>
          </el-col>
        </el-col>
        <el-col :span="3" class="center">
          <span>发布时间</span>
        </el-col>
      </el-row>
    </div>
    <div class="result commonWidth">
      <div class="list" v-for="item in list">
        <div class="text1 fl">
          <p><strong>生产管理</strong><span>[天津市/津南]</span><span>3年/高中</span></p>
          <p class="income">4000-8000</p>
        </div>
        <div class="text2 fl">
          <p class="name">深圳腾讯科技有限公司</p>
          <p>
            <span>认证：</span>
            <el-tag size="small" type="danger">实名</el-tag>
            <el-tag size="small" type="danger">手机</el-tag>
            <el-tag size="small" type="danger">营业执照</el-tag>
          </p>
        </div>
        <div class="text3 fr">
          <p>加工/模具|股份制|51-100人</p>
          <p><span class="fr">今天</span></p>
        </div>
      </div>
      <div class="page-box">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100">
        </el-pagination>
      </div>
    </div>
    <div class="footer">
      <div class="commonWidth footer-box">
        <div class="footer-info clearfix">
          <div class="footlogo fl">
          </div>
          <div class="footnav">
            <ul class="clearfix">
              <li><router-link to="/firm">关于我们</router-link></li>
              <li><router-link to="/firm">联系我们</router-link></li>
              <li><router-link to="/firm">加入我们</router-link></li>
              <li><router-link to="/firm">友情链接</router-link></li>
            </ul>
            <p>联系邮箱：service@gjw.com</p>
          </div>

          <div class="footcode fr">
            <img src="../../assets/code.png" alt="">
            <p>工匠网公众号</p>
          </div>
          <div class="foottel fr">
            <p class="tel"><i></i>服务热线</p>
            <p class="telnum">400-225-1123</p>
          </div>
        </div>
        <div class="copyright">
          <p>未经工匠网同意，不得转载本网站之所有招聘信息及作品&emsp;|&emsp;&copy;2018工匠网版权所有<span>沪ICP备15010348号</span></p>
          <div>
            <div class="img"></div>
            <div class="img"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data: ()=>({
      searchForm: {},
      list: [{}, {}, {}]
    }),
    methods: {
      goPath(path){
        this.$router.push(`${path}`);
      }
    }
  }
</script>
<style scoped>
  .firm-index .banner {
    height: 612px;
    background: url("../../assets/firm_banner.jpg") no-repeat center/cover;
    padding-top: 35px;
  }
  .firm-index .banner-box {
    position: relative;
  }
  .firm-index .nav {
    padding-left: 2px;
  }
  .firm-index .nav .logo p{
    cursor: pointer;
    display: inline-block;
    width: 145px;
    background: url("../../assets/logo.png") no-repeat -44px 0;
    height: 48px;
  }
  .firm-index .menu li {
    font-size: 18px;
    padding: 16px 2px 0 37px;
    display: block;
    float: left;
    color: #fff;
    cursor: pointer;
    transition: all 0.28s ease-in-out;
  }
  .firm-index .menu li:hover, .menu li.cur {
    color: #f2bf16;
  }
  .firm-index .left-box {
    width: 314px;
    height: 320px;
    background: rgba(0,0,0,0.6);
    color: #fff;
    padding: 19px 27px 0 27px;
    text-align: center;
    position: absolute;
    left: 96px;
    top: 148px;
    border-radius: 6px;
  }
  .firm-index .left-box h3 {
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 28px;
  }
  .firm-index .left-box .btn {
    height: 45px;
    line-height: 45px;
    cursor: pointer;
    font-size: 16px;
    background: #ff7c1b;
    border-radius: 4px;
    margin-bottom: 16px;
    transition: all 0.22s ease-in-out;
  }
  .firm-index .left-box .btn:hover {
    background-color: #e3701b;
  }
  .firm-index .left-box .tel {
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 2px;

  }
  .firm-index .left-box .tel i{
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url("../../assets/icon/firm_index_icon.png") no-repeat 0 0;
    vertical-align: middle;
    margin-right: 6px;
  }
  .firm-index .left-box .telnum {
    font-size: 30px;
  }
  .firm-index .right-box {
    width: 388px;
    color: #fff;
    text-align: center;
    position: absolute;
    right: 220px;
    top: 170px;
  }
  .firm-index .right-box h3{
    font-size: 42px;
    font-weight:normal;
    line-height: 52px;
  }
  .firm-index .right-box h4 {
    font-size: 24px;
    color: #fdd51b;
    font-weight:normal;
    margin-bottom: 64px;
  }
  .firm-index .right-box .btn-group {
    width: 238px;
  }
  .firm-index .right-box button {
    height: 58px;
    font-size: 22px;
    width: 238px;
    background: #14c366;
    border:none;
    border-radius: 4px;
    color: #fff;
    margin-bottom: 10px;
  }
  .firm-index .right-box button:last-child {
    background: #5bb0ff;
  }
  .firm-index .search-module {
    height: 130px;
    background: #f2f2f3;
    padding-top: 30px;
  }
  .firm-index .search-box {
    width: 796px;
    height: 68px;
    background: #fff;
    margin: 0 auto;
    border: 1px solid #ececec;
    box-shadow: 1px 1px 3px #e2e2e2;
    padding: 10px 12px 10px 20px;
  }
  .firm-index .search-box input {
    height: 48px;
    float: left;
    width: 640px;
    border:none;
    outline: none;
    font-size: 18px;
  }
  .firm-index .search-box button {
    transition: all 0.22s ease-in-out;
    cursor: pointer;
    float: right;
    height: 48px;
    width: 116px;
    background-color: #ff7c1b;
    border: none;
  }
  .firm-index .search-box button i {
    display: inline-block;
    width: 27px;
    height: 27px;
    background-image: url("../../assets/icon/firm_index_icon.png");
    background-repeat: no-repeat ;
    background-position: -56px 0;
    vertical-align: middle;
  }
  .firm-index .search-box button:hover {
    background-color: #e3701b;
  }
  .firm-index .search-item-module {
    margin-top: 18px;
    background: url("../../assets/search_bg.png") no-repeat center;
    height: 75px;
    color: #fff;
    font-size: 14px;
    line-height: 75px;
  }
  .firm-index .search-item-module .center {
    text-align: center;
  }
  .firm-index .result{
    padding-bottom: 18px;
  }

  .firm-index .result .list {
    height: 132px;
    background: #f8f8f8;
    border: 1px solid #e6e6e6;
    margin-top: 20px;
    padding-left: 36px;
    padding-right: 40px;
    padding-top: 34px;
  }
  .firm-index .result .list p{
    margin-bottom: 20px;
  }
  .firm-index .result .list .text1 {
    width: 488px;
  }
  .firm-index .result .list .text1 strong{
    color: #0079ea;
    font-size:18px;
    font-weight:normal;
  }
  .firm-index .result .list .text1 span{
    font-size: 14px;
    color: #000000;
    margin-left: 22px;
  }
  .firm-index .result .list .text1 .income{
    color: #ff6c00;
    font-size:18px;
  }
  .firm-index .result .list .text2 .name {
    font-size: 18px;
    color: #000;
  }
  .firm-index .result .text3 {
    font-size: 14px;
    color: #949494;
  }
  .firm-index .result .page-box{
    text-align: center;
    margin-top: 26px;
  }
  .firm-index .footer {
    background: #21262c;
    height: 310px;
  }
  .firm-index .footer-info {
    height: 159px;
    border-bottom: 1px solid #46505d;
    padding: 50px 10px 0 10px;
  }
  .firm-index .footlogo {
    display: inline-block;
    width: 44px;
    height: 78px;
    background: url("../../assets/logo.png") no-repeat 0 0;
  }
  .firm-index .footnav {
    display: inline-block;
    font-size: 14px;
    color: #7c8797;
    margin-left: 42px;
    padding-right: 170px;
    margin-top: 14px;
  }
  .firm-index a{
    color: #7c8797;
  }
  .firm-index .footnav li {
    display: block;
    float: left;
    border-right: 1px solid #46505d;
    padding: 0 12px;
  }
  .firm-index .footnav li:last-child{
    border-right: none;
  }
  .firm-index .footnav p{
    margin-top: 20px;
    padding-left: 12px;
  }
  .firm-index .foottel {
    display: inline-block;
    color: #7c8797;
    font-size: 18px;
    padding-right: 136px;
    padding-left: 106px;
    border-left: 1px solid #46505d;
    border-right: 1px solid #46505d;
  }
  .firm-index .foottel .tel i{
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("../../assets/icon/firm_index_icon.png") no-repeat right top;
    vertical-align: middle;
    margin-right: 12px;
  }
  .firm-index .foottel .telnum{
    margin-top: 14px;
    font-size: 25px;
  }
  .firm-index .footcode {
    display: inline-block;
    color: #7c8797;
    font-size: 12px;
    text-align: center;
    padding-left: 78px;
  }
  .firm-index .footcode img{
    width: 58px;
  }
  .firm-index .copyright {
    text-align: center;
    color: #7c8797;
    font-size: 12px;
    padding-top: 28px;
  }
  .firm-index .copyright span {
    margin-left: 18px;
  }
  .firm-index .copyright .img {
    margin-top: 24px;
    display: inline-block;
    background-image: url("../../assets/footer.png");
    width: 114px;
    height: 38px;
  }
  .firm-index .copyright .img:last-child{
    background-position: -114px 0;
    margin-left: 40px;
  }
</style>
