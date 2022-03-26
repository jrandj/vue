const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add() {
      this.counter = this.counter + 1;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    subtract() {
      if (this.counter > 0) {
        this.counter = this.counter - 1;
      }
    },
  },
});

app.mount("#events");
