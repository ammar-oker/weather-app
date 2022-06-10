import * as S from './styles';
import TextField from '../TextField/TextField';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import React, { ReactNode, useContext, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import GetCityByName from '../../graphql/queries/GetCityByName';
import { City, Maybe, QueryGetCityByNameArgs } from '../../graphql/types';
import AppContext from '../../AppContext';

const Message = {
  INIT: () => null,
  LOADING: () => <>Loading...</>,
  ERROR: () => <>Something went wrong!</>,
  ALREADY_EXISTS: (query: string) => (
    <>
      City of <strong>`{query}`</strong> already exists
    </>
  ),
  NOT_FOUND: (query: string) => (
    <>
      City of <strong>`{query}`</strong> cannot be found
    </>
  ),
};

const Header = () => {
  const { addCity } = useContext(AppContext);
  const [city, setCity] = useState('');
  const [message, setMessage] = useState<ReactNode>(Message.INIT());
  const [error, setError] = useState(false);
  const [getCity] = useLazyQuery<
    { getCityByName?: City },
    QueryGetCityByNameArgs
  >(GetCityByName);

  const saveCityToStorage = (query: string, city?: Maybe<string>) => {
    if (!city) {
      setError(true);
      setMessage(Message.NOT_FOUND(query));
      return;
    }

    const ids = localStorage.getItem('cities')?.split(',') || [];

    if (ids.includes(city)) {
      setError(true);
      setMessage(Message.ALREADY_EXISTS(query));
      return;
    }

    if (city) {
      addCity?.(city);
    }

    setMessage(Message.INIT());
  };

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setError(false);
    setMessage(Message.INIT());

    if (city.length >= 3) {
      setMessage(Message.LOADING());
      try {
        const { data } = await getCity({ variables: { name: city } });
        saveCityToStorage(city, data?.getCityByName?.id);
        setCity('');
      } catch (e) {
        console.error(e);
        setError(true);
        setMessage(Message.ERROR());
      }
    }
  };

  return (
    <S.StyledHeader>
      <S.HeaderTitle xs={12} md={6} component="h1">
        Weather
      </S.HeaderTitle>
      <S.StyledForm xs={12} md={6} component="form" onSubmit={handleSubmit}>
        <TextField
          value={city}
          placeholder="Search by city"
          endIcon={<SearchIcon />}
          message={message}
          error={error}
          onChange={e => {
            setCity(e.currentTarget.value);
          }}
        />
      </S.StyledForm>
    </S.StyledHeader>
  );
};

export default Header;
