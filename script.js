const url = 'https://dog.ceo/api/breed/husky/images/random';

const fotoAleatoHusky = document.getElementById('fotoAleatoHusky')
const btnNovoHusky = document.getElementById('btnNovoHusky')

async function BuscarFoto() {

    const resposta = await fetch(url)

    const dados = await resposta.json()

    console.log(dados)

    fotoAleatoHusky.scr = dados.message;
    
}

btnNovoHusky.addEventListener('click', BuscarFoto)

BuscarFoto();