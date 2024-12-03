<template>
    <div class="container mt-5">
      <h2>Expense Report</h2>
  
      <table class="table table-bordered mt-4">
        <thead>
          <tr>
            <th>#SL</th>
            <th>Head</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(d, index) in allData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{d.headname}}</td>
            <td>{{d.amount}}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </template>
  
<script>
  import DataService from "../services/DataService";
  export default {
    name: 'ExpenseReport',
    data() {
        return {
          allData: []
        };
      },methods: {
        ExpenseReport(){
          DataService.getExpenseReport()
            .then(response => {
                this.allData= response.data.data;
            })
            .catch(e => {
              console.log(e);
          });
        }
      }, mounted() {
        this.ExpenseReport();
      }
  };
</script>

<style scoped>
.container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-family: 'Arial', sans-serif;
  color: #333;
}

.table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #4CAF50;
  color: white;
}

.table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table tr:hover {
  background-color: #ddd;
}

.mt-4 {
  margin-top: 2rem;
}
</style>

