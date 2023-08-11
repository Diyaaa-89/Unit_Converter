let celciusInput = document.querySelector('#celcius > input')
let FahrenheitInput = document.querySelector('#Fahrenheit > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

/* Celcius to fahrenheit */

celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5))+32

    FahrenheitInput.value = roundNumber(fTemp)
})
/* fahrenheit to celcius */

FahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(FahrenheitInput.value)
    let cTemp = (fTemp-32)*(5/9)

    celciusInput.value = roundNumber(cTemp)
    FahrenheitInput.value = roundNumber(fTemp)
})

btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    FahrenheitInput.value = ""
})
