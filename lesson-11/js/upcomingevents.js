const towndataJSON = 'https://byui-cit230.github.io/weather/data/towndata.json';

console.log(document.querySelector('h2').textContent)

fetch(towndataJSON)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++)
            if (towns[i].name === document.querySelector('.active').textContent)
                for (let x = 0; x < towns[i].events.length; x++)
                {
                    let event = document.createElement('p');
                    event.textContent = towns[i].events[x];
                    document.getElementById('events').appendChild(event);
                }
    })