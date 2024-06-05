import { ExamplePageService } from 'services/ExampleService/ExamplePageService';

import { loadExample, loadExampleDone, loadExampleFail } from 'stores/ExampleStore/ExampleEvents';

import { ExamplePageValue } from 'domains/exampleDomain';

const execute = async (): Promise<void> => {
  const errorCallback = () => {
    loadExampleFail();
  };

  loadExample();

  return ExamplePageService.getExampleData()
    .then(({ title, description }: ExamplePageValue) => {
      loadExampleDone({ title, description });
    })
    .catch(errorCallback);
};

const LoadExamplePageUseCase = {
  execute,
};

export default LoadExamplePageUseCase;
