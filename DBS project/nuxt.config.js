// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
        modules: [
            'nuxt-quasar-ui',
            'nuxt-icon'
        ],
        // serverMiddleware: [
        //     { path: '/api', handler: '~/server/index.js' }
        // ],
        css: [
            'quasar/css'
        ],
        universal: true
        ,
        imports: {
            autoImport: true
        },
        framework: {
            // webfont-based example
            iconSet: 'mdi-v7'
        }
    }
)
