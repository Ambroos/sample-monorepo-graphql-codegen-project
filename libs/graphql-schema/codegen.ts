import { CodegenConfig } from '@graphql-codegen/cli';
import { schemaPreset } from '@ambroos/graphql-codegen-preset-monorepo-client';

const config: CodegenConfig = {
  schema: './libs/graphql-schema/countries.graphql',
  generates: {
    './libs/graphql-schema/src/gql/': {
      preset: schemaPreset,
    },
  },
};

export default config;
