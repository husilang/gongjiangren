export default {
	data() {
		return {
			stepsArr: ["验证身份","基本信息", "专业信息", "主要业绩", "项目管理", "企业服务订购","问卷调查/捐献","注册完成"],
		}
	},
	methods: {
		goPath(path){
			this.$router.push(`${path}`);
		}
	}
}
