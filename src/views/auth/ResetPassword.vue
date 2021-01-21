<template>
  <div class="main">
    <b-container class="register">
      <h4 class="centered">Reset password</h4>
      <p class="mt-5"><strong>Confirm your new password !</strong></p>
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-3"
          label="New password"
          label-size="sm"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            type="password"
            placeholder="Enter new password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Password"
          label-size="sm"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            type="password"
            placeholder="Confirm new password"
            required
          ></b-form-input>
        </b-form-group>
        <br />
        <b-button type="submit" class="submit"
          ><strong>Create new Password</strong></b-button
        >
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
