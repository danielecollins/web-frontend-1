const towndataJSON = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(towndataJSON)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++)
            if (towns[i].name === "Soda Springs" || towns[i].name === "Fish Haven" || towns[i].name === "Preston")
            {
                let card = document.createElement('section');
                let text = document.createElement('div');
                let townName = document.createElement('h2');
                let motto = document.createElement('p');
                let yearFounded = document.createElement('p');
                let population = document.createElement('p');
                let annualRainfall = document.createElement('p');
                let image = document.createElement('img');

                townName.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                motto.setAttribute('class', 'motto');
                yearFounded.textContent = `Year Founded: ${towns[i].yearFounded}`;
                population.textContent = `Population: ${towns[i].currentPopulation}`;
                annualRainfall.textContent = `Annual Rainfall: ${towns[i].averageRainfall}`; 
                image.setAttribute('src', 'images/' + towns[i].photo);
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