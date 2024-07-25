import { changeCurrencyOne, changeCurrencyTwo } from './functions/changes.js'
import { coins, criptos } from './server/dataCoins.js'
import { division, multiplication } from './functions/calculation.js'
import { data } from './server/server.js'

const convertButton = document.querySelector(".convert-button")
const currencySelectOne = document.querySelector(".currency-select-one")
const currencySelectTwo = document.querySelector(".currency-select-two")

function convertToNumber(value) {
    let convertedValue = value.replace(',', '.');
    return parseFloat(convertedValue)
}

async function convertertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValues = convertToNumber(inputCurrencyValue);

    let valueToConvertOne = document.querySelector(".currency-value-convert-one")
    let valueToConvertTwo = document.querySelector(".currency-value-convert-two")
    const idOne = currencySelectOne.value
    const idTwo = currencySelectTwo.value
    const dataApi = await data

    const rates = {
        BRL: 1.00,
        USD: parseFloat(dataApi.USDBRL.bid),
        EUR: parseFloat(dataApi.EURBRL.bid),
        BTC: parseFloat(dataApi.BTCBRL.bid)
    }

    const rateKey = Object.keys(rates)


    if (idOne == "BTC") {
        rateKey.forEach((prices) =>
            criptos.forEach(cripto => {
                const price = rates[prices]
                if (prices === idOne) {

                    if (idOne === idTwo) {
                        valueToConvertOne.innerHTML = currencyValues
                        valueToConvertTwo.innerHTML = currencyValues
                        console.log("Passou aqui 001")
                    } else {
                        valueToConvertTwo = division(currencyValues, price)
                        console.log("Passou aqui 002")
                        console.log(currencyValues)
                        console.log(prices, idOne)
                        console.log(price)
                        console.log(valueToConvertTwo)
                    }
                }
            }))
    } else {

        let coinResultOne
        let ratesValueOne
        let resultOne
        let valueRatesOne

        coins.forEach(coin => {
            const dataCoin = coin.id
            if (idOne === dataCoin) {
                rateKey.forEach(prices => {
                    if (prices === coin.codein) {
                        ratesValueOne = rates[prices]
                        if (prices === "BRL") {
                            coinResultOne = multiplication(currencyValues, ratesValueOne)
                        } else {
                            coinResultOne = currencyValues
                        }

                        resultOne = coinResultOne
                        valueRatesOne = ratesValueOne

                        valueToConvertOne.innerHTML = new Intl.NumberFormat(coin.format, {
                            style: "currency",
                            currency: coin.currency
                        }).format(coinResultOne)

                    }
                })
            }
        })

        coins.forEach(coin => {
            const dataCoin = coin.id
            if (idTwo === dataCoin) {
                rateKey.forEach(prices => {
                    if (prices === coin.codein) {
                        const ratesValueTwo = rates[prices]
                        const coinResultM = multiplication(currencyValues, valueRatesOne)
                        const coinResultC = currencyValues
                        if (prices === "BRL") {
                            coinResultM
                        } else {
                            coinResultC
                        }
                        const coinResultTwo = division(coinResultM, ratesValueTwo)
                        valueToConvertTwo.innerHTML = new Intl.NumberFormat(coin.format, {
                            style: "currency",
                            currency: coin.currency
                        }).format(coinResultTwo)
                    }
                })
            }
        })
    }
}

changeCurrencyOne()
changeCurrencyTwo()

convertButton.addEventListener("click", convertertValues)