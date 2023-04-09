import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PlanetsProvider from '../context/PlanetsProvider';
import PlanetsContext from '../context/PlanetsContext';

test('renders planets provider with initial state', () => {
  render(
    <PlanetsProvider>
      <PlanetsContext.Consumer>
        { (context) => (
          <>
            <div>{ context.ordenacao }</div>
            <div>{ context.oqOrdenar }</div>
            <div>{ context.name }</div>
            <div>{ context.filterNumber }</div>
          </>
        ) }
      </PlanetsContext.Consumer>
    </PlanetsProvider>
  );

  expect(screen.getByText('')).toBeInTheDocument();
});

test('updates filter name state', () => {
  render(
    <PlanetsProvider>
      <PlanetsContext.Consumer>
        { (context) => (
          <>
            <input onChange={(event) => context.changeFilterName(event.target.value)} />
            <div>{ context.name }</div>
          </>
        ) }
      </PlanetsContext.Consumer>
    </PlanetsProvider>
  );

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'Tatooine' } });

  expect(screen.getByText('Tatooine')).toBeInTheDocument();
});
