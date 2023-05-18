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
      /**
       * @todo
       * provide your portfolio icons in 512px x 512px PNG file,
       * then create your web manifest at https://www.simicart.com/manifest-generator.html
       * copy generated manifest.webmanifest here, except scope, start_url, display, and icons.
       */
        theme_color: '#000',
        background_color: '#000',
        name: 'Achmad Kurniantos Portfolio',
        short_name: 'AK',
        description: 'Achmad Kurnianto Portfolio Website',
        display: 'standalone',
        scope: '/',
        start_url: '/?utm_source=pwa',
        icons: [
          {
            "src": "/assets/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/assets/icons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/assets/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/assets/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/assets/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
        ]
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
