<template>
  <div>
    <h1>Geggi</h1>
    <input
    type="email"
    name="email"
    v-model="email"
    placeholder="email"/>
  </br>
    <input type="password"
    name="password"
    v-model="password"
    placeholder="password"/>
    <button @click="register">
      Get started
    </button>
  </div>
</template>

<script>
//this is the controller
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log("intersteing ,", value)
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
      })
      console.log(response.data)
    }
  },
  mounted () {
    setTimeout(() => {
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
