const {
    assert,
    expect
} = require('chai');
const should = require('chai').should();
const foo = 'bar';
const beverage = {
    tea: ['chai', 'matcha', 'oolong']
};

assert.typeOf(foo,'string');
assert.typeOf(foo,'string','foo is string');
assert.equal(foo,'bar','foo equal bar');
assert.lengthOf(foo,3,'foo value has a length of 3');
assert.lengthOf(beverage.tea,3,'beverage has 3 type of tea');

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverage).to.have.property('tea').with.lengthOf(3);

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverage.should.have.property('tea').with.lengthOf(3);