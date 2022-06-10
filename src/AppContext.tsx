import { createContext, ReactNode, useEffect, useState } from 'react';

const AppContext = createContext<{
  cities?: string[];
  addCity?: (city: string) => void;
  removeCity?: (city: string) => void;
}>({});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cities, setCities] = useState(
    localStorage.getItem('cities')?.split(',') || [],
  );

  const addCity = (city: string) => {
    setCities([city, ...cities]);
  };

  const removeCity = (city: string) => {
    setCities(cities.filter(id => id !== city));
  };

  useEffect(() => {
    localStorage.setItem('cities', cities.join(','));
  }, [cities]);

  return (
    <AppContext.Provider value={{ cities, addCity, removeCity }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
