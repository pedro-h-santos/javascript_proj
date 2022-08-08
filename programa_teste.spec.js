const soma = require('./programa_teste');
// "() => {}" esse trecho por incrivel que pareça é uma função, chamada de => arroy function
describe('testar soma',() => {
    it('should return soma', () => {
        const a = 2;
        const b = 2;
        const result = 4;
        expect(soma(a,b)).toBe(result)
    })        // a função "it" funciona igual a função "test"
} )