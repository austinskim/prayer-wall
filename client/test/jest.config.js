const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfigFile: "../tsconfig.json"
    },
  }
}
