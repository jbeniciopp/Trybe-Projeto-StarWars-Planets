const ordenaPlanets = (planets, ordenacao, OqOrdenar) => {
  if (ordenacao === '') {
    console.log(planets);
    return planets;
  }

  const um = 1;
  const mUm = -1;

  const orderFunc = () => {
    if (ordenacao === 'ASC') {
      return um;
    }
    if (ordenacao === 'DESC') {
      return mUm;
    }
  };

  const order = orderFunc();

  const compare = (a, b) => {
    const propA = parseFloat(a[OqOrdenar]);
    const propB = parseFloat(b[OqOrdenar]);

    if (propA < propB) {
      return mUm * order;
    }
    if (propA > propB) {
      return um * order;
    }
    return 0;
  };

  console.log('final');

  return planets.sort(compare);
};

export default ordenaPlanets;
