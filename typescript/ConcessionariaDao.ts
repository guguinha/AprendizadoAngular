import { Dao } from './Dao'
import Concessionaria from './Concessionaria'

class ConcessionariaDao implements Dao<Concessionaria> {
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
        console.log('logica insert')
        return true
    }
    atualizar(object: Concessionaria): boolean {
        console.log('logica update')
        return true
    }
    remover(id: number): Concessionaria {
        console.log('logica delete')
        return new Concessionaria('',[])
    }
    selecionar(id: number): Concessionaria {
        console.log('logica select')
        return new Concessionaria('',[])
    }
    selecionarTodos(): [Concessionaria] {
        console.log('logica select all')
        return [new Concessionaria('',[])]
    }

}