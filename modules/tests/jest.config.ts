import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest/utils';

// Load the config which holds the path aliases.
import { compilerOptions } from '../../tsconfig.json';

const config: Config.InitialOptions = {
  preset: 'ts-jest',

  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      // This has to match the baseUrl defined in tsconfig.json.
      prefix: '<rootDir>/../../',
    }),
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
  },
};

export default config;
