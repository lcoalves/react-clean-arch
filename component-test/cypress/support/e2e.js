import "./commands";

Cypress.on("window:before:load", win => {
  win.handleFromCypress = function (request) {
    console.log("handle");
    return fetch(request.url, {
      method: request.method,
      headers: request.requestHeaders,
      body: request.requestBody,
    }).then(res => {
      const content = res.headers.get("content-type").includes("application/json")
        ? res.json()
        : res.text();
      return new Promise(resolve => {
        content.then(body => resolve([res.status, res.headers, body]));
      });
    });
  };
});

Cypress.on("test:after:run", test => {
  if (test.state !== "passed" && test.retries > 0) Cypress.runner.stop();
});
