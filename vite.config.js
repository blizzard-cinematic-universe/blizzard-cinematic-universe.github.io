import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../build'
  },
  server: {
    port: 8080
  }
}