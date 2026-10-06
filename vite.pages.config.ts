import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
 root:'pages',
 base:'/abaco-laboratorio-gestion/',
 plugins:[react()],
 build:{outDir:'../docs',emptyOutDir:true,assetsInlineLimit:1000000},
});
