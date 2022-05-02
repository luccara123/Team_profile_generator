// Properties: name, id, email, officeNumber
//Methods: getName(), getId(), getEmail(), getRole();
// return Manager
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Testing if it is possible to set the office number with the constructor", () => {
    const testOfficeNo = 2;
    const t = new Manager("Carol", 4, "testing@gmail.com", testOfficeNo);
    expect(t.officeNo).toBe(testOfficeNo);
  });

  //Methods
  test("Testing if the method getOfficeNumber works ", () => {
    const testOfficeNo = 7;
    const t = new Manager("Carol", 4, "testing@gmail.com", testOfficeNo);
    expect(t.getOfficeNumber()).toBe(testOfficeNo);
  });

  
  test('Testing if the method getRole() returns Manager', () => {
    const testRole = "Manager";
    const t = new Manager("Carol", 4, "testing@gmail.com", 2);
    expect(t.getRole()).toBe(testRole);
  });
  