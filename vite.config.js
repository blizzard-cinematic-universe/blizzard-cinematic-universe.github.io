import { resolve } from 'path';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../build'
  },
  server: {
    port: 8080
  },
  plugins: [
    vitePluginFaviconsInject("./src/icon.svg")
  ]
}