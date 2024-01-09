// 1. Muestra todos los restaurantes en la colección restaurants.
db.restaurants.find();

// 2. Muestra restaurant_id, name, borough y cuisine de todos los restaurantes en la colección restaurants.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });

// 3. Muestra restaurant_id, name, borough y cuisine, excluyendo el campo \_id de todos los restaurantes en la colección restaurants.
db.restaurants.find(
  {},
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 4. Muestra restaurant_id, name, borough y código postal, excluyendo el campo \_id de todos los restaurantes en la colección restaurants.
db.restaurants.find(
  {},
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, 'address.zipcode': 1 }
);

// 5. Muestra todos los restaurantes que están en el Bronx.
db.restaurants.find({ borough: 'Bronx' });

// 6. Muestra los primeros 5 restaurantes que están en el Bronx.
db.restaurants.find({ borough: 'Bronx' }).limit(5);

// 7. Muestra los 5 restaurantes después de saltar los primeros 5 que son del Bronx.
db.restaurants.find({ borough: 'Bronx' }).skip(5).limit(5);

// 8. Muestra los restaurantes que tienen algún score mayor de 90.+
db.restaurants.find({ 'grades.score': { $gt: 90 } });

// 9. Muestra los restaurantes que tienen un score mayor que 80 pero menos que 100.
db.restaurants.find({ 'grades.score': { $gt: 80, $lt: 100 } });

// 10. Muestra los restaurantes que están situados en una longitud inferior a -95.754168.
db.restaurants.find({ 'address.coord.0': { $lt: -95.754168 } });

// 11. Muestra los restaurantes de MongoDB que no cocinan comida 'Americana' y tienen algún score superior a 70 y longitud inferior a -65.754168.
db.restaurants.find({
  cuisine: { $ne: 'American ' },
  'grades.score': { $gt: 70 },
  'address.coord.0': { $lt: -65.754168 },
});

// 12. Muestra los restaurantes que no preparan comida 'Americana', tienen algún score superior a 70 y, además, se localizan en longitudes inferiores a -65.754168. Nota: Realiza esta consulta sin utilizar el operador $and.
db.restaurants.find({
  cuisine: { $ne: 'American ' },
  'grades.score': { $gt: 70 },
  'address.coord.0': { $lt: -65.754168 },
});

// 13. Muestra los restaurantes que no preparan comida 'Americana', tienen alguna nota 'A' y no pertenecen a Brooklyn. Deben mostrarse los documentos según la cocina en orden descendente.
// prettier-ignore
db.restaurants.find({
    cuisine: { $ne: 'American ' },
    'grades.grade': 'A',
    borough: { $ne: 'Brooklyn' },
  }).sort({ cuisine: -1 });

// 14. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que contienen 'Wil' en las tres primeras letras de su nombre.
db.restaurants.find(
  { name: { $regex: '^Wil' } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 15. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que contienen 'ces' en las últimas tres letras de su nombre.
db.restaurants.find(
  { name: { $regex: 'ces$' } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 16. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que contienen 'Reg' en cualquier lugar de su nombre.
db.restaurants.find(
  { name: { $regex: 'Reg' } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 17. Muestra los restaurantes que pertenecen al Bronx y preparan platos americanos o chinos.
db.restaurants.find(
  { borough: 'Bronx', cuisine: { $in: ['American ', 'Chinese'] } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 18. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que pertenecen a Staten Island, Queens, Bronx o Brooklyn.
db.restaurants.find(
  { borough: { $in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 19. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que NO pertenecen a Staten Island, Queens, Bronx o Brooklyn.
db.restaurants.find(
  { borough: { $nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 20. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que obtengan una nota menor que 10.
db.restaurants.find(
  { 'grades.score': { $lt: 10 } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 21. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que preparan mariscos ('seafood'), excepto si son 'American ', 'Chinese' o el nombre del restaurante comienza con letras 'Wil'.
db.restaurants.find(
  {
    cuisine: 'Seafood',
    name: { $not: /^Wil/ },
    $or: [{ cuisine: { $nin: ['American ', 'Chinese'] } }, { name: /^Wil/ }],
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 22. Muestra restaurant_id, name y grades para aquellos restaurantes que obtengan un grade de "A" y un score de 11 con un ISODate "2014-08-11T00:00:00Z".
db.restaurants.find(
  {
    'grades.grade': 'A',
    'grades.score': 11,
    'grades.date': ISODate('2014-08-11T00:00:00Z'),
  },
  { restaurant_id: 1, name: 1, grades: 1 }
);

// 23. Muestra restaurant_id, name y grades para aquellos restaurantes donde el segundo elemento del array de grados contiene un grade de "A" y un score de 9 con un ISODate "2014-08-11T00:00:00Z".
db.restaurants.find(
  {
    'grades.1.grade': 'A',
    'grades.1.score': 9,
    'grades.1.date': ISODate('2014-08-11T00:00:00Z'),
  },
  { restaurant_id: 1, name: 1, grades: 1 }
);

// 24. Muestra restaurant_id, name, dirección y ubicación geográfica para aquellos restaurantes donde el segundo elemento del array coord contiene un valor entre 42 y 52.
db.restaurants.find(
  {
    'address.coord.1': { $gte: 42, $lte: 52 },
  },
  { restaurant_id: 1, name: 1, 'address.coord': 1 }
);

// 25. Muestra los restaurantes organizados por nombre en orden ascendente.
db.restaurants.find().sort({ name: 1 });

// 26. Muestra los restaurantes organizados por nombre en orden descendente.
db.restaurants.find().sort({ name: -1 });

// 27. Muestra los restaurantes organizados por el nombre de la cocina en orden ascendente y por el barrio en orden descendente.
db.restaurants.find().sort({ cuisine: 1, borough: -1 });

// 28. Muestra si las direcciones contienen el nombre de la calle.
db.restaurants.find({ 'address.street': { $exists: true } });

// 29. Muestra todos los documentos en la colección de restaurantes donde los valores del campo coord son de tipo Double.
db.restaurants.find({ 'address.coord': { $type: 'double' } });

// 30. Muestra restaurant_id, name y grade para aquellos restaurantes que devuelven 0 como residuo después de dividir alguno de sus scores por 7.
db.restaurants.find(
  { 'grades.score': { $mod: [7, 0] } },
  { restaurant_id: 1, name: 1, grades: 1 }
);

// 31. Muestra el nombre del restaurante, borough, longitud, latitud y cocina para aquellos restaurantes que contienen 'mon' en algún lugar de su nombre.
db.restaurants.find(
  { name: { $regex: 'mon', $options: 'i' } },
  { name: 1, borough: 1, 'address.coord': 1, cuisine: 1 }
);

// 32. Muestra el nombre del restaurante, borough, longitud, latitud y cocina para aquellos restaurantes que contienen 'Mad' como las primeras tres letras de su nombre.
db.restaurants.find(
  { name: { $regex: '^Mad' } },
  { name: 1, borough: 1, 'address.coord': 1, cuisine: 1 }
);
