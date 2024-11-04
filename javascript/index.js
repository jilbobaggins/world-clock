function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );

    let newYorkElement = document.querySelector("#new-york");
    if (newYorkElement) {
      let newYorkDateElement = newYorkElement.querySelector(".date");
      let newYorkTimeElement = newYorkElement.querySelector(".time");
      let newYorkTime = moment().tz("America/New_York");

      newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
      newYorkTimeElement.innerHTML = newYorkTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );

      let honoluluElement = document.querySelector("#honolulu");
      if (honoluluElement) {
        let honoluluDateElement = honoluluElement.querySelector(".date");
        let honoluluTimeElement = honoluluElement.querySelector(".time");
        let honoluluTime = moment().tz("Pacific/Honolulu");

        honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do YYYY");
        honoluluTimeElement.innerHTML = honoluluTime.format(
          "h:mm:ss [<small>]A[</small>]"
        );

        let chicagoElement = document.querySelector("#chicago");
        if (chicagoElement) {
          let chicagoDateElement = chicagoElement.querySelector(".date");
          let chicagoTimeElement = chicagoElement.querySelector(".time");
          let chicagoTime = moment().tz("America/Chicago");

          chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
          chicagoTimeElement.innerHTML = chicagoTime.format(
            "h:mm:ss [<small>]A[</small>]"
          );
        }
      }
    }
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace(`_`, ` `).split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time" id="new-york">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html">All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
