API_KEY = "20e51c514e7d2302d08c595fc2d30833";

async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`
    );
    const data = await response.json();

    if (data && data.rates && data.rates[currencyCode]) {
      const rate = data.rates[currencyCode];
      return parseFloat(rate).toFixed(4); // Round to 4 decimal places
    } else {
      return null;
    }
  } catch (error) {
    throw new Error("Failed to fetch exchange rate");
  }
}

// Example usage
getExchangeRate("USD")
  .then((rate) => {
    console.log("Rate is " + rate); // Output: 1.2133
  })
  .catch((error) => {
    console.error(error);
  });
