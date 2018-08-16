/*
const nodeExternals = require('webpack-node-externals')
*/

module.exports = {
  srcDir: './client',
  router: {
    // middleware: ['authenticated'],
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Online Catalog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Server side rendering with sequelize, express, nuxt.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ],
  },

  /**
   * Plugins
   */
  plugins: [
    '~plugins/vuetify.js',
    '~/plugins/components.js',
  ],

  /**
   * Modules
   */
  modules: [
    '@nuxtjs/browserconfig',
    '@nuxtjs/component-cache',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
  ],

  /**
   * Custom CSS
   */
  css: ['~assets/app.styl'],

  /*
 ** Customize the progress bar color
 */
  loading: {
    color: '#82b1ff',
    failedColor: '#ff8a80',
    height: '5px',
  },

  /*
  ** Build configuration
  */
  build: {

    /**
     * Babel configutation
     */
    babel: {
      plugins: [
        'transform-runtime',
        ['transform-imports', {
          vuetify: {
            transform: 'vuetify/es5/components/${member}',
            preventFullImport: false,
          },
        }],
      ],
    },

    /**
     * Vendor
     */
    vendor: ['vuetify', 'axios'],

    /**
     * Extract CSS
     */
    extractCSS: true,

    /*
    ** Run ESLint on save
    */
    /* extend(config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/],
          }),
        ]
      }
    }, */
  },

  /**
   * Axios module config
   */
  axios: {
    baseURL: 'localhost:3000',
    /**
     * Adds an interceptor to automatically set `withCredentials` config of axios
     * when requesting to baseUrl which allows passing authentication headers to backend.
     */
    credentials: false,
    /**
     * Adds interceptors to log all responses and requests
     */
    debug: false,
    /**
     * This option is a map from specific error codes to page which they should be redirect.
     *
     * For example if you want redirecting all `401` errors to `/login`
     */
    redirectError: {
      // 401: '/login'
    },
    /**
     * Function for manipulating axios requests.
     *
     * Useful for setting custom headers, for example based on the store state.
     * The second argument is the nuxt context.
     */
    requestInterceptor: (config, { store, req }) => config,
    /**
     * Function init(axios, ctx) to do additional things with axios.
     *
     * Example:
     *
     *    init (axios, ctx) {
     *      axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'
     *    }
     */
    init: (axios, ctx) => {
    },
    /**
     * If you want to disable the default error handler for some reason,
     * you can do it so by setting the option `disableDefaultErrorHandler` to `true`.
     */
    disableDefaultErrorHandler: true,
    /**
     * Function for custom global error handler.
     *
     * If you define a custom error handler,
     * the default error handler provided by this package will be overridden.
     */
    // errorHandler: (errorReason, { error }) => {
    //   error('Request Error: ' + errorReason)
    // }
  },
}

