describe("Login Test", () => {
  it("should login to OrangeHRM with valid credentials", () => {
    browser.get("https://opensource.orangehrm.com/demo/");
    element(by.contains("Login")).click();
    fillInputs({
      username: "admin",
      password: "admin123",
    });
    element(by.contains("Login")).click();
    expect(element(by.contains("Dashboard")).isDisplayed()).toBeTruthy();
  });

  it("should not login to OrangeHRM with invalid credentials", () => {
    browser.get("https://opensource.orangehrm.com/demo/");
    element(by.contains("Login")).click();
    fillInputs({
      username: "invalid",
      password: "invalid",
    });
    element(by.contains("Login")).click();
    expect(element(by.contains("Invalid credentials")).isDisplayed()).toBeTruthy();
  });
});

function fillInputs(inputs) {
  Object.keys(inputs).forEach(key => {
    const input = element(by.css(`input[name="${key}"]`));
    input.clear();
    input.sendKeys(inputs[key]);
  });
}
