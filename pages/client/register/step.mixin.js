export default {
	data() {
		return {
			stepsArr: ["验证身份","基本信息","个人信息认证", "专业信息", "主要业绩", "自我评价", "问卷调查","注册完成"],
		}
	},
	methods: {
		goPath(path){
			this.$router.push(`${path}`);
		}
	}
}
