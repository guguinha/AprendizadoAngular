import {ConcessionariaInteface} from './ConcessionariaInterface'
import Carro from './Carro'

export default class Concessionaria implements ConcessionariaInteface{
    private endereco: string
    private listaDeCarros: Carro[]

    constructor(endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }

    public umMetodoAi() : string{
        return "qq coisa"
    }
}