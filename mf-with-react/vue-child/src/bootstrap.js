import { createApp } from "vue";
import Info from "./components/Info.vue";

const fetchEl = document.getElementById("dev-vue");

const mount = (el) => {
  const app = createApp(Info);
  app.mount(el);
};

if (fetchEl) {
  mount(fetchEl);
}

export { mount };
