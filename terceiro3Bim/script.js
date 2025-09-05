const arroz = document.querySelector('#arroz');
const p = document.querySelector('p');
const input = document.querySelector('input');
const cachorro = document.querySelector(".cachorro")
const itens = document.querySelectorAll('li')
const listadegames = document.querySelector(listadegames)
const lista = document.querySelector(lista)


// arroz.addEventListener('click', () => {
//     alert('clicou no Euro Truck Simulator 2');
// });

// input.addEventListener('input', () => {
//     console.log('input alterado');
//     p.textContent = input.value;
// });

// document.addEventListener('mousemove', (event) => {
//     const r = Math.floor(Math.random() * (255));
//     const g = Math.floor(Math.random() * (255));
//     const b = Math.floor(Math.random() * (255));

//     cachorro.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//   });
  
itens.forEach(element => {
    itens.addEventListener('click', (ev) => {
        const alvo = ev.target
        const pai = avlo.parentElement
        if (pai === listadegames) {
            lista.appendchild(alvo)  
        }
        if (pai === lista) {
            listadegames.appendchild(alvo)
        }


    })
       
});