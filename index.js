import fetchClassInfo from "./api/api.js";

const searchBtn = document.querySelector('#search-btn')
searchBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    fetchClassInfo();
})

function resultTemplate(data){
    const result = document.createElement('div');
    result.className = "result";

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');

    para1.textContent = `Class: ${data.name}, hit die: ${data.hitDie}`;
    para2.textContent = `Starting gear: ${data.startingEquipment}`;

    result.appendChild(para1);
    result.appendChild(para2);

    const custom_style={
        border: "2px solid black",
        width: "50%",
        marginTop: "20px",
    }
    
    Object.assign(result.style,custom_style);
    document.body.appendChild(result);
}


export default resultTemplate;
