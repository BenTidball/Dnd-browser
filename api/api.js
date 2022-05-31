import fetchClassInfo from "./classes.js";

async function fetchClasses() {
    let response = await fetch('https://www.dnd5eapi.co/api/classes/');
    let data = await response.json();

    data.results.forEach(element => {
        fetchClassInfo(element.index)
    });
}

export default fetchClasses;
