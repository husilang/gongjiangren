<style scoped lang="less">
	@import "../personnel.less";
	.client-index {
		.nav {
			height: 62px;
			li {
				display: inline-block;
				margin-right: 48px;
				cursor: pointer;
				font-size: 16px;
				color: #1e3242;
				line-height: 62px;
			}
			span {
				display: inline-block;
				text-align: center;
				border-radius: 4px;;
				font-size: 15px;
				cursor: pointer;
				line-height: 32px;
				margin-top: 16px;
			}
	        span.btn-type1 {
		        width: 104px;
		        height: 32px;
		        background: #ffde41;
		        color: #8e1e06;
		        margin-right: 16px;
	        }
	        span.btn-type2 {
		        width: 138px;
		        height: 34px;
		        border:1px solid #5cb9ff;
		        margin-right: 0;
		        color: #0694ff;
	        }
		}
		.banner {
			height: 512px;
			background: url("~/assets/client_bg.jpg") no-repeat center center;
			.box {
				width: 404px;
				height: 400px;
				background: rgba(0,0,0,.4);
				margin-top: 57px;
				border: 1px solid #31cee0;
				border-radius: 8px;
				box-shadow: 0px 0px 4px #96dee6;
				padding: 32px 38px 0 37px;
				color: #fff;

				.title {
					font-size: 24px;
					text-align: center;
					margin-bottom: 30px;
				}
        a{
          color: #fff;
          &:hover{
            text-decoration: underline;
          }
        }
			}
		}
	    .content{
		    padding-top: 10px;
		    padding-bottom: 10px;
		    background: #e7ebf3;
		    .wrap {
			    background: #fff;
			    padding:32px 44px 30px 52px;
			    border-radius: 6px;
			    margin-bottom: 10px;
		    }
	        .search {
	            .newjob{
					      background: #f2f3f6;
		            font-weight: bold;
		            color: #407c9f;
		            font-size: 16px;
		            height: 64px;
		            line-height: 64px;;
		            padding-left: 16px;
		            margin-top: 12px;
		            border-radius: 6px;
		            span {
			            display: inline-block;
			            width: 40px;
			            height: 42px;
			            text-align: center;
			            color: #ffffff;
			            font-weight:bolder;
			            font-size: 30px;
			            background: #71cbff;
			            border: 1px solid #5cbbf2;
			            line-height: 42px;;
			            vertical-align: sub;
			            margin-right: 2px;
			            box-shadow: 0 2px 4px #b2b2b2;
		            }
	            }
		        .find-condition{
					.el-row{
						padding-top: 10px;
						padding-bottom: 9px;
						border-bottom: 1px dashed #ccc;
						font-size: 14px;
						color: #424a50;
						line-height: 28px;

						b{
							display: inline-block;
							width: 78px;
							padding-left: 4px;
							font-weight:normal;
							margin-right: 16px;
						}
						span {
							margin-right: 8px;
							padding: 2px 8px;
							border: 1px solid #fff;
							border-radius: 4px;
							cursor: pointer;
							&:hover{
								 border: 1px solid rgba(64, 158, 255, .6);
								 color: #409EFF;
							 }
							&.checked{
								 background: #409EFF;
								 border-color : #409EFF;
								 color: #fff;
							 }
						}
					}
				}
	        }
	    }
	}
