const loadCountry =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then (data => displyCountry(data))
}


const displyCountry = countries =>{

    // for (const country of countries){
    //     console.log(country);
    // }
    const countryContainer = document.getElementById('country-container');
    countries.forEach (country =>{
        // console.log(country);
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML= `
        <h3>Name: ${country.name.common}</h3>
        <p>Offical : ${country.name.official}</p>
        <p>Capital : ${country.capital? country.capital[0] : 'No Capital'}</p>
        <button onclick="loadCountryClick('${country.cca2}')">Click Me</button>
        
        
        
        `;
        countryContainer.appendChild(countryDiv);
    }) 
}

const loadCountryClick =(code)=>{
    // https://restcountries.com/v3.1/alpha/{code}
    // console.log('get country delet',code)
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>loadCountryDetails(data[0]))
}

const loadCountryDetails = countrys=>{
    console.log(countrys);
    const countryDetail = document.getElementById('Country-detail')
    countryDetail.innerHTML=`
    <h2>Details : ${countrys.name.common}</h2>
    <img src="${countrys.flags.png}">
    
    `;
    // countryDetail.appendChild

}

loadCountry();