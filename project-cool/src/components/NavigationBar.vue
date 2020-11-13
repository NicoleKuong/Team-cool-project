<template>
  <div class="nav-bar">
    <v-toolbar app dark color="blue-grey darken-1" class="hidden-xs-and-down">
      <v-toolbar-title>Desktop Menu</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="item in nav"
          :key="item.icon"
          to="#"
          :title="item.title"
          flat
          >{{ item.text }}</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style scoped></style>>
