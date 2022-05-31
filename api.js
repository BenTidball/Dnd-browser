const playerClass = require('./classes');

async function fetchClasses() {
    let response = await fetch('https://www.dnd5eapi.co/api/classes/');
    let data = await response.json();

    data.results.forEach(element => {
        playerClass.fetchClassInfo(element.index)
    });
}

fetchClasses();
