// 1
function Account({ login, email }) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};
const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});
console.log(Account.prototype.getInfo);
mango.getInfo();
poly.getInfo();
// 2
class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
    );
  }
}
const mango2 = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});
const poly2 = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});
mango2.getInfo();
poly2.getInfo();
