<template>
    <div class="container-xxl py-5">
      <div class="row justify-content-center">
        <div class="col-6">
          <h2 class="text-center text-primary mb-4">Student Login Form</h2>
          <form method="post" class="border p-4 bg-light rounded">
            <div class="mb-3">
              <label htmlFor="email" class="form-label text-primary">Email</label>
              <input type="text" class="form-control" id="email" name="email"
                v-model="formData.email" placeholder="Enter student's Email"/>
            </div>
            
            <div class="mb-3">
              <label htmlFor="password" class="form-label text-primary">Password </label>
              <input type="password" class="form-control" id="password" name="password"
               v-model="formData.password" placeholder="Enter a password"/>
            </div>
            <button type="button" @click="login" class="btn btn-primary w-100"> Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import DataService from "../services/DataService";
    import router from '@/router';
  export default {
    name: "LoginForm",
    data() {
      return {
        formData: {
          email: "",
          password: "",
        },
      };
    },
    methods: {
      login() {
        var data = {
          email: this.formData.email,
          password: this.formData.password
        };
        DataService.login(data)
        .then(response => {
          console.log(response.data.data.token)
          if(response.data.data.token)
            sessionStorage.setItem('uid', response.data.data.token);
          else
            alert(response.data.error)
            
            router.push({ name: 'home' });
            window.location.href='/home';
        })
        .catch(e => {
          console.log(e);
        });
      }
    },
  };
</script>
  
 <style scoped>
  .container {
    max-width: 400px;
    margin: 0 auto;
  }
  .text-center {
    text-align: center;
  }
  </style>