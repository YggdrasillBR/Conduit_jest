'use strict'

export const preset = 'ts-jest'
export const globals = {
  'ts-jest': {
    isolatedModules: true,
  },
}
export const modulePathIgnorePatterns = ['<rootDir>/dist/']
export const moduleNameMapper = {
  '@/(.*)': '<rootDir>/src/$1',
}