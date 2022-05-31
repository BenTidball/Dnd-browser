function searchResults(search) {
    fetch('https://www.dnd5eapi.co/api/'+search)
    .then(response => response.json())
    .then(data => logTest(data))
}

function logTest(res){
    console.log(res);
}

const result = console.log(searchResults("races"));
