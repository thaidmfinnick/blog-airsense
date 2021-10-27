const test = document.querySelector('.test');

const endpoint = "https://swapi.dev/api/people";

fetch(endpoint)
     .then((response) => response.json())
     .then((data) => {
        console.log(data.results);
        for (var i = 0; i < 10; i++){
            test.innerHTML += data.results[i].name + "<br>";
            
        }
        
});