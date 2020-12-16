<script>
import SignIn from "./signIn";
import SignOut from "./signUp";

export default {
  components: {
    SignIn,
    SignOut
  },
  data() {
    return {
      navigation: "signin"
    };
  },
  methods: {
    navigate() {
      //  window.console.log(this.navigation);
      this.$bus.$emit("navigate", this.navigation);
    },

    doSignIn(obj) {
      obj.username = "usuario";
      window.console.log(obj);
    }
  }
};
</script>

<template>
  <div>
    <div class="login-wrap">
      <div class="login-html">
        <input
          id="tab-1"
          type="radio"
          value="signin"
          name="tab"
          class="sign-in"
          checked
          v-model="navigation"
          @change="navigate"
        /><label for="tab-1" class="tab">Entrar</label>
        <input
          id="tab-2"
          type="radio"
          value="signup"
          name="tab"
          class="sign-up"
          v-model="navigation"
          @change="navigate"
        /><label for="tab-2" class="tab">Registrar</label>
        <div class="login-form">
          <sign-in @do-sign-in="doSignIn" />
          <sign-out />
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./styles.css"></style>
