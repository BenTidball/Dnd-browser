import fetchClassInfo from "./api/api.js";

const searchBtn = document.querySelector('#search-btn')

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    fetchClassInfo();
})

function resultTemplate(data){
    const result = document.createElement('div');
    result.className = "resultBox";

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');

    para1.textContent = `Class: ${data.name}, hit die: ${data.hitDie}`;
    para2.textContent = `Starting gear: ${data.startingEquipment}`;

    result.appendChild(para1);
    result.appendChild(para2);
    
    document.querySelector('#result-display').appendChild(result);
}


export default resultTemplate;
