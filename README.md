# MongoDB queries

Este ejercicio se centra en realizar consultas a una base de datos MongoDB que gestiona información sobre restaurantes en la ciudad de Nueva York. Aquí encontrarás consultas para realizar diversas operaciones en la colección de restaurantes.

##### Trabajo del Sprint 5.4 de IT-Academy en la especialización de Node.js.

> [!IMPORTANT]  
> Asegúrate de tener una base de datos MongoDB en funcionamiento y una colección llamada [restaurants](./collections/restaurants.json) con los datos proporcionados antes de ejecutar estas consultas.

## Consultas para la colección restaurants

1. Muestra todos los restaurantes en la colección restaurants.

2. Muestra restaurant_id, name, borough y cuisine de todos los restaurantes en la colección restaurants.

3. Muestra restaurant_id, name, borough y cuisine, excluyendo el campo \_id de todos los restaurantes en la colección restaurants.

4. Muestra restaurant_id, name, borough y código postal, excluyendo el campo \_id de todos los restaurantes en la colección restaurants.

5. Muestra todos los restaurantes que están en el Bronx.

6. Muestra los primeros 5 restaurantes que están en el Bronx.

7. Muestra los 5 restaurantes después de saltar los primeros 5 que son del Bronx.

8. Muestra los restaurantes que tienen algún score mayor de 90.

9. Muestra los restaurantes que tienen un score mayor que 80 pero menos que 100.

10. Muestra los restaurantes que están situados en una longitud inferior a -95.754168.

11. Muestra los restaurantes de MongoDB que no cocinan comida 'Americana' y tienen algún score superior a 70 y longitud inferior a -65.754168.

12. Muestra los restaurantes que no preparan comida 'Americana', tienen algún score superior a 70 y, además, se localizan en longitudes inferiores a -65.754168. Nota: Realiza esta consulta sin utilizar el operador $and.

13. Muestra los restaurantes que no preparan comida 'Americana', tienen alguna nota 'A' y no pertenecen a Brooklyn. Deben mostrarse los documentos según la cocina en orden descendente.

14. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que contienen 'Wil' en las tres primeras letras de su nombre.

15. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que contienen 'ces' en las últimas tres letras de su nombre.

16. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que contienen 'Reg' en cualquier lugar de su nombre.

17. Muestra los restaurantes que pertenecen al Bronx y preparan platos americanos o chinos.

18. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que pertenecen a Staten Island, Queens, Bronx o Brooklyn.

19. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que NO pertenecen a Staten Island, Queens, Bronx o Brooklyn.

20. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que obtengan una nota menor que 10.

21. Muestra restaurant_id, name, borough y cuisine para aquellos restaurantes que preparan mariscos ('seafood'), excepto si son 'American ', 'Chinese' o el nombre del restaurante comienza con letras 'Wil'.

22. Muestra restaurant_id, name y grades para aquellos restaurantes que obtengan un grade de "A" y un score de 11 con un ISODate "2014-08-11T00:00:00Z".

23. Muestra restaurant_id, name y grades para aquellos restaurantes donde el segundo elemento del array de grados contiene un grade de "A" y un score de 9 con un ISODate "2014-08-11T00:00:00Z".

24. Muestra restaurant_id, name, dirección y ubicación geográfica para aquellos restaurantes donde el segundo elemento del array coord contiene un valor entre 42 y 52.

25. Muestra los restaurantes organizados por nombre en orden ascendente.

26. Muestra los restaurantes organizados por nombre en orden descendente.

27. Muestra los restaurantes organizados por el nombre de la cocina en orden ascendente y por el barrio en orden descendente.

28. Muestra si las direcciones contienen el nombre de la calle.

29. Muestra todos los documentos en la colección de restaurantes donde los valores del campo coord son de tipo Double.

30. Muestra restaurant_id, name y grade para aquellos restaurantes que devuelven 0 como residuo después de dividir alguno de sus scores por 7.

31. Muestra el nombre del restaurante, borough, longitud, latitud y cocina para aquellos restaurantes que contienen 'mon' en algún lugar de su nombre.

32. Muestra el nombre del restaurante, borough, longitud, latitud y cocina para aquellos restaurantes que contienen 'Mad' como las primeras tres letras de su nombre.

## Niveles de certificación

⭐ Nivel 1  
17 consultas correctas.

⭐⭐ Nivel 2  
Entre 17 y 25 consultas correctas.

⭐⭐⭐ Nivel 3  
Más de 25 consultas correctas

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE.md](./LICENSE.md) para más detalles.
