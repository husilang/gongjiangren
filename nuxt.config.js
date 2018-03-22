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
  css: ['element-ui/lib/theme-chalk/index.css','font-awesome/css/font-awesome.css', './static/common.css'],
  loading: { color: '#3B8070' },
  plugins: [
    {src: '~/plugins/element-ui', ssr: true},
    '~/plugins/fetch'
  ],
  build: {
    vendor: ['axios', 'element-ui']
  }
}
