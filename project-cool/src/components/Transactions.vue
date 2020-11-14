<template>
  <div>
    <h3>Transactions</h3>
    <h4>Balance</h4>
    <div class="block-inline">
      <div class="left">{{ getBalance("COOL") }} COOL</div>
      <div class="right">{{ getBalance("SAVER") }} SAVER</div>
    </div>
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
              <h4>
                {{
                  getTransactionAmount(
                    tx.sender,
                    tx.recipient,
                    tx.amount,
                    tx.tokenName
                  )
                }}
              </h4>
              <p class="ma-0">
                {{
                  getTransactionAmountUSD(
                    tx.sender,
                    tx.recipient,
                    tx.amount,
                    tx.tokenName
                  )
                }}
              </p>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import transactionData from "../data/transactionData.json";

export default {
  name: "Transactions",
  data() {
    return {
      transactionData: transactionData.transactionData,
      userAddress: "3PBSHtr4znZEEjCkgxd1CzGXT18m9eFdpYH",
      marketValueSaverUSD: 1.45,
    };
  },
  methods: {
    getBalance(token) {
      let balance = 0;

      for (let i = 0; i < this.transactionData.length; i++) {
        let { tokenName, amount, recipient, sender } = this.transactionData[i];

        if (token == tokenName && this.userAddress == recipient)
          balance += amount;
        else if (token == tokenName && this.userAddress == sender)
          balance -= amount;
      }

      return balance.toFixed(1);
    },
    convertTimestamp(timestamp) {
      const date = new Date(timestamp);
      return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    },
    getTransactionAmount(sender, receiver, amount, token) {
      if (sender == this.userAddress) {
        return `- ${amount} ${token}`;
      } else if (receiver == this.userAddress) {
        return `+ ${amount} ${token}`;
      }
    },
    getTransactionAmountUSD(sender, receiver, amount, token) {
      if (token === "COOL" && sender == this.userAddress) {
        return `- ${amount} USD`;
      } else if (token === "COOL" && receiver == this.userAddress) {
        return `+ ${amount} USD`;
      } else if (token === "SAVER" && sender == this.userAddress) {
        return `- ${amount * this.marketValueSaverUSD} USD`;
      } else if (token === "SAVER" && receiver == this.userAddress) {
        return `+ ${amount * this.marketValueSaverUSD} USD`;
      }
    },
    getTransactionStatus(sender, receiver) {
      //If the wallet from the user is equal to the address of the sender show that he send the transactions
      if (sender == this.userAddress) {
        return "Send";
      } else if (receiver == this.userAddress) {
        return "Received";
      }
    },
    getToOrFromAddress(sender, receiver) {
      // If the wallet is from the sender show the address who recieved the tokens. If the wallet is from the recipient show the address who send the tokens
      if (sender == this.userAddress) {
        return `to address ${receiver}`;
      } else if (receiver == this.userAddress) {
        return `from address ${sender}`;
      }
    },
    getCssTransactionStatus(sender, receiver) {
      if (sender === this.userAddress) {
        return "send";
      } else if (receiver === this.userAddress) {
        return "received";
      } else {
        return "d-none";
      }
    },
  },
};
</script>

<style scoped>
.block-inline {
  display: inline-block;
  margin: auto;
}
.left {
  float: left;
  padding: 0 10px;
}
.right {
  float: right;
  padding: 0 10px;
}

.v-data-table {
  max-width: 80%;
  margin: auto;
}
tr.send {
  background-color: rgba(0, 167, 155, 0.5);
}
tr.received {
  background-color: rgba(0, 120, 80, 0.5);
}
</style>
