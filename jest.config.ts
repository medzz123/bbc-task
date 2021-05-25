import { pathsToModuleNameMapper } from 'ts-jest/utils';

import { compilerOptions } from './tsconfig.json';

const jestConfig = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [`node_modules`, `\\.next`, '__tests__'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/__mocks__/svg.ts',
    'amazon-cognito-identity-js': '<rootDir>/__mocks__/cognito.js',
  },
  setupFilesAfterEnv: ['<rootDir>/__tests__/testSetup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};

export default jestConfig;
