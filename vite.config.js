import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {			
    host: '0.0.0.0',	// 本机的局域网IP
    port: '80',  // 端口号，一般情况下为8080
    proxy:{

      '/api': {
        target: "https://www.zbtesting.com/Api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
       }
    }
  }
})
