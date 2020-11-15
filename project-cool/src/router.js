import Vue from "vue";
import Router from "vue-router";
import LandingPage from "../src/components/LandingPage.vue";
import Transactions from "../src/components/Transactions.vue";
import Rankings from "../src/components/Rankings.vue";
import Statistics from "../src/components/Statistics.vue";
import UserProfile from "../src/components/UserProfile.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: LandingPage,
    },
    {
      path: "/rankings",
      name: "Rankings",
      component: Rankings,
    },
    {
      path: "/statistics",
      name: "Statistics",
      component: Statistics,
    },
    {
      path: "/myaccount/transactions",
      name: "transactions",
      component: Transactions,
    },
    {
      path: "/myaccount",
      name: "myaccount",
      component: UserProfile,
    },
  ],
  mode: "history",
});
