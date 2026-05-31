export default class ServicoDePagamentos{
    #pagamentos

    constructor() {
        this.#pagamentos = [];
    }

    realizarPagamento(codigoDeBarra, empresa, valor){
        let categoria;
        if (valor > 100.00){
            categoria = 'cara'
        }else{
            categoria = 'padrão'
        }

        this.#pagamentos.push({
            CodigoDeBarra: codigoDeBarra,
            Empresa: empresa,
            Valor: valor,
            Categoria: categoria ,
        })
    }
    consultarUltimoPagamento(){
        return this.#pagamentos.at(-1)
    }
}