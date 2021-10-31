const test = document.querySelector('.test');

const endpoint = "https://swapi.dev/api/people";

fetch(endpoint)
     .then((response) => response.json())
     .then((data) => {
        console.log(data.results);
        for (i = 0; i<10; i++){
        
        document.write('<div class="dropdown">' + '<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' + data.results[i].name + '</button>' + '<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">' + '<li><a class="dropdown-item" href="#">' + data.results[i].height + '</a></li>' + '<li><a class="dropdown-item" href="#">' + data.results[i].hair_color + '</a></li>' + '<li><a class="dropdown-item" href="#">' + data.results[i].mass + '</a></li>' + '</ul>' + '</div>')
        }
});



