<template>
    <div class="invoice-container">
        <header class="header">

            <h1>Invoice</h1>
            <p>Inventory Management </p>
        </header>

        <section class="customer-details">
            <h2>Customer Information</h2>
            <p><strong>Name:</strong> {{ customerName }}</p>
            <p><strong>Contact:</strong> {{ customerContact }}</p>
            <p><strong>Address:</strong> {{ customerAddress }}</p>
        </section>

        <section class="product-list">
            <h2>Products</h2>
            <table id="product-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in products" :key="index">
                        <td>{{ product.name }}</td>
                        <td>{{ product.qty }}</td>
                        <td>{{ product.Price }}</td>
                        <td>{{ product.total }}</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="billing-summary">
            <h2>Billing Summary</h2>
            <p><strong>Subtotal:</strong> ${{ subtotal }}</p>
            <p><strong>Tax (5%):</strong> ${{ tax }}</p>
            <p><strong>Total Amount:</strong> ${{ total }}</p>
        </section>

        <button id="print-button" @click="printInvoice" style="text-align: center; display: block; margin: 0 auto;">Print Invoice</button>

        
    </div>
</template>

<script>
export default {
  data() {
    return {
      customerName: "Tanvir Hossain",
      customerContact: "01845756470",
      customerAddress: "Chattagram",
      products: [
        { name: 'Product 101', qty: 50, Price: 40, total: 2000 }
      ],
      subtotal: 2000,
      tax: 100,
      total: 2100
    };
  },
  methods: {
    printInvoice() {
      window.print();
    }
  }
};
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    margin: 0;
    padding: 0;
}

.invoice-container {
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
    margin-top: 20px;
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
