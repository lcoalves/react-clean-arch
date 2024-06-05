import "cypress-iframe";
import "cypress-file-upload";

Cypress.Commands.add("setEnvConfig", (key, value) => {
  localStorage.setItem(key, value);
});
