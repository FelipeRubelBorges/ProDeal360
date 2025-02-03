## 🤘 About

Repository for the automated testing project using Cypress.

## 💻 Technologies
- Node.js
- Cypress
- Javascript


## 🤖 How to Run

1. Clone the repository and install dependencies
```
git clone https://github.com/FelipeRubelBorges/ProDeal360.git
```
```
npm install cypress --save-dev
```

2. Run tests in Headless mode
```
npx cypress run
```

3. View the test report
```
npx cypress open
```

## ✅ Test Case Documentation
- The test cases are documented in the `cypress/support/fixtures` folder.

## 💻 Test Report
- I implemented automated tests using Cypress following the Page Object pattern, which enhances the project's scalability and code reusability.
- I chose not to use Cucumber for writing test cases, as I believe it would add an unnecessary layer of complexity. The key focus is to keep tests highly readable for easy understanding, and given this, I don’t see the need for Cucumber.
- Additional improvements include cross-browser and cross-device testing, performance validation, and automation for regression testing, ensuring a more comprehensive and reliable quality assessment.

<hr>
