// fetch("https://66302735c92f351c03d923d2.mockapi.io/Animal", {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'Peter Parker',
//         age: 25,
//         race: 'Spider'
//     })
// })

// fetch("https://66302735c92f351c03d923d2.mockapi.io/Animal", {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'Totó',
//         age: 3,
//         race: 'Vira-lata'
//     })
// })
// .then(response => response.json())
// .then(data => adicionaNaLista(data))
// .catch(error => console.log("Meu erro: " + error));

function cadastraAnimal() {
    fetch("https://66302735c92f351c03d923d2.mockapi.io/Animal", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Totó',
            age: 3,
            race: 'Vira-lata'
        })
    })
}

fetch("https://66302735c92f351c03d923d2.mockapi.io/Animal")

    .then(response => response.json())
    .then(data => atualizaLista(data))
    .catch(error => console.log("Meu erro: " + error));

function atualizaLista(data) {

    let list = ''

    data.forEach(animal => {
        list += `<li> ${animal.id} - ${animal.name} (${animal.age}) - ${animal.race} </li>`;
        document.querySelector('#list').innerHTML = list;
    });
}

