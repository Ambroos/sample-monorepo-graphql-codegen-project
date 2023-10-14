import { useState } from 'react';
import { FragmentType, getFragmentData, graphql } from '../gql';

const CountryNameToggleFragment = graphql(/* GraphQL */ `
  fragment CountryNameToggle on Country {
    code
    name
    native
  }
`);

export type CountryNameToggleProps = {
  fragment: FragmentType<typeof CountryNameToggleFragment>;
};

export function CountryNameToggle(props: CountryNameToggleProps) {
  const country = getFragmentData(CountryNameToggleFragment, props.fragment);
  let { name, native } = country;

  if (country.code === 'BE') {
    name = 'Belgium 🍟🍫🍺';
    native =
      "The developer's home country 👨‍💻, and the land of fries, chocolate and beer!";
  }

  const [showNative, setShowNative] = useState(false);
  return (
    <button
      onClick={() => setShowNative(!showNative)}
      disabled={name === native}
    >
      {showNative ? native : name}
    </button>
  );
}
