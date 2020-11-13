import Vue from "vue";
import Router from "vue-router";
import LandingPage from "../src/components/LandingPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: LandingPage,
    },
    // {
    //   path: "/rankings",
    //   name: "Rankings",
    //   component: Rankings,
    // },
    // {
    //   path: "/statistics",
    //   name: "Statistics",
    //   component: Statistics,
    // },
    // {
    //   path: "/sendtoken",
    //   name: "Send Token",
    //   component: SendToken,
    // },
  ],
  mode: "history",
});
