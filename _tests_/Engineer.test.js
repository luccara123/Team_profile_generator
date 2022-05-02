// Properties: name, id, email, github (username)
//Methods: getName(), getId(), getEmail(), getRole(), getGithub()
// return Engineer

const Engineer = require("../lib/Engineer");

test("Testing if it is possible to set the github username with the constructor", () => {
  const testGithub = "Test123";
  const t = new Engineer("Peter", 8, "testing@gmail.com", testGithub);
  expect(t.github).toBe(testGithub);
});

test("Check if the method getRole() returns Engineer", () => {
  const testRole = "Engineer";
  const t = new Engineer("Peter", 8, "testing@gmail.com", "Test123");
  expect(t.getRole()).toBe(testRole);
});

test("Check if the method getGithub() works", () => {
  const testGithub = "Test123";
  const t = new Engineer("Peter", 8, "testing@test.com", testGithub);
  expect(t.getGithub()).toBe(testGithub);
});
