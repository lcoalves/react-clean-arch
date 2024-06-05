import { createEvent } from 'effector';

import { ExamplePageValue } from 'domains/exampleDomain';

export const loadExample = createEvent('loadExample');
export const loadExampleDone = createEvent<ExamplePageValue>('loadExampleDone');
export const loadExampleFail = createEvent('loadExampleFail');
