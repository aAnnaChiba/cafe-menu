import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: './' は GitHub Pages のサブパス（https://ユーザー名.github.io/リポジトリ名/）でも
// 正しくアセットを読み込めるようにするための相対パス指定です。
export default defineConfig({
  base: './',
  plugins: [react()],
})
