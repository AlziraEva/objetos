
const dados = {
    nome: "Alzira",
    idade: 27,
    altura: 1.59,
    CNH: false,
    apelido: ["Eva", "Zirinha", "Evinha"]

}

const textoApelido = dados.CNH ? "Possui CNH" : "Não possui CNH"

console.log(`${dados.nome} tem ${dados.idade} anos, altura de ${dados.altura}, ${textoApelido} e os 
seguintes apelidos: `)

for (let dado of dados.apelido) {
    console.log(`- ${dado}`)
}