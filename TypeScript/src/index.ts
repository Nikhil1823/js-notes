export {};
let message: string = "hello world";
console.log(message);

let myVariable: unknown = 10;
function hasName(obj: any): boolean {
  return !!obj && typeof obj === "object" && "name" in obj;
}

class Employee {
  protected employeName: string;
  constructor(name: string) {
    this.employeName = name;
  }
  greet() {
    console.log(`good morning  ${this.employeName} `);
  }
}

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
    console.log(this.employeName);
  }
}
const emp1 = new Employee("manu");
emp1.greet();

const man1 = new Manager("soman");
man1.greet();

enum direction {
  north = "up",
  south = "down",
  east = "right",
  west = "left",
}

console.log(direction.north);
