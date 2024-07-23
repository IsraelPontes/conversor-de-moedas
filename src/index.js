import division from '../functions/calculation.js'
import { changeCurrencyOne, changeCurrencyTwo } from '../functions/changes.js'
import { data } from '../server/server.js'

const convertButton = document.querySelector(".convert-button")
const currencySelectOne = document.querySelector(".currency-select-one")
const currencySelectTwo = document.querySelector(".currency-select-two")

function convertToNumber(value) {
    let convertedValue = value.replace(',', '.');
    return parseFloat(convertedValue)
}

async function convertertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valueBRL = convertToNumber(inputCurrencyValue);

    const currencyValueToConvert = document.querySelector(".currency-value-convert-one")
    const currencyValueConverted = document.querySelector(".currency-value")
    const frontCurrency = currencySelectOne.value.toUpperCase()
    const dataApi = await data

    const rates = {
        BRL: 1,
        USD: parseFloat(dataApi.USDBRL.bid),
        EUR: parseFloat(dataApi.EURBRL.bid),
        BTC: parseFloat(dataApi.BTCBRL.bid)
    }

    console.log(valueBRL)
    console.log(currencyValueToConvert)
    console.log(currencyValueConverted)
    console.log(frontCurrency)
    console.log(dataApi)
    console.log(rates)
    console.log(division(rates.BRL, rates.EUR))
   

    // if (currencySelectOne.value == "dolar") {
    //     if (valueBRL > "") {

    //         currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
    //             style: "currency",
    //             currency: "USD"
    //         }).format()

    //         rates.USD * valueBRL
    //     }
    // }

    // if (currencyValueConverted = "") {
    //     currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
    //         style: "currency",
    //         currency: "BRL"
    //     }).format(valueBRL);
    // }
}

changeCurrencyOne()
changeCurrencyTwo()

convertButton.addEventListener("click", convertertValues)


