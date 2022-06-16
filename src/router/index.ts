import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "../App.vue";
import ListaView from "../views/ListaView.vue";
import FormularioView from "../views/FormularioView.vue";
import CardByID from "../views/CardByID.vue";
import DemoBannerView from "../views/DemoBanner.vue";
import ContactView from "../views/ContactView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: App,
  },
  {
    path: "/",
    name: "home",
    component: ContactView,
  },
  {
    path: "/lista",
    name: "lista",
    component: ListaView,
  },
  {
    path: "/formulario",
    name: "formulario",
    props: false,
    component: FormularioView,
  },
  {
    path: "/formulario/:id",
    name: "formulario-id",
    props: true,
    component: FormularioView,
  },
  {
    path: "/cardByID/:id",
    name: "cardbyid",
    component: CardByID,
  },
  {
    path: "/demobanner",
    name: "demobanne",
    component: DemoBannerView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
