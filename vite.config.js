// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Taskmaster-Pro/', // 👈 use your GitHub repo name here (case-sensitive)
});
