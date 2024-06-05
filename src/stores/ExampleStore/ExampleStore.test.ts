import { loadExample, loadExampleDone, loadExampleFail } from './ExampleEvents';
import ExampleStore from './ExampleStore';

describe('ExampleStore', () => {
  it('should change value of isLoading when loadExample is called', () => {
    loadExample();
    expect(ExampleStore.getState().isLoading).toEqual(true);
  });

  it('should change values when loadExampleDone is called', () => {
    loadExampleDone({ title: 'Example title', description: 'Example description' });
    expect(ExampleStore.getState().isLoading).toEqual(false);
  });

  it('should change value of isLoading when loadExampleFail is called', () => {
    loadExampleFail();
    expect(ExampleStore.getState().isLoading).toEqual(false);
  });
});
