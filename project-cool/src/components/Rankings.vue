<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <td><p>Position</p></td>
          <td><p>Address</p></td>
          <td><p>Recycled plastic (kg)</p></td>
          <td><p>Saved emission (kg)</p></td>
          <td><p>Recycled items</p></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1234</td>
          <td>{{ userAddress }}</td>
          <td>0.2</td>
          <td>0.1</td>
          <td>1</td>
        </tr>
      </tbody>
      <tbody v-for="position in balances" :key="position">
        <tr>
          <td>{{ balances.indexOf(position) + 1 }}</td>
          <td>{{ position.address }}</td>
          <td>{{ position.totalWeight }}</td>
          <td>{{ position.totalEmissionSaved }}</td>
          <td>{{ position.visitedBins }}</td>
        </tr>
      </tbody>
    </template>
    {{ createBalanceArray()[0] }}
  </v-simple-table>
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
      ranking: [
        {
          address: "User1",
          totalEmissionSaved: 3.6,
          totalWeight: 0.1,
          recycleCounter: 2,
        },
        {
          address: "User2",
          totalEmissionSaved: 1.8,
          totalWeight: 0.1,
          recycleCounter: 1,
        },
      ],
    };
  },
  computed: {
    getTotals() {
      console.log(this.createBalanceArray());
      return "bye";
    },
  },
  methods: {
    createBalanceArray() {
      const emissionSaved = this.recyclingHistoryData.reduce((a, b) => {
        return a.emissionSaved + b.emissionSaved;
      });

      const weight = this.recyclingHistoryData.reduce((a, b) => {
        return a.weight + b.weight;
      });

      console.log(weight);
      console.log(emissionSaved);
      return "Hello";
      // for (let i = 0; i < this.recyclingHistoryData.length; i++) {

      //     const { bin, weight, txIds, emissionSaved } = this.recyclingHistoryData[
      //       i
      //     ];

      //     let totalWeight = 0;
      //     let totalEmissionSaved = 0;
      //     let recycleCounter = [];

      //     let address = this.transactionData[txIds[0]].recipient;

      //     //TODO get the totalWeight and totalEmissionSaved

      //     totalWeight = weight / 1000; // devide weight by 1000 to get from grams to kilograms
      //     totalEmissionSaved += emissionSaved;
      //     recycleCounter.push(bin);

      //     rankings.push({
      //       address,
      //       totalWeight,
      //       totalEmissionSaved,
      //       recycleCounter: recycleCounter.length,
      //     });

      //     this.balances.push({
      //       address,
      //       totalWeight,
      //       totalEmissionSaved,
      //       recycleCounter: recycleCounter.length,
      //     });
      //   }
      //   console.log(this.balances);
      //   console.log(rankings);
      //   return rankings;
    },
  },
};
</script>

<style scoped>
.v-data-table {
  width: 80%;
  margin: auto;
}
</style>