const cityTitle = document.querySelector("#city_title");
const tempeture = document.querySelector("#tempeture");
const status = document.querySelector("#status");
const imgClimaPartial = document.querySelector('.img_clima_partial');
const imgClima = document.querySelector(".img_clima");


async function getTemperatures() {

    const apiURL = ('http://api.weatherapi.com/v1/current.json?key=0254d46490d54ecea22230611232102&q=Brazil&aqi=no');

    try {
        const response = await fetch(apiURL);
        let res = await response.json();

        const card = document.createElement('div');
        const newTitle = document.createElement('h1');
        const newTemperature = document.createElement('h1');
        const newStatus = document.createElement('p');
        const newImg = document.createElement('img');

        newTitle.id = "city_title";
        newTemperature.id = "tempeture";
        newStatus.id = "status";
        card.id = "card";
        newImg.id = "img_clima_s";

        newTitle.textContent = res.location.country;
        newTemperature.textContent = res.current.feelslike_c;
        newStatus.textContent = res.current.condition.text;
        newImg.src = res.current.condition.icon

        card.append(newImg, newTitle, newTemperature, newStatus)

        document.querySelector('#card').append(card)

        /*
            IMAGES CONDITIONS
        */
        if (res.current.condition.text === "Partly cloudy") {
            imgClimaPartial.classList.remove('img_clima_partial')
            imgClima.classList.add('img_clima-invisible')
        } else {

            imgClimaPartial.classList.add('img_clima_partial-visible')
        }

        console.log(res);
    } catch (error) {
        console.log(error);
    }
}


getTemperatures()