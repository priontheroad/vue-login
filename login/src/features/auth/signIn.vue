<script>
import { required } from "vuelidate/lib/validators";

export default {
  mounted() {
    this.$bus.$on("navigate", selected => {
      this.reset;
    });
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  data() {
    return {
      username: "",
      password: "",
      lembrar: true
    };
  },
  methods: {
    submit() {
      if (!this.$v.$invalid) {
        this.$emit("do-sign-in", { ...this.$data });
      } else {
        this.$v.$touch();
      }
    },
    reset(selected) {
      if (selected === "signin") {
        this.username = "";
        this.password = "";
        this.lembrar = true;
        this.$v.$reset();
      }
    }
  },
  computed: {
    isValid() {
      return !this.$v.username.$invalid && !this.$v.password.$invalid;
    }
  }
};
</script>

<template>
  <form action="#" @submit.prevent="submit" class="sign-in-htm">
    <div class="sign-in-htm">
      <div class="group">
        <label
          :class="{ invalid: $v.username.$dirty && $v.username.$invalid }"
          for="sign-in-user"
          class="label invalid"
          >Usuário</label
        >
        <input
          id="sign-in-user"
          type="text"
          class="input"
          v-model="username"
          @input="$v.username.$touch()"
          :class="{ invalid: $v.username.$dirty && $v.username.$invalid }"
        />
      </div>
      <div class="group">
        <label
          :class="{ invalid: $v.password.$dirty && $v.password.$invalid }"
          for="sign-in-pass1"
          class="label invalid"
          >Senha</label
        >
        <input
          id="sign-in-pass1"
          :class="{ invalid: $v.password.$dirty && $v.password.$invalid }"
          type="password"
          class="input"
          @input="$v.password.$touch()"
          data-type="password"
          v-model="password"
        />
      </div>
      <div class="group">
        <input id="check" type="checkbox" class="check" v-model="lembrar" />
        <label for="check"><span class="icon"></span> Lembrar-me </label>
      </div>
      <div class="group">
        <input type="submit" class="button" value="Entrar" />
      </div>
      <div class="hr"></div>
      <div class="foot-lnk">
        <a href="#forgot">Esqueceu a senha?</a>
      </div>
    </div>
  </form>
</template>
