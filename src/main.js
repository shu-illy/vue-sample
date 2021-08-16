import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

// The core Firebase JS SDK is always required and must be listed first
// TODO: Add SDKs for Firebase products that you want to use
//firebase.google.com/docs/web/setup#available-libraries -->
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwSMZ2106DJiMOJjGIlj-DYo8nPZlTFjM",
  authDomain: "my-address-pj-47341.firebaseapp.com",
  projectId: "my-address-pj-47341",
  storageBucket: "my-address-pj-47341.appspot.com",
  messagingSenderId: "147825287862",
  appId: "1:147825287862:web:7954a0b553f719b2edfc17",
  measurementId: "G-4QNNQWRJ3J",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
