const {Nuxt, Builder} = require('nuxt');
const bodyParser = require('body-parser');
const session = require('cookie-session');
const app = require('express')();
const router = require('express').Router()
// 用来封装req.body
app.use(bodyParser.json());
//session 来创建req.session
app.use(session({
	secret: 'gjr',
	resave: false,
	saveUninitialized: false,
	cookie: {maxAge: 2*24*60*60*1000}
}));

// 发起post /api/login 请求完成企业用户登录，并添加该用户到req.session.firmUser
router.post('/api/login', (req, res) => {
	if (req.body.token) {
		req.session.firmUser = { authStatus:req.body.authStatus, id: req.body.id, loginName: req.body.loginName, token: req.body.token}
		return res.json({ authStatus:req.body.authStatus, id: req.body.id, loginName: req.body.loginName, token: req.body.token})
	}
	res.status(401).json({message: '401 Bad credentials'})
});
// 发起post /api/logout 请求注销当前企业用户，并从req.session中移除
router.post('/api/logout', (req, res) => {
	delete req.session.firmUser;
	res.json({ok: true})
});
app.use(router);
// 我们用这些选项初始化 nuxt.js;
const isProd = process.env.NODE_ENV === 'production'
let config = require('../nuxt.config')
config.dev = !isProd;
const nuxt = new Nuxt(config);


app.use(nuxt.render)

// 生产模式不需要build
if(!isProd) {
	const builder = new Builder(nuxt)
	builder.build()
		.catch((error) => {
			console.log(error)
			process.exit(1)
		})
}
app.listen(8081, function () {
	console.log('Server is listening on http://localhost:8081')
})

