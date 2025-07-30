"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = "hello world";
console.log(message);
var myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("good morning  ".concat(this.employeName, " "));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        var _this = _super.call(this, managerName) || this;
        console.log(_this.employeName);
        return _this;
    }
    return Manager;
}(Employee));
var emp1 = new Employee("manu");
emp1.greet();
var man1 = new Manager("soman");
man1.greet();
