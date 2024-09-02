import { createApp } from "vue";
import Info from "./components/Info.vue";

const el = document.getElementById("dev-vue");
const app = createApp(Info);
app.mount(el);
