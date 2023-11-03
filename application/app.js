document.addEventListener("DomContentLoaded", ()=>{
    initApp();
})

function initApp(){
    suma();
}

function suma(){
    const numUno = Number(prompt ("Ingrese primer Valor"))
    const numDos = Number(prompt ("Ingrese segundo Valor"))
    const sumatoria = numUno + numDos
    return document.write(sumatoria)
}

