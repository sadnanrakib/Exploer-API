const loadQouat = ()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data => displyQuote(data))
}

const displyQuote= quote =>{
    const div = document.getElementById('get-list');
    console.log(quote);
    div.innerText=quote.quote;
    // console.log(qoute)
}

// loadQouat()