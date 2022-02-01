import {YearLeap} from "./problems";

describe('Year Leap', () => {
   test('A year is not a leap year if not divisible by 4', () => {
       const year = 1997;

       expect(YearLeap(year)).toBe(false);
   });

   test('A year is a leap year if divisible by 4', () => {
       const year = 1996;

       expect(YearLeap(year)).toBe(true);
   });

   test('A year is a leap year if divisible by 400', () => {
       const year = 1600;

       expect(YearLeap(year)).toBe(true);
   });

   test('A year is not a leap year if divisible by 100 but not by 400', () => {
       const year = 1800;

       expect(YearLeap(year)).toBe(false);
   });
});
