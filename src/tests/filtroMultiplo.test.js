import filtroMultiplo from '../services/filtroMultiplo';

describe('filtroMultiplo', () => {
  const planets = [
    { name: 'Earth', diameter: '12742', mass: '5.97e24' },
    { name: 'Mars', diameter: '6779', mass: '6.39e23' },
    { name: 'Jupiter', diameter: '139822', mass: '1.898e27' },
    { name: 'Saturn', diameter: '116460', mass: '5.68e26' },
    { name: 'Uranus', diameter: '50724', mass: '8.68e25' },
    { name: 'Neptune', diameter: '49244', mass: '1.02e26' },
  ];

  it('should return all planets when no filters are given', () => {
    const filtros = [];
    const result = filtroMultiplo(filtros, planets);
    expect(result).toEqual(planets);
  });

  it('should filter planets by diameter', () => {
    const filtros = [{ column: 'diameter', comparison: 'maior que', value: '100000' }];
    const result = filtroMultiplo(filtros, planets);
    expect(result).toEqual([{ name: 'Jupiter', diameter: '139822', mass: '1.898e27' }, { name: 'Saturn', diameter: '116460', mass: '5.68e26' }]);
  });

  it('should filter planets by mass', () => {
    const filtros = [{ column: 'mass', comparison: 'menor que', value: '1e25' }];
    const result = filtroMultiplo(filtros, planets);
    expect(result).toEqual([{ name: 'Mars', diameter: '6779', mass: '6.39e23' }, { name: 'Uranus', diameter: '50724', mass: '8.68e25' }, { name: 'Neptune', diameter: '49244', mass: '1.02e26' }]);
  });

  it('should return all planets when an invalid comparison operator is given', () => {
    const filtros = [{ column: 'diameter', comparison: 'different than', value: '100000' }];
    const result = filtroMultiplo(filtros, planets);
    expect(result).toEqual(planets);
  });

  it('should return an empty array when no planet matches the filter', () => {
    const filtros = [{ column: 'mass', comparison: 'maior que', value: '1e30' }];
    const result = filtroMultiplo(filtros, planets);
    expect(result).toEqual([]);
  });

  it('should filter planets by diameter and mass', () => {
    const filtros = [
      { column: 'diameter', comparison: 'menor que', value: '50000' },
      { column: 'mass', comparison: 'maior que', value: '1e25' },
    ];
    const result = filtroMultiplo(filtros, planets);
    expect(result).toEqual([{ name: 'Jupiter', diameter: '139822', mass: '1.898e27' }]);
  });
});
