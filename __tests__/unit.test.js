// unit.test.js

const { exportAllDeclaration } = require('@babel/types');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('checking if (858)555-1234 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(858)555-1234')).toBe(true);
});

test('checking if (123)456-789 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});

test('checking if 123 is a valid phone number', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
});

test('checking if qwerty is a valid phone number', () => {
    expect(functions.isPhoneNumber('qwerty')).toBe(false);
});

// isEmail
test('checking if bob@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('bob@ucsd.edu')).toBe(true);
});

test('checking if abcd1234@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('abcd1234@ucsd.edu')).toBe(true);
});

test('checking if @ucsd.edu is a valid email', () => {
    expect(functions.isEmail('@ucsd.edu')).toBe(false);
});

test('checking if @.edu is a valid email', () => {
    expect(functions.isEmail('@.edu')).toBe(false);
});

// isStrongPassword
test('checking if ProfessorPowell is a strong password', () => {
    expect(functions.isStrongPassword('ProfessorPowell')).toBe(true);
});

test('checking if CSE_110 is a strong password', () => {
    expect(functions.isStrongPassword('CSE_110')).toBe(true);
});

test('checking if A is a strong password', () => {
    expect(functions.isStrongPassword('A')).toBe(false);
});

test('checking if _+_+_+ is a strong password', () => {
    expect(functions.isStrongPassword('_+_+_+')).toBe(false);
});

// isDate
test('checking if 01/01/2022 is a date', () => {
    expect(functions.isDate('01/01/2022')).toBe(true);
});

test('checking if 02/27/2022 is a date', () => {
    expect(functions.isDate('02/27/2022')).toBe(true);
});

test('checking if 13/31/99999 is a date', () => {
    expect(functions.isDate('13/31/99999')).toBe(false);
});

test('checking if 01312022 is a date', () => {
    expect(functions.isDate('01312022')).toBe(false);
});

// isHexColor
test('checking if #fff is a hex color', () => {
    expect(functions.isHexColor('#fff')).toBe(true);
});

test('checking if #000000 is a hex color', () => {
    expect(functions.isHexColor('#123abc')).toBe(true);
});

test('checking if 01/01/2022 is a hex color', () => {
    expect(functions.isHexColor('#0')).toBe(false);
});

test('checking if CSE_110 is a hex color', () => {
    expect(functions.isHexColor('f')).toBe(false);
});
