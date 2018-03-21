export default {
	data() {
		return {
			stepsArr: ["验证身份", "企业信息", "企业实名认证", "密码提示问题", "项目管理", "企业服务订购","问卷调查/捐献","注册完成"],
		}
	},
	methods: {
		goPath(path){
			this.$router.push(`${path}`);
		}
	}
}