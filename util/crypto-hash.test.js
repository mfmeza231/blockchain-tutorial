const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('mezanet'))
            .toEqual('b099fc2656a1ab759263691a41ac0622a7c0fec8cbdbc36f9142e4043aabf83b');
    });

    it('produces the same hash with the same input arguments in any order', () => {
        expect(cryptoHash('one', 'two', 'three'))
            .toEqual(cryptoHash('three', 'two', 'one'));
    });
});