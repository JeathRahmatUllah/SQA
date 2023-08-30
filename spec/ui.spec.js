describe("UI Test", () => {
  it("should verify the layout of the OrangeHRM home page", () => {
    browser.get("https://opensource.orangehrm.com/demo/");
    element(by.contains("Login")).click();
    fillInputs({
      username: "admin",
      password: "admin123",
    });
    element(by.contains("Login")).click();
    expect(element(by.contains("Dashboard")).isDisplayed()).toBeTruthy();

    // Verify the layout of the home page.
    expect(element(by.contains("Welcome")).isPresent()).toBeTruthy();
    expect(element(by.contains("Dashboard")).isPresent()).toBeTruthy();
    expect(element(by.contains("Reports")).isPresent()).toBeTruthy();
    expect(element(by.contains("Employees")).isPresent()).toBeTruthy();
    expect(element(by.contains("Administration")).isPresent()).toBeTruthy();
  });
});

function fillInputs(inputs) {
  Object.keys(inputs).forEach(key => {
    const input = element(by.css(`input[name="${key}"]`));
    input.clear();
    input.sendKeys(inputs[key]);
  });
}
