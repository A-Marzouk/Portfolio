export default {
  target: 'static',

  head: {
    title: 'A. Marzouk | Full-stack web developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A simple static portfolio built by Nuxt.js.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700' }
    ]
  },

  components: true,

  css: [
    '~/assets/css/main.css'
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],

  content: {},

  generate: {
    fallback: '200.html'
  },

  build: {}
}
