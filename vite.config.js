import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // o react, si usas React

export default defineConfig({
  plugins: [vue()],
  base: 'https://github.com/Adrian140604/proyectoJs' // <- aquí pones el nombre de tu repo
})