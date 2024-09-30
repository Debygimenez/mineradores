const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"


async function vizualizarInformacaoGlobais(){

const res = await fetch(url)
const dados = await res.json()
console.log(dados);

const paragrafo = document.createElement('p')
paggrafo.classList.add('graficos-container __texto')

paragrafo.innerHTML = 'Você sabia que o mundo tem'

console.log(paragrafo)


const container = document.getElementById("graficos.container")
conta
}

vizualizarInformacaoGlobais();