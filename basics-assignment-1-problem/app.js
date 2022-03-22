const app = Vue.createApp({
  data() {
    return {
      myName: "Jimmy",
      myAge: 30,
      imageURL:
        "https://pbs.twimg.com/profile_images/1882088319/48934_100000516654285_2109760449_n_400x400.jpg",
    };
  },
  methods: {
    generateRandomNumber() {
      return Math.random();
    },
    calculateAge() {
      return this.myAge + 5;
    },
  },
});

app.mount("#assignment");
