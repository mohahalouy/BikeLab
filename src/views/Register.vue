<template>
  <form class="form-signin" @submit.prevent="registerUser">
    <input v-model="data.name" class="form-control" placeholder="Name" required>

    <input v-model="data.email" type="email" class="form-control" placeholder="Email address" required autofocus>

    <input v-model="data.password" type="password" class="form-control" placeholder="Password" required>

    <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
  </form>
</template>

<script>
import router from "@/router";

export default {
  name: "Register",
  data: function () {
    return {
      data: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async registerUser() {
      let that = this;
      await fetch('https://proyectogradoback.herokuapp.com/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.data)
      }).then(await fetch('https://proyectogradoback.herokuapp.com/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({email: that.data.email, password: that.data.password})
      }));

      await router.push('/');
    }
  }
}
</script>

<style scoped>

</style>