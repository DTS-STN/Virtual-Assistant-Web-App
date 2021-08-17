
  module.exports = {
    moduleFileExtensions: [
      'js',
      'ts',
      'json',
      'vue'
    ],
    testPathIgnorePatterns: ["<rootDir>/cypress/"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
        "^[^.]+(.vue|.svg)$": "vue-jest",
      },

  }