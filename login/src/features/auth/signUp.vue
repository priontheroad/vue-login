<script>
import { required } from "vuelidate/lib/validators";

export default {
  mounted() {
    this.$bus.$on("navigate", selected => {
      this.reset;
    });
  },
  validations: {
    username1: {
      required
    },
    password1: {
      required
    },
    password2: {
      required
    },
    email: {
      required
    }
  },
  data() {
    return {
      username1: "",
      password1: "",
      password2: "",
      email: ""
    };
  },
  methods: {
    submit() {
      if (!this.$v.$invalid) {
        this.$emit("do-sign-up", { ...this.$data });
      } else {
        this.$v.$touch();
      }
    },
    reset(selected) {
      if (selected === "signup") {
        this.username1 = "";
        this.password1 = "";
        this.password2 = "";
        this.email = "";
        this.$v.$reset();
      }
    }
  },
  computed: {
    isValid() {
      return (
        !this.$v.username1.$invalid &&
        this.$v.password1.$invalid &&
        this.password2.$invalid &&
        this.email.$invalid
      );
    }
  }
};
</script>

<template>
  <form action="#" @submit.prevent="submit" class="sign-up-htm">
    <div class="sign-up-htm">
      <div class="group">
        <label for="sign-up-user" class="label">Usuário</label>
        <input
          id="sign-up-user"
          type="text"
          class="input"
          v-model="username1"
          @input="$v.username1.$touch()"
          :class="{ invalid: $v.username1.$dirty && $v.username1.$invalid }"
        />
      </div>
      <div class="group">
        <label for="sign-up-pass2" class="label">Senha</label>
        <input
          id="sign-up-pass2"
          type="password"
          class="input"
          data-type="password"
          v-model="password1"
          @input="$v.password1.$touch()"
          :class="{ invalid: $v.password1.$dirty && $v.password2.$invalid }"
        />
      </div>
      <div class="group">
        <label for="sign-up-pass3" class="label">Repetir senha</label>
        <input
          id="sign-up-pass3"
          type="password"
          class="input"
          data-type="password"
          v-model="password2"
          @input="$v.password2.$touch()"
          :class="{ invalid: $v.password2.$dirty && $v.password2.$invalid }"
        />
      </div>
      <div class="group">
        <label for="email" class="label">Email</label>
        <input
          id="email"
          type="text"
          class="input"
          v-model="email"
          @input="$v.email.$touch()"
          :class="{ invalid: $v.email.$dirty && $v.email.$invalid }"
        />
      </div>
      <div class="group">
        <input type="submit" class="button" value="Cadastrar" />
      </div>
      <div class="hr"></div>
      <div class="foot-lnk">
        <label for="tab-1">Já está cadastrado?</label>
      </div>
    </div>
  </form>
</template>
