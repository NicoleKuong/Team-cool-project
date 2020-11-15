<template>
  <v-container>
    <v-container>
      <center>
        <h1>Statistics</h1>
        <h2>You already recycled 22 kg plastic and 2kg of CO2</h2>
        <p>{{ userAddress }}</p>
      </center>
    </v-container>
    <v-container>
      <center>
        <h2>Badges</h2>
        <v-row>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="../assests/badge/lowCarbon.png"
            ></v-img>
            <h3>Lowering your carbon footprint</h3>
            <p>Save 500 kg of CO2</p>
          </v-col>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="../assests/badge/plasticRecycle.png"
            ></v-img>
            <h3>Recycle master</h3>
            <p>Recycle 1000 kg of plastic</p>
          </v-col>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="https://assets.onlinelabels.com/images/clip-art/10binary/square%20spiral-131341.png"
            ></v-img>
            <h3>Planet saver</h3>
            <p>50 times recycle</p>
          </v-col> </v-row
        ><v-row>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="https://assets.onlinelabels.com/images/clip-art/10binary/square%20spiral-131341.png"
            ></v-img>
            <h3>Traveler</h3>
            <p>Visit three different bins</p>
          </v-col>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="https://assets.onlinelabels.com/images/clip-art/10binary/square%20spiral-131341.png"
            ></v-img>
            <h3>Be kind</h3>
            <p>Make 10 friends</p>
          </v-col>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="https://assets.onlinelabels.com/images/clip-art/10binary/square%20spiral-131341.png"
            ></v-img>
            <h3>People's person</h3>
            <p>First time recycled</p>
          </v-col>
        </v-row>
      </center>
    </v-container>
    <v-container>
      <center>
        <h3>Recycle History</h3>
      </center>
    </v-container>
  </v-container>
</template>

<script>
import recyclingHistoryData from "../data/recyclingHistoryData.json";

export default {
  name: "Transactions",
  data() {
    return {
      badgeWidth: 200,
      badgeHeight: 200,
      recyclingHistoryData: recyclingHistoryData.recyclingHistory,
      userAddress: "3PBSHtr4znZEEjCkgxd1CzGXT18m9eFdpYH",
      marketValueSaverUSD: 1.45,
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>