import dayjs from 'dayjs';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import * as S from './styles';
import { City } from '../../graphql/types';
import { useContext } from 'react';
import AppContext from '../../AppContext';

interface WeatherCardProps extends City {}

const WeatherCard = ({ id, country, weather, name }: WeatherCardProps) => {
  const { removeCity } = useContext(AppContext);

  return (
    <S.StyledWeatherCard>
      <S.CloseButton
        className="close-button"
        onClick={() => {
          removeCity?.(id || '');
        }}
      >
        <CloseIcon />
      </S.CloseButton>

      <S.StyledWeatherIcon icon={weather?.summary?.icon || null} />

      <S.Degree>
        {weather?.temperature?.actual?.toFixed() || 'N/A'}
        <sup>&#9900;</sup>
      </S.Degree>

      <S.Location>
        {name}, {country}
      </S.Location>

      <S.Details>
        <S.DetailsItem>
          <div>Time</div>
          <div>{dayjs(weather?.timestamp).format('hh:mm A')}</div>
        </S.DetailsItem>

        <S.DetailsItem>
          <div>Humidity</div>
          <div>{weather?.clouds?.humidity || 'N/A'}</div>
        </S.DetailsItem>

        <S.DetailsItem>
          <div>Wind Speed</div>
          <div>{weather?.wind?.speed?.toFixed(2)}</div>
        </S.DetailsItem>

        <S.DetailsItem>
          <div>Feels</div>
          <div>{weather?.temperature?.feelsLike?.toFixed() || 'N/A'}</div>
        </S.DetailsItem>
      </S.Details>
    </S.StyledWeatherCard>
  );
};

export default WeatherCard;
