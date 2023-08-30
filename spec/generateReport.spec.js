describe("Generate Report Test", () => {
  it("should generate a report from OrangeHRM", () => {
    browser.get("https://opensource.orangehrm.com/demo/");
    element(by.contains("Login")).click();
    fillInputs({
      username: "admin",
      password: "admin123",
    });
    element(by.contains("Login")).click();
    expect(element(by.contains("Dashboard")).isDisplayed()).toBeTruthy();

    clickLink("Reports");
    element(by.contains("Employees")).click();
    element(by.contains("Employee List")).click();

    // Select the filters for the report.
    selectOption("Employee Name", "John Doe");
    selectOption("Department", "IT");
    selectOption("Job Title", "Software Engineer");

    // Click the generate report button.
    element(by.contains("Generate Report")).click();

    // Verify that the report is generated.
    expect(element(by.contains("Employee List Report")).isPresent()).toBeTruthy();
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

function selectOption(selectLabel, optionValue) {
  const selectElement = element(by.cssContainingText("label", selectLabel)).element(by.xpath('..')).element(by.tagName('select'));
  selectElement.click();
  selectElement.element(by.cssContainingText("option", optionValue)).click();
}
