<template>
  <div class="main">
    <b-container class="register">
      <b-row class="text-center">
        <b-col cols="1"
          ><router-link to="/loginpage"
            ><h4><b-icon icon="chevron-left"></b-icon></h4></router-link
        ></b-col>
        <b-col cols="10"><h4>Forgot Password</h4></b-col>
      </b-row>
      <p class="mt-5">
        <strong>You'll got message soon on your e-mail</strong>
      </p>
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
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <br />
        <b-button type="submit" class="submit"><strong>Send</strong></b-button>
      </b-form>
    </b-container>
  </div>
</template>

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
  padding: 50px 30px;
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
