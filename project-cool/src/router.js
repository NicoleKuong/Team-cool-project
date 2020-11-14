import Vue from "vue";
import Router from "vue-router";
import LandingPage from "../src/components/LandingPage.vue";
import Transactions from "../src/components/Transactions.vue";
import Rankings from "../src/components/Rankings.vue";
import RankingsCountry from "../src/components/RankingsCountry.vue";
import RankingsFriends from "../src/components/RankingsFriends.vue";
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
      path: "/ranking",
      name: "Rankings",
      component: Rankings,
    },
    {
      path: "/countryranking",
      name: "RankingsCountry",
      component: RankingsCountry,
    },
    {
      path: "/friendsranking",
      name: "RankingsFriends",
      component: RankingsFriends,
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
