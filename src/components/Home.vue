<template>
  
    <div :style="styles.container">
      <h1 :style="styles.title">Inventory Management</h1>
      <div :style="styles.row">
        <div :style="styles.card">
          <div :style="styles.cardBody">
            <h1><i class="menu-icon bi bi-capsule"></i></h1>
            <!-- Correcting the router-link usage -->
            <router-link :to="'/'" :style="styles.cardLink">
              <h5 :style="styles.cardTitle">Product</h5>
            </router-link>
          </div>
        </div>

        <div :style="styles.card">
          <div :style="styles.cardBody">
            <h1><i class="menu-icon bi bi-capsule"></i></h1>
            <router-link :to="'/'" :style="styles.cardLink">
              <h5 :style="styles.cardTitle">Category</h5>
            </router-link>
          </div>
        </div>

        <div :style="styles.card">
          <div :style="styles.cardBody">
            <h1><i class="menu-icon bi bi-person-workspace"></i></h1>
            <router-link :to="'bill'" :style="styles.cardLink">
              <h5 :style="styles.cardTitle">Billing System</h5>
            </router-link>
          </div>
        </div>

        <div :style="styles.card">
          <div :style="styles.cardBody">
            <h1><i class="menu-icon bi bi-person-workspace"></i></h1>
            <router-link :to="'/'" :style="styles.cardLink">
              <h5 :style="styles.cardTitle">Suppliers</h5>
            </router-link>
          </div>
        </div>

        <div :style="styles.card">
          <div :style="styles.cardBody">
            <h1><i class="menu-icon bi bi-person-plus-fill"></i></h1>
            <router-link :to="'/'" :style="styles.cardLink">
              <h5 :style="styles.cardTitle">Customer</h5>
            </router-link>
          </div>
        </div>

        <div :style="styles.card">
          <div :style="styles.cardBody">
            <h1><i class="menu-icon bi bi-capsule"></i></h1>
            <router-link :to="'/'" :style="styles.cardLink">
              <h5 :style="styles.cardTitle">Purchase</h5>
            </router-link>
          </div>
        </div>

        <div :style="styles.card">
          <div :style="styles.cardBody">
            <h1><i class="menu-icon bi bi-capsule"></i></h1>
            <router-link :to="'/'" :style="styles.cardLink">
              <h5 :style="styles.cardTitle">Sales</h5>
            </router-link>
          </div>
        </div>

        <div :style="styles.card">
          <div :style="styles.cardBody">
            <h1><i class="menu-icon bi bi-person-plus-fill"></i></h1>
            <router-link :to="'/'" :style="styles.cardLink">
              <h5 :style="styles.cardTitle">User</h5>
            </router-link>
          </div>
        </div>

        <div :style="styles.card">
          <div :style="styles.cardBody">
            <h1><i class="menu-icon bi bi-capsule"></i></h1>
            <router-link :to="'/'" :style="styles.cardLink">
              <h5 :style="styles.cardTitle">Stock</h5>
            </router-link>
          </div>
        </div>
      </div>
    </div>
 
</template>

<script>


export default {
  name: 'Dashboard',
  props: {
    msg: String
  },
  data() {
    return {
      styles: {
        container: {
          padding: '20px',
          backgroundColor: '#f8f9fa',
        },
        title: {
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2.5rem',
          color: '#343a40',
        },
        row: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '20px',
        },
        card: {
          margin: '10px',
          flex: '1 1 30%',
          transition: 'transform 0.3s, box-shadow 0.3s',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        },
        cardBody: {
          padding: '20px',
        },
        cardTitle: {
          marginTop: '10px',
          fontSize: '1.25rem',
          color: '#495057',
          textDecoration: 'none',
          
        },
        cardLink: {
          textDecoration: 'none',
          color: '#007bff',
        },
        cardLinkHover: {
          textDecoration: 'underline',
        },
      }
    };
  }
};
</script>
