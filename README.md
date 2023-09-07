# SQA
This project involved comprehensive testing of OrangeHRM, a human resource management system, encompassing functionality, integration, and performance tests to ensure smooth operations and accurate data management.


# OrangeHRM Testing Project

This project is a comprehensive testing effort for OrangeHRM, a human resource management system. It includes functional tests, integration tests, and performance tests to ensure the system's reliability and functionality.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Test Descriptions](#test-descriptions)
- [Test Code](#test-code)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before running the tests, ensure you have the following prerequisites installed:

- **Node.js:** Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

- **Protractor:** Protractor is used for end-to-end testing. Install it globally via npm:



- **WebDriver:** You'll need a WebDriver compatible with your browser (e.g., ChromeDriver, GeckoDriver for Firefox). Download and install the appropriate WebDriver and add its path to your system's PATH variable.

## Installation

1. Clone this repository to your local machine:
2. Navigate to the project directory:
3. Install project dependencies:

## Usage

To run the tests, use the following command:


This will execute all the defined test suites.

## Test Descriptions

- **Login Test**: Validates login functionality with valid and invalid credentials.
- **Delete User Test**: Tests user deletion functionality.
- **Update User Test**: Tests user profile update functionality.
- **Generate Report Test**: Verifies report generation functionality.
- **Export Data Test**: Tests data export functionality.
- **UI Test**: Validates the layout of the OrangeHRM home page.
- **Integration Test**: Verifies integration with an external system.
- **Performance Test**: Tests system performance under concurrent user load.

## Test Code

You can find the test code in the following files:

- `login.spec.js`
- `delete-user.spec.js`
- `update-user.spec.js`
- `generate-report.spec.js`
- `export-data.spec.js`
- `ui-test.spec.js`
- `integration-test.spec.js`
- `performance-test.spec.js`

Each test file contains detailed test scenarios and steps.

## Contributing

Contributions are welcome! If you have suggestions or find issues, please open a GitHub issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

