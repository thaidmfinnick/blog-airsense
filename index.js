const api = 'https://swapi.dev/api/people/?page=1';

fetch(api)
    .then((response) => response.json())
    .then((data) => {
        const people = data.results;
        const htmls = people.map(
            (item,index) => `
            <li>
                <h3>${index+1}: ${item.name}</h3>
            </li>
        `
        );
        let html = htmls.join('');
        document.querySelector('.list-people').innerHTML = html;
    })
    .catch((error) => {
        alert('error');
    });
