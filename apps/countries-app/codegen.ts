import { CodegenConfig } from '@graphql-codegen/cli';
import { packagePreset } from '@ambroos/graphql-codegen-preset-monorepo-client';

const projectRoot = './apps/countries-app';

const config: CodegenConfig = {
  schema: './libs/graphql-schema/countries.graphql',
  documents: [`${projectRoot}/src/**/*.tsx`],
  generates: {
    [`${projectRoot}/src/gql/`]: {
      preset: packagePreset,
      presetConfig: {
        schemaTypesPath:
          '@sample-monorepo-graphql-codegen-project/graphql-schema',
      },
    },
  },
};

export default config;
