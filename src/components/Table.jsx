import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import requestAPI from '../services/requestAPI';
import filtroMultiplo from '../services/filtroMultiplo';
import ordenaPlanets from '../services/ordenaPlanets';

export default function Table() {
  const [planets, setPlanets] = useState([]);
  const [planetsF, setPlanetsF] = useState(planets);
  const filter = useContext(PlanetsContext);
  const { name, filterNumber, ordenacao, oqOrdenar } = filter;
  const [ordeP, setOrdeP] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const api = await requestAPI();
      const response = api;
      setPlanets(response);
    }
    fetchData();
  }, []);

  useEffect(() => {
    // console.log(filterNumber);
    const filterN = filtroMultiplo(filterNumber, planets);
    setPlanetsF(filterN);

    // console.log(ord);
  }, [filterNumber, planets]);

  useEffect(() => {
    const ord = ordenaPlanets(planetsF, ordenacao, oqOrdenar);
    setOrdeP(ord);
  }, [planetsF, ordenacao, oqOrdenar, ordeP]);

  const filtro = () => {
    const nameLower = name.toLowerCase();
    // console.log(planetsF);
    if (planetsF === undefined) {
      return (<p>carregando...</p>);
    }
    const filtrado = ordeP
      .filter((obj) => obj.name.toLowerCase().includes(nameLower));
    return filtrado.map((e, i) => (
      <tr key={ i } className="lines">
        <td data-testid="planet-name">{e.name}</td>
        <td>{e.rotation_period}</td>
        <td>{e.orbital_period}</td>
        <td>{e.diameter}</td>
        <td>{e.climate}</td>
        <td>{e.gravity}</td>
        <td>{e.terrain}</td>
        <td>{e.surface_water}</td>
        <td>{e.population}</td>
        <td>{e.films}</td>
        <td>{e.created}</td>
        <td>{e.edited}</td>
        <td>{e.url}</td>
      </tr>));
  };

  if (planets.length === 0) {
    return (<p className="loading">carregando...</p>);
  }

  return (
    <div className="table">
      <table>
        <tr className="top-table">
          { Object.keys(planets[0]).map((e) => (
            <th key={ e }>
              { e.toLocaleUpperCase() }
            </th>
          )) }
        </tr>
        { filtro() }
      </table>
    </div>
  );
}
