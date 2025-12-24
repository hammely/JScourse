const city = {
    name: 'My city',
    population: 8000000
  };
  
  city.name = 'Dzerzhinsk';      // изменение свойства
  city.country = 'RUSSIA';         // добавление свойства
  delete city.population;       // удаление свойства
  
  console.log(city);
