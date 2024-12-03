<template>
    <div class="billing-container">
        <header class="header">
            <h1>Billing System</h1>
            <p>Inventory Management</p>
        </header>

        <section class="customer-details">
            <h2>Customer Information</h2>
            <label for="customer-name">Name:</label>
            <input type="text" id="customer-name" placeholder="Enter Customer Name">
            
            <label for="customer-contact">Contact:</label>
            <input type="text" id="customer-contact" placeholder="Enter Contact Number">

            <label for="customer-address">Address:</label>
            <textarea id="customer-address" placeholder="Enter Address"></textarea>
        </section>

        <input type="text" id="add-product" placeholder="add product">
        <button id="add-product">Add Product</button>
        <!-- Product List Section -->
        <section class="product-list">
            <h2 class="product-details">Products</h2>
            <table id="product-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Product 101</td>
                        <td>50</td>
                        <td>40</td>
                        <td>2000</td>
                        <td>Delete</td>
                    </tr>
                </thead>
            </table>

            
        </section>

        <!-- Billing Summary Section -->
        <section class="billing-summary">
            <h2>Billing Summary</h2>
            <p><strong>Subtotal:</strong> $<span id="subtotal">0.00</span></p>
            <p><strong>Tax (5%):</strong> $<span id="tax">0.00</span></p>
            <p><strong>Total Amount:</strong> $<span id="total">0.00</span></p>

            <button id="generate-bill" @click="generateBill">Generate Bill</button>
        </section>
        
    </div>
</template>

<script>
export default {
  name: 'Bill',
  props: {
    msg: String
  },
  methods: {
    generateBill() {
      this.$router.push('/invoice');
    }
  }
};
</script>

<style scoped>
/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    margin: 0;
    padding: 0;
}

.billing-container {
    width: 80%;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header h1 {
    text-align: center;
    color: #333;
}

.customer-details,
.product-list,
.billing-summary {
    margin-bottom: 20px;
}

h2 {
    color: #4CAF50;
}
.product-details{
    text-align: center  ;
}

label {
    font-weight: bold;
    margin-top: 10px;
    display: block;
}

input, textarea {
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

textarea {
    resize: vertical;
    height: 80px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table, th, td {
    border: 1px solid #ddd;
}

th, td {
    padding: 10px;
    text-align: center;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 10px;
}

button:hover {
    background-color: #45a049;
}

footer {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    color: #888;
}
</style>
