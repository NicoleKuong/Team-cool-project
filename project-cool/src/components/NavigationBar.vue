<template>
  <div class="nav-bar">
    <v-card text tile>
      <v-toolbar dark color="blue-grey darken-1" class="hidden-xs-and-down">
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            {{ appTitle }}
          </router-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items class="navbar_items">
          <v-btn
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
            text
          >
            {{ item.title }}
          </v-btn>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on">
                About
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in subItems" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
        <v-spacer />
        <v-btn icon>
          <v-icon>fas fa-bell</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>fas fa-user-circle</v-icon>
        </v-btn>
        <span>Cool Member</span>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      appTitle: "Project Cool",
      menuItems: [
        { title: "Balance", path: "/balance" },
        { title: "Ranking", path: "/ranking" },
        { title: "World Map", path: "/worldmap" },
        { title: "Send Tokens", path: "/sendtokens" },
      ],
      subItems: [
        { title: "FAQ", path: "/faq" },
        { title: "Investors", path: "/investors" },
        { title: "Connect", path: "/connect" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.navbar {
  &_items {
    text-align: center;
  }
}
</style>
