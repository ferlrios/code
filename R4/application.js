let city = [
  "New_York",
  "Buenos _Aires",
  "London",
  "Paris",
  "Tokio",
  "Medellin",
  "El Cairo",
];

for (let x = 0; x <= 6; x++) {
  let config = {
    type: "get",
    url: `http://api.weatherstack.com/current?access_key=64fd70580336a2dab8c706b0ffefdb22&query=${city[x]}`,
    dataType: "json",
    success: (response) => {
      console.log(`Funciono ${response.location.name}`);
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

  $.ajax(config);
}
