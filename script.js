fetch(`https://restcountries.eu/rest/v2/all`)
    .then(Response => Response.json())
    .then(data => country(data))


const country = countries => {
    const countriesDiv = document.getElementById("countries");

    countries.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.className = 'country'
        const countryInfo = `
         <img class='img' src="${country.flag}" alt="">
         <h3 class='country-name'>${country.name}</h3>
         <button class="button" onclick="countryDetails('${country.name}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv)
    });
}
const countryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => info(data[0]))
    document.getElementById("countries").style.display = "none"
    document.getElementById("countryInfoDetails").style.display = "block"
}
const info = country => {
    console.log(country)
    const div = document.getElementById("countryInfoDetails");
    div.innerHTML = `
       <h3 class='country-name'>Name:${country.name}</h3>
       <img class='img' src="${country.flag}" alt="">
       <h3 class='country-Name'>Population:${country.population}</h3>
       <h3 class='country-Name'>Area:${country.area}</h3>
       <h3 class='country-Name'>Region:${country.region}</h3>
       <h3 class='country-Name'>Subregion:${country.subregion}</h3>
       <button id="Back">Back</button>
       `
    const back = document.getElementById("Back");
    back.addEventListener('click', function () {

        document.getElementById("countries").style.display = "block"
        document.getElementById("countryInfoDetails").style.display = "none"
    })

}


    // for (let i = 0; i < countries.length; i++) {
    //     const countryName = countries[i];
    //     console.log(countryName)
    //     const countryDiv = document.createElement('div')
    //     countryDiv.className = 'country'
    //     const countryInfo = `
    //      <h3 class='country-name'>${countryName.name}</h3>
    //      <img class='img' src="${countryName.flag}" alt="">
    //      <p>${countryName.capital}</p>
    //     `
    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv)

    // }