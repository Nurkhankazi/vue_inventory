<template>
    <div class="container mt-5">
      <h2>Expense Head</h2>
      <form>
        
        <div class="mb-3">
          <label for="headname" class="form-label">Head Name</label>
          <input type="text" class="form-control" id="headname" v-model="headname" required/>
        </div>
        <button type="button" @click="saveAccountHead" class="btn btn-primary">Submit</button>

      </form>
      <div class="row">
        <div class="col-12">
          
      <table class="table table-bordered mt-4">
        <thead>
          <tr>
            <th>#SL</th>
            <th>Head</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in allData" :key="d.id">
            <td>{{d.id}}</td>
            <td>{{ d.headname }}</td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import DataService from "../services/DataService";
  //import router from '@/router';
  
  export default {
    name: "AccountHead",
    data() {
      return {
        allData:[],
        headname: ''
      };
    },methods: {
      saveAccountHead() {
        var data = {
          headname: this.headname
        };

        DataService.saveAccountHead(data)
          .then(response => {
            console.log(response)
            this.getAccountHead();
            this.headname='';
          })
          .catch(e => {
            console.log(e);
        });
      },
      getAccountHead(){
        DataService.getAccountHead()
          .then(response => {
            console.log(response.data)
              this.allData= response.data.data;
          })
          .catch(e => {
            console.log(e);
        });
      }
    }, mounted() {
    this.getAccountHead();
  }
   
  };
  </script>
  
  <style scoped>
  /* Container styling */
  .container {
    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Heading styling */
  h2 {
    font-family: 'Arial', sans-serif;
    color: #333;
    margin-bottom: 20px;
  }
  
  /* Form styling */
  form {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-label {
    font-weight: bold;
    color: #333;
  }
  
  .form-control {
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
  }
  
  button {
    margin-top: 20px;
    border-radius: 5px;
  }
  
  /* Table styling */
  .table {
    width: 100%;
    margin-top: 30px;
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
  
  /* Responsive design */
  @media (max-width: 768px) {
    .container {
      padding: 15px;
    }
  
    .form-control {
      margin-top: 5px;
    }
  
    .table th,
    .table td {
      padding: 8px;
    }
  }
  </style>
  