<template>
  <div class="main">
    <div class="login">
      <h4 class="centered">Login</h4>
      <p class="mt-4"><strong>Hi, Welcome back!</strong></p>
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-2"
          label="Email"
          label-size="sm"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            type="email"
            v-model="form.user_email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Password"
          label-size="sm"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            type="password"
            v-model="form.user_password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>
        <div style="text-align: right;">
          <router-link to="/forgotpassword"
            ><p>Forgot password?</p></router-link
          >
        </div>
        <b-button type="submit" class="submit"><strong>Login</strong></b-button>
        <h6><span>Login with</span></h6>
        <b-button type="google" class="google"
          ><b-icon icon="google"></b-icon><strong> Google</strong></b-button
        >
        <p class="mt-3 centered">
          Didn't have account? <router-link to="/register">Sign Up</router-link>
        </p>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: {
        user_name: "",
        user_password: ""
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    onSubmit() {
      this.login(this.form)
        .then(result => {
          console.log(result);
          alert("success login");
          this.$router.push("/chatPage");
        })
        .catch(err => {
          alert(err.data.msg);
        });
    }
  }
};
</script>

<style scoped>
.main {
  display: none;
  padding: 90px 0px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #e5e5e5;
  background-size: cover;
}
.login {
  width: 500px;
  background-color: white;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0px 20px 20px rgba(52, 56, 70, 0.15);
}
h4 {
  color: #7e98df;
  font-weight: bold;
}
button {
  width: 100%;
  border-radius: 25px;
  padding: 10px;
}
.submit {
  background-color: #7e98df;
  border: none;
}
.google {
  background-color: white;
  color: #7e98df;
  border: 2px solid #7e98df;
}
h6 {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgb(156, 156, 156);
  line-height: 0.1em;
  margin: 30px 0;
  color: rgb(155, 155, 155);
}
h6 span {
  background: #fff;
  padding: 0 30px;
}

@media only screen and (max-width: 450px) {
  .main {
    background-color: white;
    padding: 50px 0;
  }
  .login {
    padding: 30px;
    box-shadow: none;
  }
}
</style>
