export default defineNuxtConfig({

  modules: [
    // ...
    '@pinia/nuxt'
  ],
  

  css: ['~/assets/css/main.css',
        'vue-toast-notification/dist/theme-sugar.css',
        '~/assets/css/fonts.css'
       ],

  ssr:true,
  plugins: [
  ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  

    runtimeConfig: {
      public: {
        dev_base: process.env.API_BASE,
        prod_base: process.env.API_BASE_PRODUCTION,
        private_key:process.env.PRIVATE_KEY
      }
    }
  })