<template>
  <v-app>
    <v-main>
      <NavigationBar />
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar";

export default {
  name: "App",

  components: {
    NavigationBar,
  },

  data: () => ({
    //
  }),
};
</script>
