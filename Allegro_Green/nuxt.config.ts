// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr:false,
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'GreenAllegro',
      meta: [
        {charset: "utf-8"},
        {name:'Viewport',content:'width=device-width, initial-scale=1'},
        {name:'description',content: 'GreenAllegro project'}
        ],
        link: [
          { rel: "icon", type:"image/x-icon", href:"/favicon.ico"}
        ],
        htmlAttrs:{
          lang: "pl",
        }
      }
    }
})