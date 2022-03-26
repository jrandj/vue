const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Don't press on me");
    },
    captureInput(event) {
      this.userInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
});

app.mount("#assignment");
