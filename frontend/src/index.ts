import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./components/HomeView.vue";
import PrivacyView from "./components/PrivacyView.vue";

const routes = [
  { path: "/", component: HomeView, name: "Home" },
  { path: "/privacy", component: PrivacyView, name: "Privacy" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
