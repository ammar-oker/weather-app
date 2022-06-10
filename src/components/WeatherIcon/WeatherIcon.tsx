/*
 * see https://openweathermap.org/weather-conditions
 * */
import { SVGProps } from 'react';
import { Icon, Maybe } from '../../graphql/types';

import { ReactComponent as WeatherIcon01d } from '../../icons/weather/01d.svg';
import { ReactComponent as WeatherIcon02d } from '../../icons/weather/02d.svg';
import { ReactComponent as WeatherIcon03d } from '../../icons/weather/03d.svg';
import { ReactComponent as WeatherIcon04d } from '../../icons/weather/04d.svg';
import { ReactComponent as WeatherIcon09d } from '../../icons/weather/09d.svg';
import { ReactComponent as WeatherIcon10d } from '../../icons/weather/10d.svg';
import { ReactComponent as WeatherIcon11d } from '../../icons/weather/11d.svg';
import { ReactComponent as WeatherIcon13d } from '../../icons/weather/13d.svg';
import { ReactComponent as WeatherIcon50d } from '../../icons/weather/50d.svg';
import { ReactComponent as WeatherIcon01n } from '../../icons/weather/01n.svg';
import { ReactComponent as WeatherIcon02n } from '../../icons/weather/02n.svg';
import { ReactComponent as WeatherIcon03n } from '../../icons/weather/03n.svg';
import { ReactComponent as WeatherIcon04n } from '../../icons/weather/04n.svg';
import { ReactComponent as WeatherIcon09n } from '../../icons/weather/09n.svg';
import { ReactComponent as WeatherIcon10n } from '../../icons/weather/10n.svg';
import { ReactComponent as WeatherIcon11n } from '../../icons/weather/11n.svg';
import { ReactComponent as WeatherIcon13n } from '../../icons/weather/13n.svg';
import { ReactComponent as WeatherIcon50n } from '../../icons/weather/50n.svg';

interface WeatherIconProps extends SVGProps<SVGSVGElement> {
  icon: Maybe<Icon>;
}

const WeatherIcon = ({ icon, ...props }: WeatherIconProps) => {
  switch (icon) {
    case '01d':
      return <WeatherIcon01d {...props} />;
    case '02d':
      return <WeatherIcon02d {...props} />;
    case '03d':
      return <WeatherIcon03d {...props} />;
    case '04d':
      return <WeatherIcon04d {...props} />;
    case '09d':
      return <WeatherIcon09d {...props} />;
    case '10d':
      return <WeatherIcon10d {...props} />;
    case '11d':
      return <WeatherIcon11d {...props} />;
    case '13d':
      return <WeatherIcon13d {...props} />;
    case '50d':
      return <WeatherIcon50d {...props} />;
    case '01n':
      return <WeatherIcon01n {...props} />;
    case '02n':
      return <WeatherIcon02n {...props} />;
    case '03n':
      return <WeatherIcon03n {...props} />;
    case '04n':
      return <WeatherIcon04n {...props} />;
    case '09n':
      return <WeatherIcon09n {...props} />;
    case '10n':
      return <WeatherIcon10n {...props} />;
    case '11n':
      return <WeatherIcon11n {...props} />;
    case '13n':
      return <WeatherIcon13n {...props} />;
    case '50n':
      return <WeatherIcon50n {...props} />;

    default:
      return null;
  }
};

export default WeatherIcon;
