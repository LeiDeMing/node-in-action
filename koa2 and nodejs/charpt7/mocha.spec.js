const should = require('chai').should();
const foo = 'bar';
const beverage = {
    tea: ['chai', 'matcha', 'oolong']
};
// describe('String',()=>{
//     it('foo should be a string',()=>{
//         foo.should.be.a('string')
//     })
// })
// describe('Array', () => {
//     describe('#indexOf()', () => {
//         it('should return -1 when the value is not present', () => {
//             beverage.tea.indexOf('puer').should.equal(-1);
//         })
//     })
// })
// describe('Asynchronous', () => {
//     it('done should be executed after 200ms', done => {
//         const fn = ()=>{
//             foo.should.be.a('string');
//             done();
//         }
//         setTimeout(fn,200)
//     })
// })
describe('Asynchronous', () => {
    it('promise', () => {
        return new Promise(resolve => {
            foo.should.be.a('string');
            resolve();
        })
    })
})