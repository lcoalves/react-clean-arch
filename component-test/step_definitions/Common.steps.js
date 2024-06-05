import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

import CommonPage from '../page_objects/Common.page';
import { pages } from '../utils/dictionary';

Given(/^I am on the "([^\"]+)" page$/, pageName => {
  CommonPage.goToPage(pages[pageName]);
});

Then(/^the page title must be "([^\"]+)"$/, title => {
  CommonPage.checkPageTitle(title);
});
