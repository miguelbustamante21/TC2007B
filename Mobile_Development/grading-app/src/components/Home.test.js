import { getEquivalence } from "./Home.js"

describe('Individual conversion function', () => {
    test('Grade conversion', () => {
        expect(getEquivalence(99)).toBe('A');
        expect(getEquivalence(94)).toBe('A');
        expect(getEquivalence(92)).toBe('A-');
        expect(getEquivalence(88)).toBe('B+');
        expect(getEquivalence(80)).toBe('B-');
        expect(getEquivalence(74)).toBe('C');
        expect(getEquivalence(30)).toBe('E');
        expect(getEquivalence(0)).toBe('E');
        expect(getEquivalence(100)).toBe('A');
        expect(getEquivalence(-1)).toBe('');
        expect(getEquivalence(101)).toBe('');
        expect(getEquivalence('TEST')).toBe('');
        expect(getEquivalence(1.3333333337)).toBe('');
        expect(getEquivalence('')).toBe('');
        expect(getEquivalence('99')).toBe('A');
        expect(getEquivalence('94')).toBe('A');
        expect(getEquivalence('92')).toBe('A-');
        expect(getEquivalence('88')).toBe('B+');
        expect(getEquivalence('80')).toBe('B-');
        expect(getEquivalence('74')).toBe('C');
        expect(getEquivalence('30')).toBe('E');
        expect(getEquivalence('0')).toBe('E');
        expect(getEquivalence('100')).toBe('A');
        expect(getEquivalence(-'1')).toBe();
        expect(getEquivalence('101')).toBe();
        expect(getEquivalence('1.3333333337')).toBe('');
        expect(getEquivalence(null)).toBe('');
    })
});