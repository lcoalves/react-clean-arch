/* eslint-disable no-console */
import Api from 'clients/api/Api';

import { ExamplePageValue } from 'domains/exampleDomain';

const getExampleData = async (): Promise<ExamplePageValue> => {
  return Api.get({
    url: '/example',
  })
    .then(response => response.data)
    .catch(err => {
      console.log(err);
      throw err;
    });
};

export const ExamplePageService = {
  getExampleData,
};
