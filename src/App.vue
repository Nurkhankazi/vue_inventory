<template>
   <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
          <Sidebar></Sidebar>
          <div className="layout-page">
            <Header></Header>
            <div className="content-wrapper">
    <router-view />
    <Footer></Footer>
            <div className="content-backdrop fade"></div>
            </div>
          </div>
      </div>
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
</template>

<script>
import Header from './components/Include/Header.vue'
import Footer from './components/Include/Footer.vue'
import Sidebar from './components/Include/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Header,Footer,Sidebar
  }
}
</script>

