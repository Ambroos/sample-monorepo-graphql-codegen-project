import { Tree } from '@nx/devkit';
import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql';

async function getIntrospectionSchema() {
  return fetch('https://countries.trevorblades.com/graphql', {
    method: 'POST',
    body: JSON.stringify({ query: getIntrospectionQuery() }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => {
      if (res.ok) {
        return res;
      }
      throw new Error(`Failed to fetch schema: ${res.statusText}`);
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.errors != null && res.errors.length > 0) {
        throw new Error(
          `Failed to fetch schema: ${res.errors
            .map((e) => e.message)
            .join(', ')}`
        );
      }
      const schema = buildClientSchema(res.data);
      return printSchema(schema);
    });
}

export async function getGraphQLSchemaGenerator(tree: Tree) {
  const introspectionSchema = await getIntrospectionSchema();

  tree.write('libs/graphql-schema/countries.graphql', introspectionSchema);

  console.log('✅ Schema is ready! You should now rerun your GraphQL codegen.');
}

export default getGraphQLSchemaGenerator;
