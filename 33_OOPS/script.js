// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   getAgeYear: function () {
//     return new Date().getFullYear() - user.age;
//   },
// };

// function createUser(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.getAgeYear = function () {
//       return new Date().getFullYear() - this.age;
//     };
// }

// createUser.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// const user1 = new createUser("Jane", "Smith", 25);
// const user2 = new createUser("Bob", "Johnson", 40);

const user = {
  firstName: "John",
  lastName: "Smith",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const names = value.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  },
};

// function createUser(firstName, lastName, age) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     getAgeYear: function () {
//       return new Date().getFullYear() - this.age;
//     },
//   };
// }
