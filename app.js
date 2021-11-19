const app = Vue.createApp({
  data() {
    return {
      pic: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Mr. Coder",
      email: "coder@gmail.com",
      gender: "male",
      age: 20,
      phone: "9876543210",
      location:
        "8115 Rue Dubois, Bourg-Saint-Pierre Schaffhausen Switzerland, 8080",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      console.log(results);
      this.pic = results[0].picture.large;
      this.name =
        results[0].name.title +
        " " +
        results[0].name.first +
        " " +
        results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.age = results[0].dob.age;
      this.phone = results[0].phone;
      this.location =
        results[0].location.street.number +
        " " +
        results[0].location.street.name +
        ", " +
        results[0].location.city +
        " " +
        results[0].location.state +
        " " +
        results[0].location.country +
        ", " +
        results[0].location.postcode;
    },
  },
});

app.mount("#app");
