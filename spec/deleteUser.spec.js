describe("Delete User Test", () => {
  it("should delete a user from OrangeHRM", () => {
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

    // Find the user to delete.
    element(by.css(".table-view tbody tr td:nth-child(2)")).element(by.contains("John Doe")).click();

    // Click the delete button.
    element(by.contains("Delete")).click();

    // Confirm the deletion.
    element(by.contains("Are you sure you want to delete this user?")).click();

    // Verify that the user is deleted.
    expect(element(by.contains("John Doe")).isPresent()).toBeFalsy();
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
