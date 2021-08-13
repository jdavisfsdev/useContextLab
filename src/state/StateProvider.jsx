import React, { createContext, useState, useEffect, useContext } from 'react';
import { getPopulation, getStates } from '../services/getData';

const StateContext = createContext();

export default function StateProvider({ children }) {
  const [states, setStates] = useState([]);
  const [population, setPopulation] = useState([]);
  const [year, setYear] = useState('2019');
  const years = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];

  useEffect(async () => {
    console.log(year);
    const states = await getStates();
    const population = await getPopulation(year);
    await setStates(states);
    await setPopulation(population);

  }, [year]);
  return (
    <StateContext.Provider value={{ states, population, year, years, setYear }}>
      {children}
    </StateContext.Provider>
  );
}

export const useData = () => {
  const { states, population, year } = useContext(StateContext);
  return [states, population, year];
};

export const useYear = () => {
  const { year } = useContext(StateContext);
  return year;
};

export const useSetYear = () => {
  const { setYear } = useContext(StateContext);
  return setYear;
};

export const useYears = () => {
  const { years } = useContext(StateContext);
  return years;
};
