const goToPage = page => {
  cy.visit(page);
  cy.wait(500);
};

const checkPageTitle = pageTitle => {
  cy.get('h2').first().contains(pageTitle);
};

const CommonPage = {
  goToPage,
  checkPageTitle,
};

export default CommonPage;
