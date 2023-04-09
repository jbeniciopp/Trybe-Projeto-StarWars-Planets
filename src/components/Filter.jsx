import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Filter() {
  // const [selectOrd, setSelectOrd] = useState('');
  // const [oqOrdenar2, setOqOrdenar2] = useState('population');
  const filter = useContext(PlanetsContext);
  const {
    changeFilterName,
    setFilterNumber,
    filterNumber,
    // setOrdenacao,
    // setOqOrdenar,
  } = filter;

  const [opcoes, setOpcoes] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [filtroN, setFiltroN] = useState({
    column: opcoes[0],
    comparison: 'maior que',
    value: 0,
  });

  const optionsList = opcoes.map((e, i) => (<option key={ i } id={ i }>{e}</option>));

  const handleButtonClick = () => {
    setFilterNumber([...filterNumber, filtroN]);
    const { column } = filtroN;
    setOpcoes(opcoes.filter((item) => item !== column));
  };

  const handleRemoveFilterClick = (column) => {
    setFilterNumber(filterNumber.filter((item) => item.column !== column));
    setOpcoes([...opcoes, column]);
  };

  return (
    <form>
      <div>
        <input
          className="input-search"
          type="text"
          data-testid="name-filter"
          onChange={ (e) => {
            changeFilterName(e.target.value);
          } }
        />
      </div>
      <div>
        <select
          data-testid="column-filter"
          onChange={ (e) => {
            setFiltroN({
              ...filtroN,
              column: e.target.value,
            });
          } }
        >
          {optionsList}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (e) => {
            setFiltroN({
              ...filtroN,
              comparison: e.target.value,
            });
          } }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          className="input-number"
          type="number"
          data-testid="value-filter"
          defaultValue="0"
          onChange={ (e) => {
            setFiltroN({
              ...filtroN,
              value: e.target.value,
            });
          } }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleButtonClick }
        >
          Filtrar
        </button>
        {/* <select
          data-testid="column-sort"
          onChange={ (e) => setOqOrdenar2(e.target.value) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <label>
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
            name="Ordenar"
            onClick={ (e) => setSelectOrd(e.target.value) }
          />
          Ascendente
        </label>
        <label>
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
            name="Ordenar"
            onClick={ (e) => setSelectOrd(e.target.value) }
          />
          Descendente
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => {
            setOrdenacao(selectOrd);
            setOqOrdenar(oqOrdenar2);
          } }
        >
          Ordenar
        </button> */}
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ () => setFilterNumber([]) }
        >
          Remover todas filtragens
        </button>
      </div>
      <div className="filters">
        {filterNumber.map((e, i) => (
          <p key={ i } data-testid="filter">
            {`${e.column} ${e.comparison} ${e.value} `}
            <button
              className="remove-button"
              type="button"
              onClick={ () => handleRemoveFilterClick(e.column) }
            >
              X
            </button>
          </p>
        ))}
      </div>
    </form>
  );
}
