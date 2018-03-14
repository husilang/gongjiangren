const bodyParser = require('body-parser')
const session = require('express-session')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'gongjiangren',
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
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    {src: '~/plugins/element-ui', ssr: true},
    '~/plugins/fetch'
  ],
  /*
  ** Build configuration
  */
  build: {

    /*
    ** Run ESLint on save
    */
    vendor: ['axios', 'element-ui']
  },
  serverMiddleware: [
    bodyParser.json(),
    session({
      secret: 'gjr',
      resave: false,
      saveUninitialized: false,
      cookie: {maxAge: 60000}
    }),
    '~/api'
  ]
}
