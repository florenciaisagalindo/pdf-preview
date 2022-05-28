document.querySelector('#pdfFile').addEventListener('change', ()=>{
    let pdfFile= document.querySelector('#pdfFile').files[0];
    let pdfFileURL = URL.createObjectURL(pdfFile)+'#toolbar=0';
    document.querySelector('#embed').setAttribute('src', pdfFileURL)
})
let pdfFile= document.querySelector('#pdfFile').files[0];

const elemento = document.querySelector(pdfFile);
document.querySelector('#btn-copy').addEventListener('click', ()=>{
    copyTo(elemento)
})
function copyTo(elemento) {
    const inputOculto = document.createElement('input');
    inputOculto.setAttribute('value', elemento.innerText);
    document.body.appendChild(inputOculto);
    inputOculto.select();
    document.execCommand('copy');
}

