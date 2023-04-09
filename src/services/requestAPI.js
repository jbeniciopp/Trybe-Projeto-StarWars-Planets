const requestAPI = async () => {
  try {
    const api = await fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((data) => data.results);

    api.map((e) => {
      delete e.residents;
      return e;
    });
    return api;
  } catch (error) {
    return console.log(error);
  }
};

export default requestAPI;
