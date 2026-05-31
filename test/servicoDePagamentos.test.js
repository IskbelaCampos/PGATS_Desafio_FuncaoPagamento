import ServicoDePagamentos from '../src/servicoDePagamentos.js';
import assert from 'node:assert';

describe('Validar serviço de Pagamento', () => {
    it('Validar que a propriedade categoria é identificada como cara quando o valor de pagamento é maior que 100.00', () => {
        // arrage
        const servicoDePagamento = new ServicoDePagamentos();

        // act
        servicoDePagamento.realizarPagamento('0079-8280-KO45', 'GoldEnergy', 150.00);
        const pagamentos = servicoDePagamento.consultarUltimoPagamento();
        const meuPagamento = pagamentos;

        // assert
        assert.equal(meuPagamento.CodigoDeBarra,'0079-8280-KO45');
        assert.equal(meuPagamento.Empresa,'GoldEnergy');
        assert.equal(meuPagamento.Valor, 150.00);
        assert.equal(meuPagamento.Categoria,'cara');
    });

     it('Validar que a propriedade categoria é identificada como padrão quando o valor de pagamento é menor que 100.00', () => {
        // arrage
        const servicoDePagamento = new ServicoDePagamentos();

        // act
        servicoDePagamento.realizarPagamento('0079-8280-KO45', 'GoldEnergy', 99.00);
        const pagamentos = servicoDePagamento.consultarUltimoPagamento();
        const meuPagamento = pagamentos;

        // assert
        assert.equal(meuPagamento.CodigoDeBarra,'0079-8280-KO45');
        assert.equal(meuPagamento.Empresa,'GoldEnergy');
        assert.equal(meuPagamento.Valor, 99.00);
        assert.equal(meuPagamento.Categoria,'padrão');
    });  
    
    
     it('Validar que a propriedade categoria é identificada como padrão quando o valor de pagamento é igual a 100.00', () => {
        // arrage
        const servicoDePagamento = new ServicoDePagamentos();

        // act
        servicoDePagamento.realizarPagamento('0079-8280-KO45', 'GoldEnergy', 100.00);
        const pagamentos = servicoDePagamento.consultarUltimoPagamento();
        const meuPagamento = pagamentos;

        // assert
        assert.equal(meuPagamento.CodigoDeBarra,'0079-8280-KO45');
        assert.equal(meuPagamento.Empresa,'GoldEnergy');
        assert.equal(meuPagamento.Valor, 100.00);
        assert.equal(meuPagamento.Categoria,'padrão');
    });   

     it('Validar que ultimo pagamento é retornado', () => {
        // arrage
        const servicoDePagamento = new ServicoDePagamentos();

        // act
        servicoDePagamento.realizarPagamento('0079-8280-KO45', 'GoldEnergy', 99.00);
        servicoDePagamento.realizarPagamento('8280-8HG0-KOPI', 'Americanas', 100.00);
        servicoDePagamento.realizarPagamento('1548-HYGF-58YT', 'Malu', 89.00);
        const pagamentos = servicoDePagamento.consultarUltimoPagamento();
        const meuPagamento = pagamentos;

        // assert
        assert.equal(meuPagamento.CodigoDeBarra,'1548-HYGF-58YT');
        assert.equal(meuPagamento.Empresa,'Malu');
        assert.equal(meuPagamento.Valor, 89.00);
        assert.equal(meuPagamento.Categoria,'padrão');
    })
})