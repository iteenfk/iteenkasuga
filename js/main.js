"use strict"

function getCountryInfo() {
  const languageCode = document.getElementById("language-select").value;
  const url = `https://restcountries.com/v2/lang/${languageCode}?fields=name,capital,population,flag,area,currencies,languages,timezones`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.status === 404) {
        throw new Error('国情報が見つかりませんでした。');
      }
      const randomCountryIndex = Math.floor(Math.random() * data.length);
      const country = data[randomCountryIndex];
      const name = country.name;
      const capital = country.capital;
      const population = country.population;
      const flag = country.flag;
      const area = country.area;
      const currency = country.currencies[0]?.name ?? '';
      const languageName = country.languages[0]?.name ?? '';
      const timezones = country.timezones.join(", ");
      const countryDiv = document.getElementById("country-info");
      countryDiv.innerHTML = `
        <br>
        <h2>${name}</h2>
        <p>首都: ${capital}</p>
        <p>人口: ${population}</p>
        <p>面積: ${area} km²</p>
        <p>通貨: ${currency}</p>
        <p>公用語: ${languageName}</p>
        <p>標準時: ${timezones}</p>
        <br>
        <img src="${flag}" alt="${name}の国旗" width="100">
      `;
    })
    .catch(error => console.error(error));
}
