<template>
    <div class="statistics_page">
    <h1 class="statistics_title">Statistics</h1>
    <h2> Statistics</h2>
    <h2> Statistics</h2>
        <v-simple-table class="statistics_table">
      <template v-slot:default>
        <thead class="ranking_heading">
          <tr>
            <td>.</td>
            <td>.</td>
            <td>.</td>
            <td>.</td>
            <td>.</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-simple-table class="statistics_table">
      <template v-slot:default>
        <thead class="ranking_heading">
          <tr>
            <td><p>Date</p></td>
            <td><p>Time</p></td>
            <td><p>Plastic Type</p></td>
            <td><p>Dimensions (cm)</p></td>
            <td><p>Weight (g)</p></td>
            <td><p>Bin #</p></td>
            <td><p>Bin Country</p></td>
            <td><p>Rewards</p></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
   
}; 

</script>

<style scoped lang="scss">
.statistics {
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