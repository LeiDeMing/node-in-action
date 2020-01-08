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
describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            beverage.tea.indexOf('puer').should.equal(-1);
        })
    })
})