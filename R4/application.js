/* Definí un array con ciudades a consultar a la API */
let city = [
  "New_York",
  "Buenos _Aires",
  "London",
  "Paris",
  "Tokio",
  "Medellin",
  "Toronto",
];

/* Con un for recorremos el array pegandole a la API y trayendo a nuestra tabla (a través de la id de los <tr>) los datos. */
for (let x = 0; x <= 6; x++) {
  let config = {
    type: "get",
    url: `http://api.weatherstack.com/current?access_key=64fd70580336a2dab8c706b0ffefdb22&query=${city[x]}`,
    dataType: "json",
    success: (response) => {
      $(`#row${x}>td:nth-child(1)`).html(`${response.location.name}`);
      $(`#row${x}>td:nth-child(2)`).html(`${response.location.country}`);
      $(`#row${x}>td:nth-child(3)`).html(`${response.location.region}`);
      $(`#row${x}>td:nth-child(4)`).html(`${response.current.temperature}°`);
      $(`#row${x}>td:nth-child(5)`).html(`${response.location.localtime}`);
    },
    error: function () {
      alert("Fallo en el servidor, intentelo de nuevo más tarde.");
    },
  };

  /* En lugar de declarar el objeto dentro del parametro del método, lo hice antes en config y ahora lo llamo */
  $.ajax(config);
}
