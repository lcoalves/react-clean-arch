/* eslint-disable max-params */
import { Formatter } from './formatter';

describe('formatter', () => {
  describe('date', () => {
    const dateMock = new Date('2021-01-01T03:00:00.000Z');

    it.each`
      lang       | format                   | isCapitalized | formattedDate
      ${'en-US'} | ${'MMMM dd'}             | ${false}      | ${'January 01'}
      ${'en-ZA'} | ${'MMMM dd'}             | ${false}      | ${'January 01'}
      ${'es-CO'} | ${'MMMM dd'}             | ${false}      | ${'Enero 01'}
      ${'es-DO'} | ${'MMMM dd'}             | ${false}      | ${'Enero 01'}
      ${'es-EC'} | ${'MMMM dd'}             | ${false}      | ${'Enero 01'}
      ${'es-EC'} | ${'EEE, MMMM d'}         | ${false}      | ${'Vie, Enero 1'}
      ${'pt-BR'} | ${'MMMM dd'}             | ${false}      | ${'janeiro 01'}
      ${'pt-BR'} | ${"EEEEEE, d 'de' MMMM"} | ${true}       | ${'Sex, 1 de janeiro'}
    `(
      'should return the correct formatted date when locale is $lang and format is $format',
      ({ lang, format, formattedDate, isCapitalized }) => {
        jest.spyOn(window.navigator, 'language', 'get').mockReturnValue(lang);
        const dateOptions = {
          formatStr: format,
          isCapitalizedPtBr: isCapitalized,
        };
        const expectedFormattedDate = Formatter.date(dateMock, dateOptions);
        expect(expectedFormattedDate).toEqual(formattedDate);
      },
    );
  });

  describe('number', () => {
    it.each`
      lang       | originalNumber | formattedNumber
      ${'en-US'} | ${1000}        | ${'1,000'}
      ${'en-ZA'} | ${1000}        | ${'1,000'}
      ${'es-CO'} | ${1000}        | ${'1.000'}
      ${'es-DO'} | ${1000}        | ${'1.000'}
      ${'es-EC'} | ${1000}        | ${'1.000'}
      ${'pt-BR'} | ${1000}        | ${'1.000'}
    `(
      'should return the correct formatted number when locale is $lang and given number is $originalNumber',
      ({ lang, originalNumber, formattedNumber }) => {
        jest.spyOn(window.navigator, 'language', 'get').mockReturnValue(lang);
        const expectedFormattedNumber = Formatter.number(originalNumber);
        expect(expectedFormattedNumber).toEqual(formattedNumber);
      },
    );
  });

  describe('percentage', () => {
    it.each`
      lang       | originalNumber | allowNegative | formattedNumber
      ${'en-US'} | ${1}           | ${false}      | ${'1%'}
      ${'en-US'} | ${-1}          | ${false}      | ${'1%'}
      ${'en-US'} | ${-1}          | ${true}       | ${'-1%'}
      ${'en-US'} | ${10.5}        | ${false}      | ${'10.5%'}
      ${'en-ZA'} | ${10.5}        | ${false}      | ${'10.5%'}
      ${'es-CO'} | ${10.5}        | ${false}      | ${'10,5%'}
      ${'es-DO'} | ${10.5}        | ${false}      | ${'10,5%'}
      ${'es-EC'} | ${10.5}        | ${false}      | ${'10,5%'}
      ${'pt-BR'} | ${10.5}        | ${undefined}  | ${'10,5%'}
    `(
      'should return the correct formatted number when locale is $lang and given number is $originalNumber',
      ({ lang, originalNumber, allowNegative, formattedNumber }) => {
        jest.spyOn(window.navigator, 'language', 'get').mockReturnValue(lang);
        const expectedFormattedNumber = Formatter.percentage(originalNumber, allowNegative);
        expect(expectedFormattedNumber).toEqual(formattedNumber);
      },
    );
  });

  describe('capitalize', () => {
    it('should return correct capitalized string', () => {
      const expectedCapitalizedString = Formatter.capitalize('capitalize');
      expect(expectedCapitalizedString).toEqual('Capitalize');
    });
  });

  describe('truncateString', () => {
    const MAX_CHIP_LENGTH = 38;
    it.each`
      originalString                                       | truncatedString
      ${'Ex ipsum veniam esse'}                            | ${'Ex ipsum veniam esse'}
      ${'Ex ipsum veniam esse eu voluptate reprehenderit'} | ${'Ex ipsum veniam esse eu voluptate repr...'}
    `(
      `should return the correct string when string length is $originalString.length`,
      ({ originalString, truncatedString }) => {
        const expectedTruncatedString = Formatter.truncate(originalString, MAX_CHIP_LENGTH);
        expect(expectedTruncatedString).toEqual(truncatedString);
      },
    );
  });
});
