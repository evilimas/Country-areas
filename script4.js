const countries = [
    {
      name: 'Lietuva',
      area: 65300,
      population: 2801289 
    },
    {
      name: 'Latvija',
      area: 64589,
      population: 1926542
    },
    {
      name: 'Lenkija',
      area: 312696,
      population: 38413000
    },
    {
      name: 'Norvegija',
      area: 385252,
      population: 5452404
    },
    {
      name: 'Rusija',
      area: 17125191,
      population: 146748590
    }
  ];
  
  function calculateAreaPerCapita(country) {
    return (country.area * 1000000 / country.population).toFixed(2);
  }
  
  for (const country of countries) {
    console.log(
      'Šalis: ' + country.name + ', joje gyvena ' + country.population.toLocaleString() + ' gyventojų.' +
      ' Valstybės plotas: ' + country.area + ' km², plotas tenkantis vienam gyventojui: ' + calculateAreaPerCapita(country) + ' m².'
    );
  }
  