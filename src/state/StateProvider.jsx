import React, { createContext, useState, useEffect, useContext } from 'react';
import { getPopulation, getStates } from '../services/getData';

const StateContext = createContext();

export default function StateProvider({ children }) {
  const [states, setStates] = useState([]);
  const [population, setPopulation] = useState([]);
  const [year, setYear] = useState('');

  useEffect(async () => {
    const year = '2018';
    setYear(year);
    const states = await getStates();
    const population = await getPopulation(year);
    await setStates(states);
    await setPopulation(population);

  }, []);
  return (
    <StateContext.Provider value={{ states, population, year }}>
      {children}
    </StateContext.Provider>
  );
}

export const useData = () => {
  const { states, population, year } = useContext(StateContext);
  return [states, population, year];
};
