export default {
	data() {
		return {
			stepsArr: ["账号信息", "企业信息", "企业实名认证", "密码提示问题", "项目管理", "企业服务订购"],
		}
	},
	methods: {
		goPath(path){
			this.$router.push(`${path}`);
		}
	}
}