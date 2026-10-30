module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverageFrom: [
    '**/*.md',
    '**/*.sh',
    '!node_modules/**',
    '!**/node_modules/**',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '/\\..*/',
  ],
  testTimeout: 30000,
  verbose: true,
  bail: false,
  roots: [
    '<rootDir>/tests',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverage: true,
  coverageReporters: ['text', 'text-summary', 'html', 'lcov'],
};
