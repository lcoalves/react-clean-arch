import { createStore } from 'effector';

import { loadExample, loadExampleDone, loadExampleFail } from './ExampleEvents';
import { ExampleState } from './ExampleState';

const initialState: ExampleState = {
  isLoading: false,
  title: null,
  description: null,
};

const ExampleStore = createStore<ExampleState>(initialState)
  .on(loadExample, state => ({
    ...state,
    isLoading: true,
  }))
  .on(loadExampleDone, (_, data) => ({
    isLoading: false,
    title: data.title,
    description: data.description,
  }))
  .on(loadExampleFail, state => ({
    ...state,
    isLoading: false,
  }));

export default ExampleStore;
