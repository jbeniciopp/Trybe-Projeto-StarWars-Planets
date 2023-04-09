import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Filter from '../components/Filter';
import PlanetsContext from '../context/PlanetsContext';

describe('Filter component', () => {
  const mockFilter = {
    changeFilterName: jest.fn(),
    setFilterNumber: jest.fn(),
    filterNumber: [],
  };

  beforeEach(() => {
    render(
      <PlanetsContext.Provider value={ mockFilter }>
        <Filter />
      </PlanetsContext.Provider>,
    );
  });

  it('should render the component properly', () => {
    expect(screen.getByTestId('name-filter')).toBeInTheDocument();
    expect(screen.getByTestId('column-filter')).toBeInTheDocument();
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument();
    expect(screen.getByTestId('value-filter')).toBeInTheDocument();
    expect(screen.getByTestId('button-filter')).toBeInTheDocument();
  });

  it('should call the changeFilterName function when the name filter input changes', () => {
    const nameFilterInput = screen.getByTestId('name-filter');
    fireEvent.change(nameFilterInput, { target: { value: 'Alderaan' } });
    expect(mockFilter.changeFilterName).toHaveBeenCalledWith('Alderaan');
  });

  it('should add a new filter when the filter button is clicked', () => {
    const columnFilterSelect = screen.getByTestId('column-filter');
    fireEvent.change(columnFilterSelect, { target: { value: 'diameter' } });

    const comparisonFilterSelect = screen.getByTestId('comparison-filter');
    fireEvent.change(comparisonFilterSelect, { target: { value: 'maior que' } });

    const valueFilterInput = screen.getByTestId('value-filter');
    fireEvent.change(valueFilterInput, { target: { value: '8000' } });

    const buttonFilter = screen.getByTestId('button-filter');
    fireEvent.click(buttonFilter);

    expect(mockFilter.setFilterNumber).toHaveBeenCalledWith([{ column: 'diameter', comparison: 'maior que', value: '8000' }]);
    expect(screen.getByTestId('filter')).toHaveTextContent('diameter maior que 8000');
  });

  it('should remove a filter when the X button is clicked', () => {
    mockFilter.filterNumber = [{ column: 'population', comparison: 'menor que', value: '500' }];

    render(
      <PlanetsContext.Provider value={ mockFilter }>
        <Filter />
      </PlanetsContext.Provider>,
    );

    const removeFilterButton = screen.getByRole('button', { name: 'X' });
    fireEvent.click(removeFilterButton);

    expect(mockFilter.setFilterNumber).toHaveBeenCalledWith([]);
  });
});
