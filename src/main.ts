import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia'
// import "./assets/main.css";
/* 自动导入插件生效 */
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import svgIcon from "@/components/svgIcon/index.vue";
import "virtual:svg-icons-register";


const pinia = createPinia()


createApp(App).use(pinia).mount("#app");
