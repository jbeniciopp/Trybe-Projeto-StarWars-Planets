import ordenaPlanets from '../services/ordenaPlanets';

const planets = [  { name: 'Tatooine', population: '200000' },  { name: 'Alderaan', population: '2000000000' },  { name: 'Yavin IV', population: '1000' },];

describe('ordenaPlanets function', () => {
  it('should return the planets array if ordenacao is empty', () => {
    expect(ordenaPlanets(planets, '', 'name')).toEqual(planets);
  });

  it('should sort planets by population in ascending order', () => {
    const expected = [      { name: 'Yavin IV', population: '1000' },      { name: 'Tatooine', population: '200000' },      { name: 'Alderaan', population: '2000000000' },    ];
    expect(ordenaPlanets(planets, 'ASC', 'population')).toEqual(expected);
  });

  it('should sort planets by population in descending order', () => {
    const expected = [      { name: 'Alderaan', population: '2000000000' },      { name: 'Tatooine', population: '200000' },      { name: 'Yavin IV', population: '1000' },    ];
    expect(ordenaPlanets(planets, 'DESC', 'population')).toEqual(expected);
  });

  it('should return the planets array if OqOrdenar is empty', () => {
    expect(ordenaPlanets(planets, 'ASC', '')).toEqual(planets);
  });

  it('should return the planets array if OqOrdenar is invalid', () => {
    expect(ordenaPlanets(planets, 'ASC', 'invalid')).toEqual(planets);
  });
});
