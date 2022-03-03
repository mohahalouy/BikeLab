<template>
  <section class="formulario">
    <div class="container">
      <div class="user signinBx">
        <div class="imgBx">
          <img src="../assets/multistrada.jpg">
        </div>
        <div class="formBx">
          <form>
            <h2>Sign In</h2>
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">
            <input type="submit" value="Login">
            <p class="signup">don´t have an account? <a href="#" @click="toggleForm()">Sign up.</a></p>
          </form>
        </div>
      </div>
      <div class="user signupBx">
        <div class="imgBx">
          <img src="../assets/multistrada2.jpg">
        </div>
        <div class="formBx">
          <form>
            <h2>Create an account</h2>
            <input type="text" placeholder="Username">
            <input type="text" placeholder="Email Address">
            <input type="password" placeholder="Create Password">
            <input type="password" placeholder="Confirm Password">
            <input type="submit" value="Login">
            <p class="signin">Already have an account <a href="#" @click="toggleForm()">Sign in.</a></p>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!--  <form class="form-signin" @submit.prevent="loginUser">-->
  <!--    <input type="email" v-model="data.email" class="form-control" placeholder="Email address" required autofocus>-->

  <!--    <input type="password" v-model="data.password" class="form-control" placeholder="Password" required>-->

  <!--    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>-->
  <!--  </form>-->
</template>

<script>
import router from "@/router";
import $ from 'jquery'

export default {
  name: "Login",
  data: function () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async loginUser() {
      await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(this.data)
      });

      await router.push('/');
    },
    toggleForm() {
      $('section, .container').toggleClass('active')
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section.formulario {
  position: relative;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: black;
  transition: 0.5s;
}

section.formulario .container {
  position: relative;
  width: 800px;
  height: 500px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
}

section.formulario .container .user {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

section.formulario .container .user .imgBx {
  position: relative;
  width: 50%;
  height: 100%;
  transition: 0.5s;
}

section.formulario .container .user .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 75% 90%;
}

section.formulario .container .user .formBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: white;
  color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  transition: 0.5s;
}

section.formulario .container .user .formBx form {
  margin: 40px;
}

section.formulario .container .user .formBx h2 {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #262626;
}

section.formulario .container .user .formBx input {
  width: 100%;
  padding: 10px;
  background: #efefef;
  color: #262626;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 14px;
  margin: 8px 0;
  letter-spacing: 1px;
  font-weight: 300;
}

section.formulario .container .user .formBx input[type="submit"] {
  max-width: 100px;
  background: aquamarine;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
}

section.formulario .container .user.signupBx .formBx input[type="submit"] {
  background: #e73e49;
}

section.formulario .container .user .formBx .signup, section.formulario .container .user .formBx .signin  {
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;
}

section.formulario .container .user .formBx .signup a, section.formulario .container .user .formBx .signin a {
  font-weight: 600;
  text-decoration: none;
  color: #577eff;
}

section.formulario .container .signupBx {
  pointer-events: none;
}

section.formulario .container.active .signupBx {
  pointer-events: initial;
}

section.formulario .container .signupBx .formBx {
  top: 100%;
}

section.formulario .container.active .signupBx .formBx {
  top: 0;
}

section.formulario .container .signupBx .imgBx {
  top: -100%;
  transition: 0.5s;
}

section.formulario .container.active .signupBx .imgBx {
  top: 0;
}

section.formulario .container .signinBx .formBx {
  top: 0;
}

section.formulario .container.active .signinBx .formBx {
  top: 100%;
}

section.formulario .container .signinBx .imgBx {
  top: 0;
  transition: 0.5s;
}

section.formulario .container.active .signinBx .imgBx {
  top: -100%;
}

.swalRegistro{
  background: transparent !important;
  width: fit-content !important;
  height: fit-content !important;;
}

.swalRegistro .swal2-html-container{
  margin:0;
  display: flex !important;
  align-items: center;
}


@media (max-width: 991px) {
  section.formulario .container {
    max-width: 400px;
  }

  section.formulario .container .imgBx {
    display: none;
  }

  section.formulario .container .user .formBx {
    width: 100%;
  }

  section.formulario .container.active .signinBx .formBx {
    top: -100%;
  }
}
</style>