<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <td><p>Position</p></td>
          <td><p>Address</p></td>
          <td><p>Recycled plastic (kg)</p></td>
          <td><p>Saved emission (kg)</p></td>
          <td><p>Visited bins</p></td>
        </tr>
      </thead>
      <tbody>
        {{
          createBalanceArray()
        }}
        <tr>
          <td>1234</td>
          <td>{{ userAddress }}</td>
          <td>0.2</td>
          <td>0.1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Owner</td>
          <td>22</td>
          <td>2</td>
          <td>4</td>
        </tr>
        <tr>
          <td>2</td>
          <td>User</td>
          <td>21</td>
          <td>2</td>
          <td>4</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import recyclingHistoryData from "../data/recyclingHistoryData.json";
import transactionData from "../data/transactionData.json";
// import plasticTypesData from "../data/plasticTypesData.json";

export default {
  name: "Rankings",
  data() {
    return {
      transactionData: transactionData.transactions,
      recyclingHistoryData: recyclingHistoryData.recyclingHistory,
      userAddress: "3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL",
      balances: [
        { address: "3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL", totalWeight: 0.1 },
        { address: "3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL", totalWeight: 0.1 },
      ],
    };
  },
  methods: {
    createBalanceArray() {
      for (let i = 0; i < 2; i++) {
        const { weight, txIds } = this.recyclingHistoryData[i];
        let address = this.transactionData[txIds[0]].recipient;

        let totalWeight = function getTotalWeight(address) {
          for (let i = 0; i < this.balances.length; i++) {
            if (this.balances[i].address == address)
              return (totalWeight = this.balances[i]);
          }
        };

        totalWeight += weight / 1000;

        let account = {
          address,
          totalWeight,
        };
        console.log(account);
      }
    },
    getRankingUser() {
      const { weigth, bin, plasticType } = this.recyclingHistoryData[
        this.recycling
      ];
      console.log(weigth, bin, plasticType);
      console.log(this.recyclingHistoryData[this.recycling]);
    },
  },
};
</script>

<style scoped>
.v-data-table {
  width: 60%;
  margin: auto;
}
</style>