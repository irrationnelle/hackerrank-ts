// www.hackerrank.com/challenges/the-time-in-words/problem
import { expect } from 'chai';
import {
  divideTime, belowTwenty, convertMinutes, checkMinutes, getTimeText,
} from '../src/time-in-words';

describe('Time in words', () => {
  describe('to control hour time', () => {
    const exampleTime = '5:00';

    it('divide with :', () => {
      const divideArr = divideTime(exampleTime);
      expect(divideArr).to.have.members(['5', '00']);
    });

    it('first num is "5" divide with :', () => {
      const [firstTime] = divideTime(exampleTime);
      expect(firstTime).deep.equal('5');
    });

    it('number to string', () => {
      const [firstTime] = divideTime(exampleTime);
      const index = parseInt(firstTime, 10);
      const firstTimeString = belowTwenty[index];
      expect(firstTimeString).deep.equal('five');
    });
  });

  describe('to control minute times', () => {
    it('17 minutes', () => {
      const time = '5:17';
      const [hour, minutes] = divideTime(time);
      const result = convertMinutes(minutes);
      expect(result).deep.equal('seventeen');
    });

    it('22 minutes', () => {
      const time = '5:22';
      const [hour, minutes] = divideTime(time);
      const result = convertMinutes(minutes);
      expect(result).deep.equal('twenty two');
    });

    it('29 minutes', () => {
      const time = '5:29';
      const [hour, minutes] = divideTime(time);
      const result = convertMinutes(minutes);
      expect(result).deep.equal('twenty nine');
    });

    it('30 minutes', () => {
      const time = '5:30';
      const [hour, minutes] = divideTime(time);
      const result = convertMinutes(minutes);
      expect(result).deep.equal('half');
    });

    it('39 minutes', () => {
      const time = '5:39';
      const [hour, minutes] = divideTime(time);
      const result = convertMinutes(minutes);
      expect(result).deep.equal('twenty one');
    });

    it('42 minutes', () => {
      const time = '5:42';
      const [hour, minutes] = divideTime(time);
      const result = convertMinutes(minutes);
      expect(result).deep.equal('eighteen');
    });

    it('51 minutes', () => {
      const time = '5:51';
      const [hour, minutes] = divideTime(time);
      const result = convertMinutes(minutes);
      expect(result).deep.equal('nine');
    });
  });

  describe('15 minutes and 45 minutes should be quarter', () => {
    it('15 minutes', () => {
      const time = '5:15';
      const [hour, minutes] = divideTime(time);
      const result = convertMinutes(minutes);
      expect(result).deep.equal('quarter');
    });

    it('45 minutes', () => {
      const time = '5:45';
      const [hour, minutes] = divideTime(time);
      const result = convertMinutes(minutes);
      expect(result).deep.equal('quarter');
    });
  });

  describe('recognize that minutes is bigger than half minutes', () => {
    it('5:20 is converted in text with past', () => {
      const time = '5:20';
      const [hour, minutes] = divideTime(time);
      const text = checkMinutes(minutes);
      expect(text).to.match(/past/);
    });

    it('5:41 is converted in text with to', () => {
      const time = '5:41';
      const [hour, minutes] = divideTime(time);
      const text = checkMinutes(minutes);
      expect(text).to.match(/to/);
    });

    it('5:30 is converted in text with o clock', () => {
      const time = '5:30';
      const [hour, minutes] = divideTime(time);
      const text = checkMinutes(minutes);
      expect(text).to.match(/o' clock/);
    });
  });

  describe.only('get final answer', () => {
    it("5:00 should be five o' clock", () => {
      const time = '5:00';
      const result = getTimeText(time);
      expect(result).to.match(/five o' clock/);
    });

    it('5:10 should be ten minutes past five', () => {
      const time = '5:10';
      const result = getTimeText(time);
      expect(result).to.match(/ten minutes past five/);
    });

    it('5:01 should be one minutes past five', () => {
      const time = '5:01';
      const result = getTimeText(time);
      expect(result).to.match(/one minute past five/);
    });

    it('5:15 should be quarter past five', () => {
      const time = '5:15';
      const result = getTimeText(time);
      expect(result).to.match(/quarter past five/);
    });

    it('5:30 should be half past five', () => {
      const time = '5:30';
      const result = getTimeText(time);
      expect(result).to.match(/half past five/);
    });

    it('5:20 should be twenty minutes past five', () => {
      const time = '5:20';
      const result = getTimeText(time);
      expect(result).to.match(/twenty minutes past five/);
    });

    it('5:40 should be twenty minutes to six', () => {
      const time = '5:40';
      const result = getTimeText(time);
      expect(result).to.match(/twenty minutes to six/);
    });
    it('5:45 should be twenty minutes to six', () => {
      const time = '5:45';
      const result = getTimeText(time);
      expect(result).to.match(/quarter to six/);
    });
    it('5:47 should be thirteen minutes to six', () => {
      const time = '5:47';
      const result = getTimeText(time);
      expect(result).to.match(/thirteen minutes to six/);
    });
    it('5:28 should be twenty eight minutes past five', () => {
      const time = '5:28';
      const result = getTimeText(time);
      expect(result).to.match(/twenty eight minutes past five/);
    });
  });
});
