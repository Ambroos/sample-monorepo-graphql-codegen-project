/* eslint-disable */
import * as schema from '@sample-monorepo-graphql-codegen-project/graphql-schema'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type CountriesQueryVariables = schema.Exact<{
  filter?: schema.InputMaybe<schema.CountryFilterInput>;
}>;


export type CountriesQuery = { readonly __typename?: 'Query', readonly countries: ReadonlyArray<(
    { readonly __typename?: 'Country', readonly code: string }
    & { ' $fragmentRefs'?: { 'CountryInfoFragment': CountryInfoFragment } }
  )> };

export type CountryInfoFragment = (
  { readonly __typename?: 'Country', readonly code: string, readonly emoji: string }
  & { ' $fragmentRefs'?: { 'CountryNameToggleFragment': CountryNameToggleFragment } }
) & { ' $fragmentName'?: 'CountryInfoFragment' };

export type CountryNameToggleFragment = { readonly __typename?: 'Country', readonly code: string, readonly name: string, readonly native: string } & { ' $fragmentName'?: 'CountryNameToggleFragment' };

export const CountryNameToggleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryNameToggle"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"native"}}]}}]} as unknown as DocumentNode<CountryNameToggleFragment, unknown>;
export const CountryInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryNameToggle"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryNameToggle"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"native"}}]}}]} as unknown as DocumentNode<CountryInfoFragment, unknown>;
export const CountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Countries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryNameToggle"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"native"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryNameToggle"}}]}}]} as unknown as DocumentNode<CountriesQuery, CountriesQueryVariables>;