</style>
<template>
	<div class="client-index">
		<client-page-top></client-page-top>
		<div class="nav">
			<div class="commonWidth clearfix">
				<div class="fl">
					<ul>
						<nuxt-link tag="li" to="/client/center">个人中心</nuxt-link>
						<nuxt-link tag="li" to="/client/center">个人简历</nuxt-link>
						<nuxt-link tag="li" to="/client/center">职位搜索</nuxt-link>
						<nuxt-link tag="li" to="/client/center">企业库</nuxt-link>
					</ul>
				</div>
				<div class="fr">
					<nuxt-link tag="span" to="/" class="btn-type1">网站首页</nuxt-link>
					<nuxt-link tag="span" to="/firm" class="btn-type2">我是企业用户&nbsp;<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></nuxt-link>
				</div>
			</div>
		</div>
		<div class="banner">
			<div class="commonWidth clearfix">
				<div class="box fr">
					<div class="title">在这里，拥有大国工匠</div>
					<el-form label-width="0" label-position="left" :model="form" :rules="rules" ref="form">
						<el-form-item prop="loginName">
							<el-input placeholder="请填写用户名" v-model="form.loginName">
								<i slot="prefix" class="fa fa-user" style="font-size: 16px;color: #818181;padding-left: 6px;"></i>
							</el-input>
						</el-form-item>
						<el-form-item prop="password">
							<el-input placeholder="密码(6-16位字母、数字、无空格)" v-model="form.password" type="password">
								<i slot="prefix" class="fa fa-lock" style="font-size: 16px;color: #818181;padding-left: 6px;"></i>
							</el-input>
						</el-form-item>
						<el-form-item>
							<el-input placeholder="验证码" v-model="form.captcha"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button v-if="isRegister" type="primary" style="display: block;width: 100%;" @click="register" :loading="registing">人才注册</el-button>
							<el-button v-else type="primary" style="display: block;width: 100%;" @click="login" :loading="logging">人才登录</el-button>
						</el-form-item>
						<div class="clearfix" style="font-size: 14px;">
							<a class="fl" href="javascript:;">
								<i class="fa fa-bookmark-o" aria-hidden="true" style="color: #71cbff;"></i>&nbsp;生成桌面图标
							</a>
							<p class="fr">
                <a href="javascript:;" v-if="isRegister" @click="isRegister=false">立即登录</a>
                <a href="javascript:;" v-else @click="isRegister=true">立即注册</a>
								/
								<nuxt-link tag="a" to="/client/forget">忘记密码？</nuxt-link>
							</p>
						</div>
					</el-form>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="commonWidth">
				<div class="wrap search">
					<el-row type="flex">
						<el-col :span="12">
							<el-input placeholder="请输入企业名称、职位关键字：如架子工">
								<el-button slot="append" icon="el-icon-search"></el-button>
							</el-input>
						</el-col>
						<el-col :span="6" style="margin-left: 30px;">
							<p style="font-size: 14px;color:#0d0d0d;">正在热搜：</p>
							<p style="font-size: 14px;color: #fa6a43;margin-top: 8px;"><i class="fa fa-fire" aria-hidden="true"></i>&ensp;电工&ensp;模板工&ensp;司机</p>
						</el-col>
					</el-row>
					<el-row class="newjob">
						本周新增职位：&emsp;<span>1</span><span>3</span><span>4</span><span>0</span>&ensp;个
					</el-row>
					<el-row style="margin-top: 14px;">
						<el-tag closable>搜索：精英人才/本科/产品经理</el-tag>
					</el-row>
					<div class="find-condition">
						<el-row class="clearfix">
							<b>工种：</b>
							<span v-for="item in jobTypeList">{{item.name}}</span>
							<el-button class="fr" plain type="primary" size="mini">更多...</el-button>
						</el-row>
						<el-row class="clearfix">
							<b>地点：</b>
							<span>北京</span>
							<span>上海</span>
							<span>武汉</span>
							<span>深圳</span>
							<span>广州</span>
							<el-button class="fr" plain type="primary" size="mini">更多...</el-button>
						</el-row>
						<el-row class="clearfix">
							<b>证书：</b>
							<span>职业技能等级证书</span>
							<span>岗位证书</span>
							<span>毕业证书</span>
							<el-button class="fr" plain type="primary" size="mini">更多...</el-button>
						</el-row>
						<el-row class="clearfix">
							<b>项目类型：</b>
							<span>公路</span>
							<span>铁路</span>
							<span>水利水运</span>
							<span>城市轨道交通</span>
							<span>城市道路桥梁</span>
							<span>城市供水</span>
							<el-button class="fr" plain type="primary" size="mini">更多...</el-button>
						</el-row>
						<el-row class="clearfix">
							<b>薪资：</b>
							目前薪资&ensp;
							<el-input size="mini" style="width: 128px"></el-input>
							&ensp;-&ensp;
							<el-input size="mini" style="width: 128px"></el-input>
							&ensp;元/月&emsp;
							期待薪资&ensp;
							<el-input size="mini" style="width: 128px"></el-input>
							&ensp;-&ensp;
							<el-input size="mini" style="width: 128px"></el-input>
							&ensp;元/月
						</el-row>
						<el-row class="clearfix">
							<b>其他：</b>
							<el-select size="mini"  style="width: 154px" placeholder="工作年限(不限)"></el-select>&ensp;
							<el-select size="mini"  style="width: 154px" placeholder="年龄(不限)"></el-select>&ensp;
							<el-select size="mini"  style="width: 154px" placeholder="性别(不限)"></el-select>&ensp;
							<el-select size="mini"  style="width: 154px" placeholder="更新时间(不限)"></el-select>&ensp;
							<el-select size="mini"  style="width: 154px" placeholder="求职状态(不限)"></el-select>
						</el-row>
					</div>
				</div>
				<div class="container"></div>
				<div class="container personnel-list">
					<el-row>
						<el-col :span="2" class="text-center">
							<p class="img"><img src="http://wx1.sinaimg.cn/orj360/9359621dly1fp8udaub8ej20j60j6q4i.jpg" alt=""></p>
						</el-col>
						<el-col :span="9" class="left-info">
							<p class="row1">
								行宁波&ensp;|&ensp;男&ensp;|&ensp;上海
								<span class="icon"></span>
							</p>
							<p class="row2">
								<span>管理</span>
								<span>6年工作经验</span>
								<span>技能熟练</span>
								<span>有证书</span>
							</p>
							<p class="row3">应聘时间：1天前</p>
						</el-col>
						<el-col :span="1"><span class="line"></span></el-col>
						<el-col :span="9" class="right-info">
							<p>2008 09/21 ~ 2012 09/12 云南铝业 质量管理/测试</p>
							<p>2008 09/21 ~ 2012 09/12 云南铝业 质量管理/测试</p>
							<p>2008 09/21 ~ 2012 09/12 云南铝业 质量管理/测试</p>
							<p>2008 09/21 ~ 2012 09/12 云南铝业 质量管理/测试</p>
						</el-col>
						<el-col :span="1"><span class="line"></span></el-col>
						<el-col :span="2" class="choose text-center">
							<p style="margin-bottom: 10px;margin-top: 24px;"><el-checkbox></el-checkbox></p>
							<p>选择</p>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
		<firm-page-footer></firm-page-footer>
	</div>
