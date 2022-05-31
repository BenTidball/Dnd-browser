import fetchClassInfo from "./api/api.js";

function resultTemplate(data){
    const result = document.createElement('div');
    result.className = "result";

    const para = document.createElement('p');
    para.textContent = data.name;

    result.appendChild(para);
    document.body.appendChild(result);
}

fetchClassInfo();

export default resultTemplate;
