import Carro  from './Carro'
import Pessoa  from'./Pessoa'
import Concessionaria from './Concessionaria'

/* --- criar carros --- */
let carroA = new Carro('dodge journey', 4)
let carroB = new Carro('veloster', 3)
let carroC = new Carro('cerato', 4)

/* --- montar a lista de carros da concessionaria --- */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]
let concessionaria = new Concessionaria('Rua da falesia, 236', listaDeCarros)

/* --- exibir lista de carros ---*/
console.log(concessionaria.mostrarListaDeCarros())

/* --- comprar carro ---*/
let cliente = new Pessoa('João', 'veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {

        //comprar o carro
        cliente.comprarCarro(carro)
    }

})

console.log(cliente.dizerCarroQueTem())