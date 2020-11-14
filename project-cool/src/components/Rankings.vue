<template>
  <div>
    <h1 class="ranking_title">Ranking</h1>
    <v-simple-table class="ranking_table">
      <template v-slot:default>
        <thead class="ranking_heading">
          <tr>
            <td><p>Position</p></td>
            <td><p>Address</p></td>
            <td><p>Recycled plastic (kg)</p></td>
            <td><p>Saved emission (kg)</p></td>
            <td><p>Recycled items</p></td>
          </tr>
        </thead>
        <tbody v-for="user in users" :key="user.address">
          <tr>
            <td>{{ users.indexOf(user) + 1 }}</td>
            <td>{{ user.address }}</td>
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
          userId: "User1",
          address: "ABC",
          recycleCounter: 2,
        },
        {
          userId: "User2",
          address: "DEF",
          recycleCounter: 1,
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
  &_title {
    text-align: center;
  }
  &_table {
    width: 80%;
    margin: 30px auto;
    border: 1px solid black;
  }
  &_heading {
    font-weight: bold;
  }
}
</style>
