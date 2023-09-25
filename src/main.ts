import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
// import "./assets/main.css";
/* 自动导入插件生效 */
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import svgIcon from "@/components/svgIcon/index.vue";
import 'virtual:svg-icons-register';
import routes from '@/router/index.ts';
import { createRouter, createWebHashHistory } from 'vue-router';

const pinia = createPinia();
const router = createRouter({ history: createWebHashHistory(), routes });

createApp(App).use(pinia).use(router).mount('#app');
