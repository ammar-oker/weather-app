import styled from '@emotion/styled';
import WeatherIcon from '../WeatherIcon';

export const StyledWeatherCard = styled.div`
  padding: 50px 24px 24px;
  background: #fafcfe;
  background: linear-gradient(218deg, #fafcfe 0%, #d0e9f6 100%);
  border: 2px solid #e9f4fa;
  border-radius: 16px;
  text-align: center;
  transition: border-color ease-out 0.2s;
  position: relative;
  margin-bottom: 24px;

  &:hover {
    border-color: #f24747;
    .close-button {
      display: block;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  top: 0;
  right: 0;
  margin: 19px;
  cursor: pointer;
  outline: none;
  display: none;

  svg {
    height: 16.33px;
    width: 16.33px;
    color: #f24747;
  }
`;

export const StyledWeatherIcon = styled(WeatherIcon)`
  width: 85px;
  height: 85px;
`;

export const Degree = styled.div`
  font-size: 4rem;
  font-weight: 500;
  color: #2c2c2c;
  line-height: 1;
`;

export const Location = styled.div`
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.5;
  color: #2c2c2c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Details = styled.div`
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

export const DetailsItem = styled.div`
  & > *:first-of-type {
    font-weight: 500;
    font-size: 12px;
    color: #c4c4c4;

    & > *:last-of-type {
      color: #868686;
      font-size: 15px;
      font-weight: 600;
    }
  }
`;
