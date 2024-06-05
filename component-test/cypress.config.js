const { defineConfig } = require("cypress");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const webpack = require("@cypress/webpack-preprocessor");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    }),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  reporter: "cypress-multi-reporters",
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 660,
  video: false,

  reporterOptions: {
    configFile: "reporter-config.json",
  },

  e2e: {
    baseUrl: "http://localhost",
    setupNodeEvents,
    specPattern: "**/*.feature",
    supportFile: "./cypress/support/e2e.js",
  },
});
