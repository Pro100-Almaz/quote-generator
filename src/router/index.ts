import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthorQuotes from "../views/AuthorQuotes.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/author",
      name: "author",
      component: AuthorQuotes,
    },
  ],
});

export default router;
