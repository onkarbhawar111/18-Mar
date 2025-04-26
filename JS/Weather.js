let input = document.getElementById('input')
let btn = document.getElementById('btn')
let d1 = document.getElementById('d1')
let d2 = document.getElementById('d2')
let d3 = document.getElementById('d3')


async function getData(cityName){
    let city = input.value
    const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=e4a23b73add04f2c97042140240711&q=${city}&aqi=yes`)
    
    const response = await result.json()
    console.log(response)

    d1.innerText += response.location.name 
    d2.innerText += response.location.lat
    d3.innerText += response.current.temp_c
}

btn.addEventListener('click', getData)