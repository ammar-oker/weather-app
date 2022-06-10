import { Row } from 'react-grid-system';
import WeatherCard from '../WeatherCard';
import { City } from '../../graphql/types';
import * as S from './styles';

interface CitiesProps {
  cities: City[];
}

export const Cities = ({ cities }: CitiesProps) => {
  return (
    <Row component="main">
      {cities?.map?.(({ id, ...props }) => (
        <S.StyledCol key={id} xs={12} md={6} lg={4}>
          <WeatherCard id={id} {...props} />
        </S.StyledCol>
      ))}
    </Row>
  );
};

export default Cities;
