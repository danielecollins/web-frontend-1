const citiesJSON = 'cities.json';

fetch(citiesJSON)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const cities = jsonObject['cities'];
        for (let i = 0; i < cities.length; i++) {
            let card = document.createElement('section');
            let text = document.createElement('div');
            let townName = document.createElement('h2');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let annualRainfall = document.createElement('p');
            let image = document.createElement('img');

            townName.textContent = cities[i].name;
            motto.textContent = cities[i].motto;
            motto.setAttribute('class', 'motto');
            yearFounded.textContent = `Year Founded: ${cities[i].yearfounded}`;
            population.textContent = `Population: ${cities[i].population}`;
            annualRainfall.textContent = `Annual Rainfall: ${cities[i].annualrainfall}`;
            
            image.setAttribute('src', cities[i].imagepath);
            image.setAttribute('alt', "picture of the outdoors");

            text.appendChild(townName);
            text.appendChild(motto);
            text.appendChild(yearFounded);
            text.appendChild(population);
            text.appendChild(annualRainfall);
            card.appendChild(text);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    })