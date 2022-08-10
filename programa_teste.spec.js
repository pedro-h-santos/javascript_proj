const teste = require('./programa_teste');// cria uma constate "nome_const" e com o require importamos todas as funções exportadas no "module.exports"
// "() => {}" esse trecho por incrivel que pareça é uma função, chamada de => arroy function
describe('testes', () => {
    describe('testar fatorial',()=>{
        it('should call the fatorial function (n) times',()=>{
            const a = 9;
            const fat = jest.fn(()=>{
                teste.fatorial();
            });//MOCK
            const fatorial = teste.fatorial(a);
            expect(fat).toHaveBeenCalledTimes(362880)
        })
    })
    
    
    describe('testar soma', () => {
        it('should return 2+2', () => {    // a função "it" funciona igual a função "test"
            const a = 2;
            const b = 2;
            const result = 4;
            expect(teste.soma(a, b)).toBe(4)//espera-se que o resultado da função soma, seja o conteúdo da constante "result"
        })

        it('should return 3+5', () => {
            const a = 3;
            const b = 5;
            expect(teste.soma(a,b)).toBe(8)
        })
        
    })
});
