import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     open: true
//   }
// })
export default defineConfig({
  plugins: [react()],
  base: '/connect/', // Replace with your actual repository name
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/connect/",
});
