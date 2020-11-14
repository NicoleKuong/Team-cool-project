<template>
  <div class="my-4">
    <center>
      <v-container class="filtering">
        <h1>Rankings</h1>
        <v-row>
          <v-col>
            <a href="/ranking">
              <h2><u>Top 100</u></h2>
            </a>
          </v-col>
          <v-col>
            <a href="/countryranking">
              <h2>Country</h2>
            </a>
          </v-col>
          <v-col>
            <a href="/friendsranking">
              <h2>Friends</h2>
            </a>
          </v-col>
        </v-row>
      </v-container>
      <div class="inline"></div>
    </center>
    <v-simple-table class="ranking_table">
      <template v-slot:default>
        <thead class="ranking_heading">
          <tr>
            <td>Position</td>
            <td>Address</td>
            <td>Recycled plastic (kg)</td>
            <td>Saved emission (kg)</td>
            <td>Recycled items</td>
          </tr>
        </thead>
        <tbody v-for="user in users" :key="user">
          <tr>
            <td>{{ users.indexOf(user) + 1 }}</td>
            <td>{{ user.userId }}</td>
            <td>{{ getTotalWeight(user.userId) }}</td>
            <td>{{ getTotalEmissionSaved(user.userId) }}</td>
            <td>{{ getTotalVistedBins(user.userId) }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import recyclingHistoryData from "../data/recyclingHistoryData.json";
import transactionData from "../data/transactionData.json";

export default {
  name: "Rankings",
  data() {
    return {
      transactionData: transactionData.transactions,
      recyclingHistoryData: recyclingHistoryData.recyclingHistory,
      userAddress: "3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL",
      users: [
        {
          userId: "3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL",
        },
        {
          userId: "3PBSHtr4znZEEjCkgxd1CzGXT18m9eFdpYH",
        },
        {
          userId: "1PTzMGH3rJKnc8TEhw4jnQySXVMicavtC7",
        },
        {
          userId: "1PTzMGH3rJKnc8TEhw4jnQySXVMicavtC7",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
        {
          userId: "18De5ZXGrbaRpzSbdyn33MPLpXXHSbJWs2",
        },
      ],
    };
  },
  methods: {
    getTotalEmissionSaved(userId) {
      let totalEmissionSaved = 0;
      const findHistoryForUser = this.recyclingHistoryData.filter(
        (eachData) => eachData.receiver === userId
      );
      if (findHistoryForUser.length > 1) {
        totalEmissionSaved = findHistoryForUser.reduce((a, b) => {
          return a.emissionSaved + b.emissionSaved;
        });
      } else {
        totalEmissionSaved = findHistoryForUser[0].emissionSaved;
      }
      return totalEmissionSaved;
    },
    getTotalWeight(userId) {
      let totalWeight = 0;
      const findHistoryForUser = this.recyclingHistoryData.filter(
        (eachData) => eachData.receiver === userId
      );
      if (findHistoryForUser.length > 1) {
        totalWeight = findHistoryForUser.reduce((a, b) => {
          return a.weight + b.weight;
        });
      } else {
        totalWeight = findHistoryForUser[0].weight;
      }
      return totalWeight;
    },
    getTotalVistedBins(userId) {
      let totalBins = 0;
      const findHistoryForUser = this.recyclingHistoryData.filter(
        (eachData) => eachData.receiver === userId
      );
      if (findHistoryForUser.length > 1) {
        totalBins = findHistoryForUser.reduce((a, b) => {
          return a.bin + b.bin;
        });
      } else {
        totalBins = findHistoryForUser[0].bin;
      }
      return totalBins;
    },
  },
};
</script>

<style scoped lang="scss">
.ranking {
  &_table {
    width: 80%;
    margin: 30px auto;
    border: 1px solid black;
  }
  &_heading {
    font-weight: bold;
  }
}

.filtering {
  max-width: 400px;
}

a {
  color: white !important;
  text-decoration: none;
}
</style>
