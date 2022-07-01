const lista = document.querySelector("ol");

const itensLista1 = lista.querySelectorAll("li")

itensLista1.forEach((elemento, idx) => {
    if((idx+1) % 2 === 0)
elemento.style.fontWeight = 900;

elemento.addEventListener("click", ()=> {
    console.log(elemento)
})


})

