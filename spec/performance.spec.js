describe("Performance Test", () => {
  it("should verify that OrangeHRM can handle a certain number of concurrent users", async () => {
    // Create a certain number of concurrent users.
    const users = 10;
    const protractors = [];

    // Simulate the users performing actions in OrangeHRM.
    for (let i = 0; i < users; i++) {
      protractors.push(createProtractorInstance());
    }

    // Wait for all users to finish their actions.
    await Promise.all(protractors.map(protractor => protractor.performActions()));

    // Verify that OrangeHRM can handle the load.
    for (let i = 0; i < users; i++) {
      expect(protractors[i].isDashboardVisible()).toBeTruthy();
    }
  });
});

class ProtractorInstance {
  constructor() {
    this.driver = browser;
  }

  async performActions() {
    await this.driver.get("https://opensource.orangehrm.com/demo/");
    await this.clickElement("Login");
    await this.fillInputs({
      username: "admin",
      password: "admin123",
    });
    await this.clickElement("Login");
  }

  async isDashboardVisible() {
    return await this.driver.element(by.contains("Dashboard")).isDisplayed();
  }

  async clickElement(text) {
    await this.driver.element(by.contains(text)).click();
  }

  async fillInputs(inputs) {
    await Promise.all(Object.keys(inputs).map(async key => {
      const input = await this.driver.element(by.css(`input[name="${key}"]`));
      await input.clear();
      await input.sendKeys(inputs[key]);
    }));
  }
}

function createProtractorInstance() {
  return new ProtractorInstance();
}
