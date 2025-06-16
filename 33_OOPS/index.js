// class User {
//   constructor(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//   }

//   getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// class Student extends User {

//   constructor (first, last, age, standard) {
//     super()
//     this.standard = standard;
//   }

//   getStandard() {
//     return `The standard is ${this.standard}`;
//   }
// }

// const student1 = new Student("Jane", "Smith", 25, "10");

// const user = {
//   firstName: "Tushar",
//   lastName: "Parashar",
//   tags: ["a", "b", "c"],
//   getSomething() {
//     this.tags.forEach(function(tag) {
//       console.log(tag, this);
//     }, this);
//   },
// };

// const users = () => {

//     console.log(this)
// }
// users();

class User {
    constructor() {
        this.firstName = "tushar"
        console.log(this)
    }
    getThis() {
        console.log(this)
    }
}

new User;

// const student2 = new Student("Bob", "Johnson", 40);
