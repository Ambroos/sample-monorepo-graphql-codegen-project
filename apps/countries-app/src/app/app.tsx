import styles from './app.module.css';

import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import { CountriesList } from './countriesList';

const client = new Client({
  url: 'https://countries.trevorblades.com/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export function App() {
  return (
    <Provider value={client}>
      <div className={styles.app}>
        <h1>A sample app fetching countries via GraphQL</h1>
        <h2>
          <i>Fully typed!</i>
        </h2>
        <p>
          The countries list does the query, a separate component with it's own
          fragment renders each line. The currency filter demonstrates that the
          input object is fully typed too. The button is once again a separate
          component with it's own fragment!
        </p>
        <CountriesList />
      </div>
    </Provider>
  );
}

export default App;
