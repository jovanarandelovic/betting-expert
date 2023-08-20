const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: true,
  defaultCommandTimeout: 5000,
  viewportHeight: 1920,
  viewportWidth: 1440,
  env: {
    foo: "bar",
    baz: "quux",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //  return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://www.bettingexpert.com/",
    experimentalRunAllSpecs: true,
  },
});
