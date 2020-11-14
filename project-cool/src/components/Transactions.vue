<template>
  <div>
    <v-subheader>Transactions</v-subheader>
    <v-simple-table>
      <template v-slot:default>
        <tbody v-for="tx in transactions" :key="tx">
          <tr>
            <td>
              <h4>SEND/RECEIVED {{ tx.tokenName }}</h4>
              <p>{{ tx.timestamp }}, {{ (tx.sender, tx.receiver) }}</p>
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
      transactions: [
        {
          tokenName: 'COOL',
          id: 123,
          sender: '3PBSHtr4znZEEjCkgxd1CzGXT18m9eFdpYH',
          timestamp: 1605301900204,
          amount: 3,
          receiver: '3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL',
        },
        {
          tokenName: 'SAVER',
          id: 1234,
          sender: '3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL',
          timestamp: 1605301900204,
          receiver: '3P4iZZBQPMRwNQdcc4NcZiUBPyTJeJnZast',
          amount: 124,
        },
        {
          tokenName: 'SAVER',
          id: 1234,
          sender: '123123',
          timestamp: 1605301900204,
          receiver: '123123',
          amount: 124,
        },
        {
          tokenName: 'SAVER',
          id: 1234,
          sender: '3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL',
          timestamp: 1605301900204,
          receiver: '3P4iZZBQPMRwNQdcc4NcZiUBPyTJeJnZast',
          amount: 124,
        },
        {
          tokenName: 'SAVER',
          id: 1234,
          sender: '123123',
          timestamp: 1605301900204,
          receiver: '123123',
          amount: 124,
        },
        {
          tokenName: 'SAVER',
          id: 1234,
          sender: '3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL',
          timestamp: 1605301900204,
          receiver: '3P4iZZBQPMRwNQdcc4NcZiUBPyTJeJnZast',
          amount: 124,
        },
        {
          tokenName: 'SAVER',
          id: 1234,
          sender: '123123',
          timestamp: 1605301900204,
          receiver: '123123',
          amount: 124,
        },
        {
          tokenName: 'SAVER',
          id: 1234,
          sender: '3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL',
          timestamp: 1605301900204,
          receiver: '3P4iZZBQPMRwNQdcc4NcZiUBPyTJeJnZast',
          amount: 124,
        },
        {
          tokenName: 'SAVER',
          id: 1234,
          sender: '123123',
          timestamp: 1605301900204,
          receiver: '123123',
          amount: 124,
        },
        {
          tokenName: 'SAVER',
          id: 1234,
          sender: '3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL',
          timestamp: 1605301900204,
          receiver: '3P4iZZBQPMRwNQdcc4NcZiUBPyTJeJnZast',
          amount: 124,
        },
        {
          tokenName: 'SAVER',
          id: 1234,
          sender: '123123',
          timestamp: 1605301900204,
          receiver: '123123',
          amount: 124,
        },
      ],
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
