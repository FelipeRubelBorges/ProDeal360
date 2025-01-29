const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/tests/e2e/**/*.cy.js", // Caminho correto para seus testes
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
