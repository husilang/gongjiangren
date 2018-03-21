const bodyParser = require('body-parser')
const session = require('express-session')
module.exports = {
  head: {
    title: '恒航匠云',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['element-ui/lib/theme-chalk/index.css', './static/common.css'],
  loading: { color: '#3B8070' },
  plugins: [
    {src: '~/plugins/element-ui', ssr: true},
    '~/plugins/fetch'
  ],
  build: {
    vendor: ['axios', 'element-ui']
  },
  serverMiddleware: [
    bodyParser.json(),
    session({
      secret: 'gjr',
      resave: false,
      saveUninitialized: false,
      cookie: {maxAge: 2*24*60*60*1000}
    }),
    '~/api'
  ]
}
