import "regenerator-runtime/runtime";
import "@testing-library/jest-dom";

import { tick, mockTranslation } from "./tests/testHelpers";
const env = require("dotenv").config({ path: ".env.development" });

(window as any).__env = env.parsed;

const globalAny: any = global;

globalAny.tick = tick;
globalAny.mockTranslation = mockTranslation;
