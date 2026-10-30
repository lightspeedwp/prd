module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/scripts/__tests__/**/*.test.js'],
  collectCoverageFrom: [
    'scripts/*.sh',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '/\\..*/',
  ],
  testTimeout: 120000,
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text', 'text-summary', 'html', 'lcov'],
};
