const config = {
  clearMocks: true,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testRegex: '((\\.|/*.)(test))\\.[tj]sx?$',

  coverageDirectory: 'reports',
  coverageReporters: ['cobertura', 'html', 'lcov', 'text-summary', 'text'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.tsx',
    '!src/**/index.{js,jsx,ts,tsx}',
    '!src/**/*.types.{js,jsx,ts,tsx}',
    '!src/**/*.style.{js,jsx,ts,tsx}',
    '!src/config/**/*.ts',
    '!src/server/**/*.js',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      lines: 80,
      functions: 80,
      statements: 80,
    },
    './**/': {
      branches: 80,
      lines: 80,
      functions: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/config/mocks/fileMock.ts',
    '\\.(css)$': '<rootDir>/config/mocks/styleMock.ts',
  },
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: './reports/',
      },
    ],
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: './reports/',
        outputName: 'junit.xml',
        classNameTemplate: '{classname} - {title}',
        titleTemplate: '{classname} - {title}',
        ancestorSeparator: ' > ',
        usePathForSuiteName: 'true',
      },
    ],
  ],
};

export default config;
