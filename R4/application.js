/* Definí un array con ciudades a consultar a la API */
let cities = [
  "New_York",
  "Buenos _Aires",
  "London",
  "Paris",
  "Tokio",
  "Medellin",
  "Toronto",
];
const infoCities = [];

/* Consulto los datos de las ciudades en la API y con un append los añado a la tabla*/
for (let x = 0; x < cities.length; x++) {
  let config = {
    type: "get",
    url: `http://api.weatherstack.com/current?access_key=5f572663dd5ecf9a1d27de7ec32010a6&query=${cities[x]}`,
    dataType: "json",
    success: (response) => {
      $("#table").append(`
      <tr>
      <td>${response.location.name}</td>
      <td>${response.location.country}</td>
      <td>${response.location.region}</td>
      <td>${response.current.temperature}</td>
      <td>${response.location.localtime}</td>
      `);
    },
    error: function () {
      alert("Fallo en el servidor, intentelo de nuevo más tarde.");
    },
  };

  /* En lugar de declarar el objeto dentro del parametro del método, lo hice antes en config y ahora lo llamo */
  $.ajax(config);
}
