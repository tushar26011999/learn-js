class CreateUser {
  #age;
  constructor(first, last, age) {
    console.log("this in constructor", this);
    this.firstName = first;
    this.lastName = last;
    this.#age = age;
  }
  static hi = "hi";
  #hello = "Hello";
  static {
    console.log("this in static block", this);
  }
  getBirthYear() {
    console.log("this in method", this);
    return new Date().getFullYear() - this.#age;
  }
  #getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new CreateUser("Jane", "Smith", 25);
const user2 = new CreateUser("Bob", "Johnson", 40);

const normalUser = {
  name: "Alice",
  "#age": 26,
};
// CreateUser.prototype.getBirthYear = function () {
//   return new Date().getFullYear() - this.age;
// };
