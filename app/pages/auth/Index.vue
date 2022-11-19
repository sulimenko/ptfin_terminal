<template>
  <div class="auth">
    <div class="auth-form">
      <div class="logo">
        <img :src="logo" alt="">
      </div>
      <n-form>
        <n-items>
          <n-input title="Login" type="text"/>
          <n-input title="Password" type="password"/>
          <n-button wide @click="login">Login</n-button>
        </n-items>
      </n-form>
    </div>
  </div>
</template>

<script>
import logo from 'assets/ptfin-logo.png'

export default {
  name: 'Index',
  data() {
    return {
      logo,
    }
  },
  methods: {
    login() {
      this.$router.push({ name: 'index', })
    },
  },
}
</script>

<style scoped lang="scss">
.auth {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;


  .auth-form {
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.20);
    width: 500px;
    padding: 20px 40px;

    .logo {
      margin: 0 auto 40px;
      text-align: center;
    }
  }
}
</style>
