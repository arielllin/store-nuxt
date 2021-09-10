// import { resolve } from 'path'
const path = require('path')

export default {
  head: {
    title: 'foodie-nuxt',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: [],

  plugins: [{ src: '~/plugins/axios' }, { src: '~/plugins/svg-icon' }],

  components: true,

  buildModules: [
    [
      '@nuxtjs/dotenv',
      { filename: process.env.BASE ? `.env.${process.env.BASE}` : '.env' }
    ],
    ['@nuxtjs/router', {}],
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  modules: [['nuxt-i18n', {}], '@nuxtjs/axios'],

  axios: {
    proxy: true
  },

  proxy: {
    '/zomato-api/': {
      target: 'https://developers.zomato.com',
      pathRewrite: { '^/zomato-api': '' }
    }
  },

  env: {
    BASE_URL: process.env.BASE_URL,
    USER_KEY: process.env.USER_KEY
  },

  build: {
    extend(config, ctx) {
      // 排除 nuxt 原配置的影响,Nuxt 默认有vue-loader,会处理svg,img等
      // 找到匹配.svg的规则,然后将存放svg文件的目录排除
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.resolve(__dirname, 'assets/icons/svg')]
      // 添加loader规则
      config.module.rules.push({
        test: /\.svg$/, // 匹配.svg
        include: [path.resolve(__dirname, 'assets/icons/svg')], // 将存放svg的目录加入到loader处理目录
        loader: 'svg-sprite-loader',
        options: { symbolId: 'icon-[name]' }
        // use: [
        //   { loader: 'svg-sprite-loader', options: { symbolId: 'icon-[name]' } }
        // ]
      })
    },
    babel: {
      babelrc: false,
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    },
    postcss: {
      plugins: {
        // 通过传递 false 来禁用插件
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
      preset: {
        // 更改postcss-preset-env 设置
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
