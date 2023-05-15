import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      injectRegister: null,
      srcDir: 'src',
      filename: 'service-worker.js',
      base: '/',
      strategies: 'injectManifest',
      manifest: {
        name: 'portfolio'
      }
    }),
    compression({ threshold: 0, filter: /\.(js|mjs|json|css|html|download)$/i }),
    compression({
      threshold: 0,
      algorithm: 'brotliCompress',
      ext: '.br',
      filter: /\.(js|mjs|json|css|html|download)$/i
    })
  ]
})
