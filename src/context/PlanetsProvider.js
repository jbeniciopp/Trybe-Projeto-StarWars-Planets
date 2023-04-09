import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [ordenacao, setOrdenacao] = useState('');
  const [oqOrdenar, setOqOrdenar] = useState('population');
  const [filterName, setfilterName] = useState('');
  const [filterNumber, setFilterNumber] = useState([]);

  function changeFilterName(name) {
    setfilterName(name);
  }

  return (
    <PlanetsContext.Provider
      value={ {
        ordenacao,
        setOrdenacao,
        oqOrdenar,
        setOqOrdenar,
        name: filterName,
        changeFilterName,
        filterNumber,
        setFilterNumber,
      } }
    >
      <div>{ children }</div>
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.any,
}.isRequire;
