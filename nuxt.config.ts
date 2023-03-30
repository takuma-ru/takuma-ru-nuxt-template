// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'takuma-ru nuxt template',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon_rounded.png' },
        { rel: 'apple-touch-icon', href: '/apple_touch_icon.png', sizes: '180x180' },
        { rel: 'mask-icon', color: '#FCFCF9', href: '/mask_icon.svg' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap'
        },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,200..700,0..1,0&display=swap'
        },
        {
          rel: 'stylesheet',
          media: 'print',
          onload: 'this.media=\'all\'',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,200..700,0..1,0&display=swap'
        }
      ]
    }
  },

  components: {
    dirs: [
      'components/pwa',
      'components/layouts',
      'components/utils'
    ]
  },

  imports: {
    dirs: [
      'composables',
      'composables/**/*.{ts,js,mjs,mts}',
      'composables/**',
      'utils',
      'utils/**/*.{ts,js,mjs,mts}',
      'utils/**'
    ]
  },

  modules: [
    '@nuxtjs/color-mode',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore'
        ]
      }
    ],
    '@vite-pwa/nuxt',
    '@vueuse/nuxt'
  ],

  pwa: {
    client: {
      installPrompt: true
    },
    devOptions: {
      enabled: false
    },
    includeAssets: [ 'icon_rounded.png', 'apple_touch_icon.png', 'masked_icon.svg' ],
    injectRegister: 'auto',
    injectManifest: {
      globPatterns: [ '**/*.{js,json,css,html,txt,svg,png,ico,webp,woff,woff2,ttf,eot,otf,wasm}' ],
      globIgnores: [ 'manifest**.webmanifest' ]
    },
    manifest: {
      lang: 'en',
      name: 'title',
      short_name: 'title',
      description: '',
      start_url: '/',
      display: 'standalone',
      background_color: '#FCFCF9',
      theme_color: '#FCFCF9',
      icons: [
        {
          src: '/favicon.ico',
          sizes: '32x32',
          purpose: 'any'
        },
        {
          src: '/icons/icon-192.png',
          type: 'image/png',
          sizes: '192x192',
          purpose: 'any'
        },
        {
          src: '/icons/icon-512.png',
          type: 'image/png',
          sizes: '512x512',
          purpose: 'any'
        }
      ],
      screenshots: [
        /* {
          src: '/screenshots/dashboard-screenshot.png',
          sizes: '512x962',
          type: 'image/gif'
        } */
      ]
    },
    /* registerType: 'autoUpdate', */
    workbox: {
      cleanupOutdatedCaches: false,
      navigateFallback: '/',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 30
            },
            cacheableResponse: {
              statuses: [ 0, 200 ]
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 30
            },
            cacheableResponse: {
              statuses: [ 0, 200 ]
            }
          }
        }
      ]
    }
  }
})
