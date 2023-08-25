
const produtosConsumidos = [
    {
        nome: "vinho",
        precoTotal: 2000,
        quantidade: 2
    },
    {
        nome: "petiscos",
        precoTotal: 5000,
        quantidade: 1
    },
    {
        nome: "água",
        precoTotal: 200,
        quantidade: 1
    }

]

const cartao = {
    nome: "Eva",
    idade: 27,
    produtosConsumidos
}
console.log(cartao.nome)
console.log(cartao.idade)

cartao.idade = 11
console.log(cartao.idade)
console.log(cartao.produtosConsumidos[0].nome)

let precoProdutos = 0

for (let produto of produtosConsumidos) {
    precoProdutos += produto.precoTotal * produto.quantidade
}

console.log(`Olá ${cartao.nome} a sua conta já está disponivel para pagamento
sendo um total de R$ ${(precoProdutos / 100).toFixed(2)} reais`)
