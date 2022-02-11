const axios = require('axios');
// Learn Async and Await 

// APIs
// Exchange Rate:
// Countries


// 1st Function - getExchangeRate
// arrow function, convert to async using keyword. Use await to wait data synchronously. 
// Once we achieve data from server, it obeys until right data is recieved 
const getExchangeRate = async (fromCurrency, toCurrency) => {
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1')
    const rate = response.data.rates;
    const euro = 1 / rate[fromCurrency]
    const exchangeRate = euro * rate[toCurrency]
    
    // error handling
    if(isNaN(exchangeRate)) {
        throw new Error (`Unable to get currency ${fromCurrency} and ${toCurrency}`)
    }

    return exchangeRate;
}

// 2nd Function = getCountries
const getCountries = async (toCurrency) => {
    try {
        const response = await axios.get(`https://restcountries.com/v2/currency/${toCurrency}`)
    
        return response.data.map(country => country.name)
     
    } catch(error) {
        throw new Error(`Unable to get countries that use ${toCurrency}`)

    }
   

}
// 3rd Function = convertCurrency 
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    const countries = await getCountries(toCurrency);
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries ${countries}`

}

// Call convert currency to get meaningful data
// getExchangeRate('USD', 'EUR') // converting from base currency Euro
// getCountries('USD')
convertCurrency('USD', 'CAD', 30).
then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error.message)
})

// Adding comments 
