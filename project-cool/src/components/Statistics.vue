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
              src="../assests/badge/PlanetSaviour.png"
            ></v-img>
            <h3>Planet saver</h3>
            <p>50 times recycle</p>
          </v-col>
          </v-row>
          <v-row>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="../assests/badge/Traveller.png"
            ></v-img>
            <h3>Traveller</h3>
            <p>Visit three different bins</p>
          </v-col>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="../assests/badge/Friends.png"
            ></v-img>
            <h3>Be kind</h3>
            <p>Make 10 friends</p>
          </v-col>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="../assests/badge/first.png"
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
    <v-container>
      <center>
        <h2>Statistics</h2>
        <v-simple-table class="statistics_table">
      <template v-slot:default>
        <thead class="statistics_heading">
          <tr>
            <td><p>Date</p></td>
            <td><p>Time</p></td>
            <td><p>Plastic Type</p></td>
            <td><p>Dimensions (cm)</p></td>
            <td><p>Weight (g)</p></td>
            <td><p>Bin #</p></td>
            <td><p>Bin Country</p></td>
            <td><p>Got COOLs</p></td>
            <td><p>Got SAVERs</p></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p>2020-11-20</p></td>
            <td><p>12:39</p></td>
            <td><p>PP</p></td>
            <td><p>2 x 10 x 5</p></td>
            <td><p>800</p></td>
            <td><p>51</p></td>
            <td><p>Italy</p></td>
            <td><p>1.20</p></td>
            <td><p>1.26</p></td>
          </tr>
          <tr>
            <td><p>2020-11-27</p></td>
            <td><p>12:41</p></td>
            <td><p>PP</p></td>
            <td><p>14 x 10 x 20</p></td>
            <td><p>741</p></td>
            <td><p>12</p></td>
            <td><p>Italy</p></td>
            <td><p>1.51</p></td>
            <td><p>1.6</p></td>
          </tr>
          <tr>
            <td><p>2020-12-10</p></td>
            <td><p>17:39</p></td>
            <td><p>PP</p></td>
            <td><p>21 x 5 x 5</p></td>
            <td><p>360</p></td>
            <td><p>51</p></td>
            <td><p>Italy</p></td>
            <td><p>1.18</p></td>
            <td><p>1.22</p></td>
          </tr>
          <tr>
            <td><p>2020-12-28</p></td>
            <td><p>19:32</p></td>
            <td><p>CA</p></td>
            <td><p>12 x 10 x 5</p></td>
            <td><p>244</p></td>
            <td><p>14</p></td>
            <td><p>Italy</p></td>
            <td><p>3.38</p></td>
            <td><p>5.33</p></td>
          </tr>
          <tr>
            <td><p>2020-12-29</p></td>
            <td><p>11:34</p></td>
            <td><p>CA</p></td>
            <td><p>2 x 1 x 15</p></td>
            <td><p>128</p></td>
            <td><p>14</p></td>
            <td><p>Italy</p></td>
            <td><p>3.40</p></td>
            <td><p>5.38</p></td>
          </tr>
          <tr>
            <td><p>2020-12-30</p></td>
            <td><p>11:09</p></td>
            <td><p>ABS</p></td>
            <td><p>10 x 10 x 15</p></td>
            <td><p>512</p></td>
            <td><p>14</p></td>
            <td><p>Italy</p></td>
            <td><p>1.75</p></td>
            <td><p>2.05</p></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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