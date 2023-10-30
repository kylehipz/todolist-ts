// jest.config.ts
import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@constants': '<rootDir>/src/constants',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@config': '<rootDir>/src/config',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@controllers': '<rootDir>/src/controllers',
    '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^@errors': '<rootDir>/src/errors',
    '^@errors/(.*)$': '<rootDir>/src/errors/$1',
    '^@models': '<rootDir>/src/models',
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@middlewares': '<rootDir>/src/middlewares',
    '^@middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    '^@routes': '<rootDir>/src/routes',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@stubs': '<rootDir>/stubs'
  }
}

export default config
