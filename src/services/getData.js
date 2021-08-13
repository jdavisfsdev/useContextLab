export const getData = async () => {
  // returns object with array of states and all their data
  const res = await fetch('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest');
  const json = await res.json();
  return json.data;
};

export const getStates = async () => {
  // returns array of all states and puerto rico
  const res = await fetch('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest');
  const json = await res.json();
  const states = await json.data.map((entry) => {
    return entry.State;
  });
  return states;
};

export const getPopulation = async (year) => {
  const res = await fetch(`https://datausa.io/api/data?drilldowns=State&measures=Population&year=${year}`);
  const json = await res.json();
  const population = await json.data.map((entry) => {
    return entry.Population;
  });
  return population;
};

