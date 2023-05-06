const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
}

const displayQuotes = quote => {
    const blockQuote = document.getElementById('quotes')
    console.log(quote);
    blockQuote.innerHTML = quote.quote
}
loadQuotes()