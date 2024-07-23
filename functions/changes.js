const currencySelectOne = document.querySelector(".currency-select-one")
const currencySelectTwo = document.querySelector(".currency-select-two")

export function changeCurrencyOne() {
    const currencyName = document.getElementById('currency-name-one')
    const currencyImage = document.querySelector('.currency-img-one')
    const currencyValueToConvert = document.querySelector(".currency-value-convert-one")

    if (currencySelectOne.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/logo-moedas-paises/lm-estados-unidos.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format()
    }

    if (currencySelectOne.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/logo-moedas-paises/lm-euro.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format()
    }

    if (currencySelectOne.value == "btc") {
        currencyName.innerHTML = "BTC"
        currencyImage.src = "./assets/logo-moedas-paises/lc-bitcoin.png"
    }

    if (currencySelectOne.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/logo-moedas-paises/lm-brasil.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format();
    }
}

export function changeCurrencyTwo() {
    const currencyName = document.getElementById('currency-name-two')
    const currencyImage = document.querySelector('.currency-img-two')

    if (currencySelectTwo.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/logo-moedas-paises/lm-estados-unidos.png"
    }

    if (currencySelectTwo.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/logo-moedas-paises/lm-euro.png"
    }

    if (currencySelectTwo.value == "btc") {
        currencyName.innerHTML = "BTC"
        currencyImage.src = "./assets/logo-moedas-paises/lc-bitcoin.png"
    }

    if (currencySelectTwo.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/logo-moedas-paises/lm-brasil.png"
    }
}

currencySelectOne.addEventListener("change", changeCurrencyOne)
currencySelectTwo.addEventListener("change", changeCurrencyTwo)
