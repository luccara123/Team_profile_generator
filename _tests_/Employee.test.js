// Properties: name, id, email
//Methods: getName(), getId(), getEmail(), getRole();
// return Employee
const Employee = require("../lib/Employee");

test("Testing if it is possible to set the name with the constructor", () => {
    const testname = "Taylor";
    const t = new Employee(testname);
    expect(t.name).toBe(testname);
});

test("Testing if it is possible to set the id with the constructor", () => {
    const testId = "12";
    const t = new Employee("Carlos", testId);
    expect(t.id).toBe(testId);
});

test("Testing if it is possible to set the email with the constructor", () => {
    const testEmail = "testing@gmail.com";
    const t = new Employee(testEmail);
    expect(t.name).toBe(testEmail);
});

// Testing the methods
// getName()
test("Testing to get the name from getName() method", () => {
    const testname = "Ariana";
    const t = new Employee(testname);
    expect(t.getName()).toBe(testname);
});
//getId
test("Testing to get the id from getId() method", () => {
    const testId = "25";
    const t = new Employee("Michelle", testId);
    expect(t.getId()).toBe(testId);
});
//getEmail
test("Testing to get the email from getEmail() method", () => {
    const testEmail = "testing@gmail.com";
    const t = new Employee("Michelle", 25, testEmail);
    expect(t.getEmail()).toBe(testEmail);
});
//getRole
test("Testing to get the role from getRole() method", () => {
    const testRole = "Employee";
    const t = new Employee("Caio", 3, "caio@gmail.com");
    expect(t.getRole()).toBe(testRole);
});
