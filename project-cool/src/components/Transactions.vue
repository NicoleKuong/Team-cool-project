<template>
  <div>
    <v-subheader>Transactions</v-subheader>
    <v-simple-table>
      <template v-slot:default>
        <tbody v-for="tx in transactionData" :key="tx">
          <tr>
            <td>
              <h4>SEND/RECEIVED {{ tx.tokenName }}</h4>
              <p>{{ tx.timestamp }}, {{ tx.sender }} or {{ tx.recipient }}</p>
            </td>
            <td>
              <h4>{{ tx.amount }} {{ tx.tokenName }}</h4>
              <p>{{ convertTokenToUSD(tx.tokenName, tx.amount) }} USD</p>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import transactionData from '../data/transactionData.json';

export default {
  name: 'Transactions',
  methods: {
    convertTokenToUSD(token, amount) {
      if (token === 'COOL') {
        const value = amount * 1;
        return value;
      } else if (token === 'SAVER') {
        // Calculate what the market value could be
        const value = amount * (Math.random() * 2 + 1);
        console.log(value);
        return value.toFixed(2);
      } else {
        return 'Convert Token To USD Error';
      }
    },
  },
  data() {
    return {
      transactionData: transactionData.transactions,
      userAddress: '3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL',
    };
  },
};
</script>

<style scoped>
.v-application p {
  margin: 0px;
}

tr {
  background-color: blueviolet;
}
</style>