</template>
<script type="text/ecmascript-6">
	import clientPageTop from '~/components/clientPageTop'
	import firmPageFooter from '~/components/firmPageFooter'
	export default{
		components: {
			clientPageTop,
			firmPageFooter
		},
		data() {
			return {
        isRegister: false,
        logging: false,
        registing: false,
        rules: {
          loginName: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          captcha: [
            {required: true, message: '请输入验证码', trigger: 'blur'}
          ]
        },
        form: {
          captcha: '8888',
          loginName:''
        },

        jobTypeList:[]
			}
		},
    methods: {
      register() {
        this.registing = true;
        this.$refs.form.validate((valid) => {
          try {
            if (valid) {
              this.$fetch.post('/user/register', this.form).then(res => {
                if (res.code == 0) {
                  this.$store.dispatch('clientLogin', res.data).then(() => {
                    this.$router.push('/client/register/step1');
                  });
                } else {
                  this.registing = false;
                  this.$message.error(res.msg);
                }
              });
            }
          } catch (e) {
            this.$message.error(e.message);
          } finally {
            this.registing = false;
          }
        });
      },
      login() {
        this.logging = true;
        this.$refs.form.validate(valid => {
          if (valid) {
            this.$fetch.post('/user/login', this.form).then(res => {
              this.logging = false;
              if (res.code == 0) {
                this.$store.dispatch('clientLogin', res.data).then(() => {
                  this.$router.push('/client/center');
                });
              } else {
                this.$message.error(res.msg);
              }
            })
          } else {
            this.logging = false;
            return false;
          }
        })
      }
    }
	}
</script>
