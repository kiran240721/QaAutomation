const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  video: true,
  videoCompression: true,
  env: {
    url: "https://solclearskyqa.azurewebsites.net",
  },

  retries: {
    runMode: 3,
    //openMode: 0,
    },

  projectId: "w74cjj",
  //npx cypress run --record --key 3582dc7f-9fa7-42b8-91f2-af005df8a7c4

  //6da97b3b971d4f0c8a0fbf6cbf9ac0b7
  defaultCommandTimeout: 8000,
  e2e: {
    baseUrl: "https://solclearskyqa.azurewebsites.net",
  },


  "reporter": "mochawesome",

  browser: "chrome",


  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      //setupNodeEvents
      
    },
    specPattern: 'cypress/integration/examples/*.js'
  },

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports", // Directory where reports will be generated
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
    overwrite: false,
    html: false,
    json: true,
    charts: true,
    video: true

  }

});