<template>
    <div class="container mt-5">
      <h2>Expense</h2>
      <form>
        
        <div class="mb-3">
          <label for="purpose" class="form-label">Purpose</label>
          <input type="text" class="form-control" id="purpose" v-model="purpose" placeholder="Enter purchase" required/>
        </div>

        <div class="mb-3">
          <label for="head" class="form-label">Head</label>
          <select class="form-control" id="head" v-model="head" placeholder="Enter head" required>
            <option v-for="d in accHead" :key="d.id" :value="d.id" >{{ d.headname }}</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="date" class="form-label">Date</label>
          <input type="date" class="form-control" id="date" v-model="date" placeholder="Enter date" required/>
        </div>
  
        <div class="mb-3">
          <label for="amount" class="form-label">Amount</label>
          <input type="number" class="form-control" id="amount" v-model="amount" placeholder="Enter amount" required/>
        </div>
  
        <button type="button" @click="addExpense" class="btn btn-primary">Submit</button>

      </form>
    </div>
  </template>
  
  <script>
  import DataService from "../services/DataService";
  import router from '@/router';
  
  export default {
    name: "Expense",
    data() {
      return {
        purpose: '',
        head: '',
        date: '',
        amount: '',
        accHead: []
      };
    },methods: {
      addExpense() {
        var data = {
          purpose: this.purpose,
          head_id: this.head,
          expense_date: this.date,
          amount: this.amount
        };

        DataService.saveExpense(data)
          .then(response => {
            console.log(response.data)
            
            router.push({ name: 'ExpenseList'})
          })
          .catch(e => {
            console.log(e);
        });
      },
      getAccountHead(){
        DataService.getAccountHead()
          .then(response => {
              this.accHead= response.data.data;
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
/* Container Styling */
.container {
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  margin: 50px auto;
  animation: fadeIn 1s ease-out;
}

/* Heading Styling */
h2 {
  font-family: 'Arial', sans-serif;
  color: #4CAF50;
  margin-bottom: 25px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}

/* Form Styling */
form {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.5s ease-out;
}

/* Label Styling */
.form-label {
  font-weight: 600;
  color: #333;
  font-size: 1rem;
}

/* Input & Select Styling */
.form-control {
  border-radius: 8px;
  padding: 12px;
  margin-top: 10px;
  border: 1px solid #ddd;
  font-size: 1rem;
}

.form-control:focus {
  border-color: #4CAF50;
  box-shadow: 0 0 8px rgba(76, 175, 80, 0.5);
}

/* Button Styling */
.btn-submit {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background-color: #4CAF50;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #45a049;
}

.btn-submit:active {
  transform: scale(0.98);
  background-color: #387c3d;
}

/* Animation Keyframes */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 20px;
  }

  .form-control {
    margin-top: 5px;
  }

  .form-label {
    font-size: 14px;
  }

  button {
    padding: 15px;
    font-size: 1.2rem;
  }
}
</style>