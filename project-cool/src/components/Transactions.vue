<template>
  <div>
    <v-subheader>Transactions</v-subheader>
    <h4>Balance</h4>
    <p>{{ getBalance('COOL') }} COOL</p>
    <p>{{ getBalance('SAVER') }} SAVER</p>
    <p>The transactions have to be sorted based on the timestamp</p>

    <v-simple-table width="50%">
      <template v-slot:default>
        <tbody v-for="tx in transactionData" :key="tx">
          <tr :class="getCssTransactionStatus(tx.sender, tx.recipient)">
            <td class="pa-2">
              <h4 :class="tx.tokenName">
                {{ tx.tokenName }}
                {{ getTransactionStatus(tx.sender, tx.recipient) }}
              </h4>
              <p class="ma-0">
                {{ convertTimestamp(tx.timestamp) }},
                {{ getToOrFromAddress(tx.sender, tx.recipient) }}
              </p>
            </td>
            <td class="pa-2">
              <h4>{{ tx.amount }} {{ tx.tokenName }}</h4>
              <p class="ma-0">
                {{ convertTokenToUSD(tx.tokenName, tx.amount) }} USD
              </p>
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
    getBalance(token) {
      let balance = 0;

      for (let i = 0; i < this.transactionData.length; i++) {
        let { tokenName, amount, recipient, sender } = this.transactionData[i];

        if (token == tokenName && this.userAddress == recipient) balance += amount;
        else if (token == tokenName && this.userAddress == sender) balance -= amount;
      }
      
      return balance.toFixed(1);
    },
    convertTimestamp(timestamp) {
      let date = new Date(timestamp);
      return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    },
    convertTokenToUSD(token, amount) {
      if (token === 'COOL') {
        const value = amount * 1;
        return value;
      } else if (token === 'SAVER') {
        // Calculate what the market value could be
        const value = amount * this.marketValueSaverUSD;
        return value.toFixed(2);
      } else {
        return 'Convert to USD Error';
      }
    },
    getTransactionStatus(sender, receiver) {
      //If the wallet from the user is equal to the address of the sender show that he send the transactions
      if (sender == this.userAddress) {
        return 'Send';
      } else if (receiver == this.userAddress) {
        return 'Received';
      }
    },
    getToOrFromAddress(sender, receiver) {
      // If the wallet is from the sender show the address who recieved the tokens. If the wallet is from the recipient show the address who send the tokens
      if (sender == this.userAddress) {
        return `to ${receiver}`;
      } else if (receiver == this.userAddress) {
        return `from ${sender}`;
      }
    },
    getCssTransactionStatus(sender, receiver) {
      if (sender === this.userAddress) {
        return 'send';
      } else if (receiver === this.userAddress) {
        return 'received';
      } else {
        return 'd-none';
      }
    },
  },
  data() {
    return {
      transactionData: transactionData.transactionData,
      userAddress: '3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL',
      marketValueSaverUSD: 1.2
    };
  },
};
</script>

<style scoped>
.v-data-table {
  max-width: 50%;
  margin: auto;
}
tr.send {
  background-color: rgba(0, 167, 155, 0.5);
}
tr.received {
  background-color: rgba(0, 120, 80, 0.5);
}
</style>
