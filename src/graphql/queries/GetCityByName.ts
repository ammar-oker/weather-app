import { gql } from '@apollo/client';

const GetCityByName = gql`
  query City($name: String!, $country: String, $config: ConfigInput) {
    getCityByName(name: $name, country: $country, config: $config) {
      id
    }
  }
`;

export default GetCityByName;
