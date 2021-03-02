<template>
  <div class="main">
    <b-container class="register">
      <b-row class="text-center">
        <b-col cols="1"
          ><router-link to="/"
            ><h4><b-icon icon="chevron-left"></b-icon></h4></router-link
        ></b-col>
        <b-col cols="10"><h4 class="f-bold">Register</h4></b-col>
      </b-row>
      <p class="mt-4">Let's create your account !</p>
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Name"
          label-size="sm"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            type="text"
            v-model="form.user_name"
            placeholder="Enter your name"
            required
          ></b-form-input>
        </b-form-group>
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
        <br />
        <b-button type="submit" class="submit">Register</b-button>
        <h6><span>Register with</span></h6>
        <b-button type="google" class="google" @click.prevent="googleReg()"
          ><b-icon icon="google"></b-icon> Google</b-button
        >
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      form: {
        user_name: "",
        user_email: "",
        user_password: ""
      }
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    onSubmit() {
      if (
        this.form.user_name === "" ||
        this.form.user_password === "" ||
        this.form.user_email === ""
      ) {
        return this.dangerToast("Please fill All Data");
      } else {
        this.registerUser(this.form)
          .then(result => {
            alert(result.data.msg);
            this.$router.push("/");
          })
          .catch(err => {
            alert(err.data.msg);
          });
      }
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
.register {
  width: 500px;
  background-color: white;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0px 20px 20px rgba(52, 56, 70, 0.15);
}
h4 {
  color: #7e98df;
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
  padding: 0 10px;
}

@media only screen and (max-width: 450px) {
  .main {
    background-color: white;
    padding: 50px 0;
  }
  .register {
    padding: 30px;
    box-shadow: none;
  }
}
</style>
