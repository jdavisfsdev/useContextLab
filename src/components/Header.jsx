import React from 'react';
import { useSetYear, useYear, useYears } from '../state/StateProvider';

export const Header = () => {
  const year = useYear();
  const setYear = useSetYear();
  const years = useYears();

  const handleChange = ({ target }) => setYear(target.value);


  return (
    <>
      <h1>POPULATION BY STATE {year}</h1>
      <h2>Select year:</h2>
      <ul>
        {years.map((year) => (
          <li key={year}>
            <label>{year}</label>
            <input type="radio" name="year" value={year} onChange={handleChange} />
          </li>
        ))}
      </ul>

      
    </>
  );
};
