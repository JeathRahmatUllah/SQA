describe("Integration Test", () => {
  it("should verify that OrangeHRM can integrate with another system", () => {
    browser.get("https://opensource.orangehrm.com/demo/");
    element(by.contains("Login")).click();
    fillInputs({
      username: "admin",
      password: "admin123",
    });
    element(by.contains("Login")).click();
    expect(element(by.contains("Dashboard")).isDisplayed()).toBeTruthy();

    // Integrate OrangeHRM with another system.
    clickLink("Administration");
    element(by.contains("System Integration")).click();
    element(by.contains("New Integration")).click();
    fillInputs({
      integrationName: "Test Integration",
      systemName: "Test System",
      systemUrl: "https://test.com",
      integrationType: "Web Service",
    });
    element(by.contains("Save")).click();

    // Verify that the integration is successful.
    expect(element(by.contains("Test Integration")).isPresent()).toBeTruthy();
    expect(element(by.contains("Test System")).isPresent()).toBeTruthy();
    expect(element(by.contains("https://test.com")).isPresent()).toBeTruthy();
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
