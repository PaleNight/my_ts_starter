/**
 * 只带有 get不带有 set的存取器自动被推断为 readonly
 * */
let passcode = "secret passcode";
class Employee {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode === "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error,Unauthorized update of employee!");
        }
    }
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}
