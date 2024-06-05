import { createEvent } from 'effector';

import { LoginValue } from 'domains/login';

export const loadLogin = createEvent('loadLogin');
export const loadLoginDone = createEvent<LoginValue>('loadLoginDone');
export const loadLoginFail = createEvent('loadExampleFail');
