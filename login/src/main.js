import Vue from "vue";
import App from "./App.vue";
import EventBus from "./features/plugins/event-bus";
import Vuelidate from "vuelidate";

Vue.use(EventBus);
Vue.use(Vuelidate);

new Vue({
  el: "#app",
  render: h => h(App)
});
