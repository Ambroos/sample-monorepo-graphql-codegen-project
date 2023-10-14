import { useQuery } from 'urql';
import { graphql } from '../gql';
import { CountryInfo } from './countryInfo';
import { useState } from 'react';

const countriesQuery = graphql(/* GraphQL */ `
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      ...CountryInfo
    }
  }
`);

export function CountriesList() {
  const [currency, setCurrency] = useState('EUR');

  const [result] = useQuery({
    query: countriesQuery,
    variables: {
      filter: {
        currency:
          currency === ''
            ? undefined
            : {
                eq: currency,
              },
      },
    },
  });

  const { data, fetching, error } = result;

  const countries = data?.countries ?? [];

  return (
    <div>
      {/* <p>
        Note: This component cannot access any fields in the Country object that
        it doesn't query for itself. Data needed for other components is inside
        a masked fragment that only the file defining the fragment should access
        directly. If you comment this out, this will produce a type error, even
        though the field is probably available:
        <span> {countries[0]?.emoji} </span>
        If you run the app it will actually work because of how fragment masking
        is implemented, but by not allowing it in the type system you force
        people to do GraphQL right: every component is only responsible for
        defining it's own data needs.
      </p> */}
      <p>
        Filter by currency (leave blank to show all):{' '}
        <input value={currency} onChange={(e) => setCurrency(e.target.value)} />
        <button onClick={() => setCurrency('')}>any</button>
        <button onClick={() => setCurrency('EUR')}>€</button>
        <button onClick={() => setCurrency('GBP')}>£</button>
        <button onClick={() => setCurrency('USD')}>$ (US)</button>
      </p>
      {fetching && <p>Loading...</p>}
      {error && <p>Oh no... {error.message}</p>}
      {!fetching && !error && (
        <ul>
          {countries.map((country) => (
            <CountryInfo key={country.code} fragment={country} />
          ))}
        </ul>
      )}
    </div>
  );
}
