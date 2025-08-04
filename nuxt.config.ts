// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // Set to false if you don't need server-side rendering
  
  // Prevent SSR issues with client-only components
  experimental: {
    payloadExtraction: false
  },

  nitro: {
    compatibilityDate: '2025-08-04'
  },

  modules: [
    '@nuxtjs/supabase',
    '@nuxt/ui'
  ],

  supabase: {
    redirect: false
  },

  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_KEY
    }
  },

  components: {
    global: true,
    dirs: ['~/components',
      '~/components/routes'
    ]
  },

  build: {
    transpile: ['leaflet']
  },

  vite: {
    optimizeDeps: {
      include: ['leaflet']
    },
    ssr: {
      noExternal: ['leaflet']
    },
    define: {
      global: 'globalThis'
    }
  },

  devtools: { enabled: true },

  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          '~/*': ['./*'],
          '@/*': ['./*'],
          '#imports': ['./.nuxt/imports.d.ts']
        }
      }
    }
  }
})
