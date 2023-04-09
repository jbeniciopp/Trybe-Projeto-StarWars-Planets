const filtroN = (filtro, planets) => {
  const { column, comparison, value } = filtro;

  const comparisonOperators = {
    'maior que': (a, b) => a > b,
    'menor que': (a, b) => a < b,
    'igual a': (a, b) => a === b,
  };

  if (!(comparison in comparisonOperators)) {
    return planets;
  }

  const operator = comparisonOperators[comparison];

  const filteredPlanets = planets.filter((planet) => {
    const planetValue = parseFloat(planet[column]);
    return operator(planetValue, parseFloat(value));
  });

  return filteredPlanets;
};

const filtroMultiplo = (filtros, planets) => {
  let filteredPlanets = planets;

  for (let i = 0; i < filtros.length; i += 1) {
    filteredPlanets = filtroN(filtros[i], filteredPlanets);
  }

  return filteredPlanets;
};

export default filtroMultiplo;
