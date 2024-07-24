import { coins, criptos } from '../server/dataCoins.js'

const currencySelectOne = document.querySelector(".currency-select-one")
const currencySelectTwo = document.querySelector(".currency-select-two")
const srcImage = "./assets/logo-moedas-paises/"
const values = 0.00

export function changeCurrencyOne() {
    const currencyName = document.getElementById('currency-name-one')
    const currencyImage = document.querySelector('.currency-img-one')
    const currencyValueToConvert = document.querySelector(".currency-value-convert-one")
    const idOne = currencySelectOne.value

    if (idOne === "BTC") {
        criptos.forEach(cripto => {
            if (cripto.id === idOne) {
                currencyName.innerHTML = cripto.name
                currencyImage.src = srcImage + cripto.soon
                currencyValueToConvert.innerHTML = cripto.symbol + new Intl.NumberFormat(cripto.format, {
                    style: 'decimal',
                    currency: 'BTC',
                    minimumFractionDigits: 8,
                    maximumFractionDigits: 8
                }).format(values)
            }
        })
    } else {
        coins.forEach(coin => {
            if (coin.id === idOne) {
                currencyName.innerHTML = coin.name
                currencyImage.src = srcImage + coin.soon
                currencyValueToConvert.innerHTML = new Intl.NumberFormat(coin.format, {
                    style: "currency",
                    currency: coin.currency
                }).format(values)
            }
        })
    }
}

export function changeCurrencyTwo() {
    const currencyName = document.getElementById('currency-name-two')
    const currencyImage = document.querySelector('.currency-img-two')
    const currencyValueToConvert = document.querySelector(".currency-value-convert-two")
    const idTwo = currencySelectTwo.value

    if (idTwo === "btc") {
        criptos.forEach(cripto => {
            if (cripto.id === idTwo) {
                currencyName.innerHTML = cripto.name
                currencyImage.src = srcImage + cripto.soon
                currencyValueToConvert.innerHTML = cripto.symbol + new Intl.NumberFormat(cripto.format, {
                    style: 'decimal',
                    currency: 'BTC',
                    minimumFractionDigits: 8,
                    maximumFractionDigits: 8
                }).format(values)
            }
        })
    } else {
        coins.forEach(coin => {
            if (coin.id === idTwo) {
                currencyName.innerHTML = coin.name
                currencyImage.src = srcImage + coin.soon
                currencyValueToConvert.innerHTML = new Intl.NumberFormat(coin.format, {
                    style: "currency",
                    currency: coin.currency
                }).format(values)
            }
        })
    }
}

currencySelectOne.addEventListener("change", changeCurrencyOne)
currencySelectTwo.addEventListener("change", changeCurrencyTwo)
