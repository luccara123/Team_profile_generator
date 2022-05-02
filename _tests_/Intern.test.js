// Properties: name, id, email, school
//Methods: getName(), getId(), getEmail(), getRole(), getSchool()
// return Employee

const Intern = require("../lib/Intern");

test("Testing if it is possible to set the school's name with the constructor", () => {
  const testSchool = "UOFT";
  const t = new Intern("John", 16, "testing@gmail.com", testSchool);
  expect(t.school).toBe(testSchool);
});

//Methods
test("Check if the getRole() method returns Intern", () => {
  const testRole = "Intern";
  const t = new Intern("John", 16, "testing@gmail.com", "UOFT");
  expect(t.getRole()).toBe(testRole);
});

test("Check if the method getSchool() works", () => {
  const testSchool = "UOFT";
  const t = new Intern("John", 16, "testing@gmail.com", testSchool);
  expect(t.getSchool()).toBe(testSchool);
});
