import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  const proxyConfig = {
    target: 'https://quantumitco.com',
    changeOrigin: true,
    rewrite: (path) => {
      // Rewrite /api-proxy/portfolios -> /api/portfolios?api_key=...
      return path.replace(/^\/api-proxy/, '/api') + `?api_key=${env.VITE_QUANTUM_PORTFOLIO_API_KEY}`
    }
  }

  return {
    plugins: [vue()],
    css: {
      devSourcemap: false
    },
    server: {
      proxy: {
        '/api-proxy': proxyConfig
      }
    },
    preview: {
      proxy: {
        '/api-proxy': proxyConfig
      }
    }
  }
})
