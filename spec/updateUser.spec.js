describe("Update User Test", () => {
  it("should update a user from OrangeHRM", () => {
    browser.get("https://opensource.orangehrm.com/demo/");
    element(by.contains("Login")).click();
    fillInputs({
      username: "admin",
      password: "admin123",
    });
    element(by.contains("Login")).click();
    expect(element(by.contains("Dashboard")).isDisplayed()).toBeTruthy();

    clickLink("Admin");
    element(by.contains("Users")).click();

    // Find the user to update.
    element(by.css(".table-view tbody tr td:nth-child(2)")).element(by.contains("John Doe")).click();

    // Update the user details.
    fillInputs({
      firstname: "Jane",
      lastname: "Doe",
      email: "janedoe@example.com",
      password: "janedoe123",
    });
    element(by.contains("Save")).click();

    // Verify that the user details are updated.
    expect(element(by.contains("Jane Doe")).isPresent()).toBeTruthy();
    expect(element(by.contains("janedoe@example.com")).isPresent()).toBeTruthy();
  });
});

function fillInputs(inputs) {
  Object.keys(inputs).forEach(key => {
    const input = element(by.css(`input[name="${key}"]`));
    input.clear();
    input.sendKeys(inputs[key]);
  });
}

function clickLink(linkText) {
  element(by.contains(linkText)).click();
}
