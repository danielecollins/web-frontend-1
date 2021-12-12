const recentworkJSON = 'work.json';

fetch(recentworkJSON)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const partners = jsonObject['partners'];
        for (let i = 0; i < partners.length; i++) {
            let card = document.createElement('section');
            let text = document.createElement('div');
            let name = document.createElement('h3');
            let mrd = document.createElement('p');
            let ad = document.createElement('img');

            name.textContent = partners[i].name;
            mrd.textContent = partners[i].date;
            mrd.setAttribute('class', 'date');
            ad.setAttribute('src', 'images/' + partners[i].ads[0]);
            ad.setAttribute('alt', name + "Ad");

            text.appendChild(name);
            text.appendChild(mrd);
            card.appendChild(text);
            card.appendChild(ad);

            document.querySelector('div.cards').appendChild(card);
        }
    })