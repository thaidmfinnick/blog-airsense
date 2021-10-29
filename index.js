const api = 'https://swapi.dev/api/people/?page=1';

fetch(api)
    .then((response) => response.json())
    .then((data) => {
        const people = data.results;
        const htmls = people.map(
            (item, index) => `
            <li class="people-item">
                <h3>${item.name}</h3>
                <p class="description-${index}"></p>
            </li>
        `
        );
        let html = htmls.join('');
        document.querySelector('.list-people').innerHTML = html;

        const peopleItem = document.querySelectorAll('.people-item');
        peopleItem.forEach((item, index) => {
            item.onclick = (event) => {
                const info = people.find(
                    (person) => person.name === item.innerText
                );

                people.forEach((person) => {
                    if (person.name === item.innerText) {
                        document.querySelector(
                            `.description-${index}`
                        ).innerText = `mass: ${info.mass}, gender: ${info.gender}, skin color: ${info.skin_color}`;
                    }
                });
            };
        });
    })
    .catch((error) => {
        alert('error');
    });
