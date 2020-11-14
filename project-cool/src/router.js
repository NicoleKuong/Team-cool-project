import Vue from "vue";
import Router from "vue-router";
import LandingPage from "../src/components/LandingPage.vue";
import Transactions from "../src/components/Transactions.vue";
import UserProfile from "../src/components/UserProfile.vue";
import Faq from "../src/components/Faq.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: LandingPage,
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq,
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
