import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Curriculum vitae',
        short_name: 'CV',
        description: 'Personal CV built as a PWA',
        theme_color: '#ffffff',
      }
    })
  ],
  server: {
    host: "0.0.0.0"
  }
})
