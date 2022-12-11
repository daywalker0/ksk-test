import Vue from "vue";
import VueRouter from "vue-router";
import Default from "@/layouts/Default.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/tablecards",
    name: "tablecards",
    component: () => import("@/views/TableCards.vue"),
    meta: {
      layout: Default,
      title: "Карточный вид таблицы",
    },
  },
  {
    path: "/tablevidgets",
    name: "tablevidgets",
    component: () => import("@/views/TableVidgets.vue"),
    meta: {
      layout: Default,
      title: "Таблица виджетов",
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
