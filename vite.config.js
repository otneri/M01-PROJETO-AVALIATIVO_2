import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/


export default defineConfig({

  // resolve:{
  //   alias:{
  //     "@components": resolve(__dirname, ".src/components/index.js"),
  //     "@pages": resolve(__dirname, ".src/pages/index.js"),
  //     "@routes": resolve(__dirname, ".src/routes/index.js"),
  //   }
  // },
  plugins: [react(), eslint()],
});

