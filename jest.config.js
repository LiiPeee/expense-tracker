module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Opcional - para aliases
  },
  roots: ['<rootDir>/test'], // Procura testes na pasta src
  modulePaths: ['<rootDir>/src'], // Resolve imports a partir de src
};