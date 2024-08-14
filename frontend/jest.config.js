module.exports = {
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
      "**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
  testPathIgnorePatterns: ['/node_modules/'],
};
