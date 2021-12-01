// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should return a string with 3 exclamation points added to the end', (expect) => {
    const expected1 = 'puppy!!!';

    const actual1 = addExclamationPoints('puppy');

    expect.equal(actual1, expected1, 'should return "puppy!!!"');

    const expected2 = 'guppy!!!';

    const actual2 = addExclamationPoints('guppy');

    expect.equal(actual2,expected2, 'should return "guppy!!!"');
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});




test('multiplyBySeven() should take in a number and multiply it by seven', (expect) => {

    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual,expected,'should return 28');

})

test('multiplyBy12ThenHalve() should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {

    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual,expected,'should return 24')

})

test ('divideThenMultiply() This function should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {

    const expected = 10;

    const actual = divideThenMultiply(8,4,5);

    expect.equal(actual,expected,'should return 10');
});

test ('returnsAsAnArray() This function should take in three numbers and return those number in an array', (expect) => {
    const expected = [8, 4, 5] ;
    const actual = returnAsAnArray(8, 4, 5);
    expect.deepEqual(actual,expected,'should return 8,4,5')
})

test ('returnAsAString() This function should take in three numbers and return those numbers mushed together as a string', (except) =>{
    const expected = '845';
    const actual = returnAsAString(8, 4, 5);
    expect.equal(actual,expected,'should return "845"');
})