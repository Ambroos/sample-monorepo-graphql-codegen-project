import { FragmentType, getFragmentData, graphql } from '../gql';
import { CountryNameToggle } from './countryNameToggle';

const CountryInfoFragment = graphql(/* GraphQL */ `
  fragment CountryInfo on Country {
    code
    emoji
    ...CountryNameToggle
  }
`);

export type CountryInfoProps = {
  fragment: FragmentType<typeof CountryInfoFragment>;
};

export function CountryInfo(props: CountryInfoProps) {
  const country = getFragmentData(CountryInfoFragment, props.fragment);
  const { code, emoji } = country;
  return (
    <li>
      {code} {emoji} <CountryNameToggle fragment={country} />
    </li>
  );
}
