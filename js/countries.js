const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))

}

const displayCountries = countries => {
    const allCountries = document.getElementById('all-countries')
    console.log(countries);
    countries.forEach(country => {
        console.log(country.cca2);
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
        <h2>Name: ${country.name.common} </h2>
        <p> Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <button onclick = "loadCountryCode('${country.cca2}')">Details</button>
        `
        allCountries.appendChild(countryDiv)
    });
}
const loadCountryCode = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => showCountryDetails(data[0]))
}

const showCountryDetails = country => {
    console.log(country);
    document.getElementById('country-details').innerHTML = `
        <h3> Name: ${country.name.common} </h3>
        <img src= "${country.flags.png}">
        `
}
loadCountries()