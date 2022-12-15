class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const john = new Person("John", 27);
const jane = new Person("Jane", 29);

john.greet(); // Output: "Hello, my name is John and I am 27 years old."
jane.greet(); // Output: "Hello, my name is Jane and I am 29 years old."

// In this example, we have defined a Person class with a constructor function that is used to initialize the object's properties, and a greet() method that prints a greeting message to the console. We have then created two Person objects, john and jane, and called the greet() method on each of them.
