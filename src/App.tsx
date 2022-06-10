import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-grid-system';
import Header from './components/Header';
import { useQuery } from '@apollo/client';
import GetCityById from './graphql/queries/GetCityById';
import { City, QueryGetCityByIdArgs, Unit } from './graphql/types';
import Cities from './components/Cities';
import AppContext from './AppContext';
import Toolbar from './components/Toolbars';

function App() {
  const { cities: cityIds } = useContext(AppContext);
  const [cities, setCities] = useState<City[]>([]);
  const [unit, setUnit] = useState<Partial<Unit>>(Unit.Metric);

  const { loading, data, error, refetch } = useQuery<
    { getCityById: City[] },
    QueryGetCityByIdArgs
  >(GetCityById, {
    variables: {
      id: cityIds,
      config: { units: unit },
    },
    pollInterval: 5000,
  });

  useEffect(() => {
    if (data) {
      setCities(data.getCityById);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [cityIds, unit]);

  const status = () => {
    if (loading) {
      return 'Loading...';
    }

    if (error) {
      return 'Something went wrong';
    }

    if (!cities || cities.length === 0) {
      return 'Not cities added yet.';
    }

    return null;
  };

  return (
    <Container style={{ maxWidth: '1208px' }}>
      <Header />
      <Toolbar status={status()} unit={unit} setUnit={setUnit} />
      <Cities cities={cities} />
    </Container>
  );
}

export default App;
