import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Filter from './components/Filter';
import Header from './components/Header';
import Table from './components/Table';
import './style.css';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <div className="table-and-filter">
        <Filter />
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;
